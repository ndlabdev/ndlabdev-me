/**
 * Global, dependency-free motion system (ported from the design's app.js).
 * Reveal/stagger/counter via IntersectionObserver, magnetic buttons, 3D card
 * tilt, background parallax, scroll-progress bar, hero split-text + typewriter.
 * Gated on prefers-reduced-motion AND the data-reduce-motion attribute.
 */
export default defineNuxtPlugin(() => {
    const reduced = prefersReducedMotion

    const $$ = (s: string, c: ParentNode = document) => [...c.querySelectorAll(s)] as HTMLElement[]
    const $ = (s: string, c: ParentNode = document) => c.querySelector(s) as HTMLElement | null

    let io: IntersectionObserver | null = null
    let heroStarted = false
    const cleanups: Array<() => void> = []

    function animateCount(el: HTMLElement) {
        const target = parseFloat(el.dataset.count || '0')
        const suffix = el.dataset.suffix || ''
        if (reduced()) {
            el.textContent = target + suffix
            return
        }
        const dur = 1400
        const start = performance.now()
        const step = (now: number) => {
            const p = Math.min((now - start) / dur, 1)
            const eased = 1 - Math.pow(1 - p, 3)
            el.textContent = Math.round(target * eased) + (p === 1 ? suffix : '')
            if (p < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
    }

    function observeAll() {
        io = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (!e.isIntersecting) return
                const el = e.target as HTMLElement
                if (el.hasAttribute('data-stagger')) {
                    ;[...el.children].forEach((k, i) => {
                        ;(k as HTMLElement).style.transitionDelay = `${i * 0.07}s`
                    })
                }
                el.classList.add('in')
                if (el.dataset.count) animateCount(el)
                io?.unobserve(el)
            })
        }, { threshold: 0, rootMargin: '0px 0px -14% 0px' })
        $$('.reveal, [data-stagger], [data-count]').forEach(el => io!.observe(el))
    }

    /* ---------- Hero: split text + typewriter ---------- */
    function readRoles(el: HTMLElement | null): string[] {
        if (!el?.dataset.roles) return []
        try {
            return JSON.parse(el.dataset.roles) as string[]
        } catch {
            return []
        }
    }
    function startHero() {
        // Run once — init() can fire twice on first load (app:mounted + page:finish);
        // a second typewriter loop on the same node would fight the first and stutter.
        if (heroStarted) return
        heroStarted = true
        const rotEl = $('#roleRotate')
        if (reduced()) {
            if (rotEl) rotEl.textContent = readRoles(rotEl)[0] || ''
            return
        }
        $$('.hero h1 .word').forEach((w, i) => {
            w.style.transform = 'translateY(110%)'
            w.style.display = 'inline-block'
            w.style.transition = 'transform .85s cubic-bezier(0.16,1,0.3,1)'
            w.style.transitionDelay = `${0.05 + i * 0.07}s`
            requestAnimationFrame(() => {
                w.style.transform = 'translateY(0)'
            })
        })

        const roles = readRoles(rotEl)
        if (rotEl && roles.length) {
            let ri = 0
            let ci = 0
            let deleting = false
            const tick = () => {
                const word = roles[ri]!
                rotEl.textContent = word.slice(0, ci)
                if (!deleting && ci < word.length) {
                    ci++
                    setTimeout(tick, 70)
                } else if (!deleting && ci === word.length) {
                    deleting = true
                    setTimeout(tick, 1600)
                } else if (deleting && ci > 0) {
                    ci--
                    setTimeout(tick, 35)
                } else {
                    deleting = false
                    ri = (ri + 1) % roles.length
                    setTimeout(tick, 280)
                }
            }
            setTimeout(tick, 900)
        }
    }

    /* ---------- Pointer micro-interactions ---------- */
    function pointerFx() {
        if (reduced() || !window.matchMedia('(hover: hover)').matches) return

        // Cache the element rect on enter (one layout read per hover) instead of
        // reading getBoundingClientRect on every pointermove (forces reflow each move).
        const bindTilt = (el: HTMLElement, onMove: (e: PointerEvent, r: DOMRect) => void) => {
            let rect: DOMRect | null = null
            const enter = () => {
                rect = el.getBoundingClientRect()
            }
            const move = (e: PointerEvent) => {
                if (rect) onMove(e, rect)
            }
            const leave = () => {
                rect = null
                el.style.transform = ''
            }
            el.addEventListener('pointerenter', enter, { passive: true })
            el.addEventListener('pointermove', move as EventListener, { passive: true })
            el.addEventListener('pointerleave', leave)
            cleanups.push(() => {
                el.removeEventListener('pointerenter', enter)
                el.removeEventListener('pointermove', move as EventListener)
                el.removeEventListener('pointerleave', leave)
            })
        }

        $$('.project').forEach(card => bindTilt(card, (e, r) => {
            const px = (e.clientX - r.left) / r.width - 0.5
            const py = (e.clientY - r.top) / r.height - 0.5
            card.style.transform = `perspective(900px) rotateY(${px * 7}deg) rotateX(${-py * 7}deg) translateY(-4px)`
        }))

        $$('[data-magnetic]').forEach(btn => bindTilt(btn, (e, r) => {
            const x = e.clientX - r.left - r.width / 2
            const y = e.clientY - r.top - r.height / 2
            btn.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`
        }))
    }

    /* ---------- Scroll-driven (progress, parallax, timeline) ---------- */
    function scrollFx() {
        const sp = $('#scrollProgress')
        const bgGrid = $('.bg-grid')
        const bgAurora = $('.bg-aurora')
        const tlFill = $('#tlFill')
        const tlSpine = $('#tlSpine')
        const tlItems = $$('.tl-item')
        const parallaxOn = !reduced() && window.innerWidth > 768

        const onScroll = () => {
            // ---- READ phase (batch all layout reads before any write) ----
            const sc = window.scrollY
            const vh = window.innerHeight
            const h = document.documentElement.scrollHeight - vh
            let p = 0
            const hasTimeline = !!(tlFill && tlSpine)
            if (hasTimeline) {
                const r = tlSpine!.getBoundingClientRect()
                const startP = vh * 0.7
                const endP = vh * 0.3
                p = Math.max(0, Math.min(1, (startP - r.top) / (r.height + (startP - endP))))
            }

            // ---- WRITE phase ----
            if (sp) sp.style.width = `${h > 0 ? (sc / h) * 100 : 0}%`
            if (parallaxOn) {
                if (bgGrid) bgGrid.style.transform = `translate3d(0, ${sc * 0.04}px, 0)`
                if (bgAurora) bgAurora.style.transform = `translate3d(0, ${sc * 0.08}px, 0)`
            }
            if (hasTimeline) {
                tlFill!.style.height = `${p * 100}%`
                const lit = Math.floor(p * (tlItems.length + 0.4))
                tlItems.forEach((it, i) => it.classList.toggle('lit', i < lit || (p > 0.02 && i === 0)))
            }
        }
        let ticking = false
        const handler = () => {
            if (ticking) return
            ticking = true
            requestAnimationFrame(() => {
                onScroll()
                ticking = false
            })
        }
        window.addEventListener('scroll', handler, { passive: true })
        cleanups.push(() => window.removeEventListener('scroll', handler))
        onScroll()
    }

    function teardown() {
        io?.disconnect()
        io = null
        cleanups.splice(0).forEach(fn => fn())
    }

    function init() {
        // Idempotent: reset first so re-runs don't stack duplicate loops/observers.
        teardown()
        observeAll()
        startHero()
        pointerFx()
        scrollFx()
    }

    // Run only AFTER hydration is fully complete (post-Suspense + idle). Running
    // earlier lets scrollFx add the `.lit`/`.in` classes mid-hydration, which Vue
    // then flags as a hydration mismatch against the un-classed SSR markup.
    onNuxtReady(init)
})
