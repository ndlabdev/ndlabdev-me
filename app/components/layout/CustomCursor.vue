<script setup lang="ts">

// Self-contained custom cursor: initializes once on mount (no plugin timing /
// teardown races). Hover state uses event delegation so lazily-added elements
// are covered too. Disabled on touch / reduced-motion (native cursor kept).
const dotEl = ref<HTMLElement>()
const ringEl = ref<HTMLElement>()
const active = ref(false)

const HOVER_SELECTOR = 'a, button, [role="button"], .project, .chip2, .cz-swatch'

let cleanup: (() => void) | null = null

onMounted(() => {
    if (prefersReducedMotion() || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    active.value = true

    nextTick(() => {
        const dot = dotEl.value
        const ring = ringEl.value
        if (!dot || !ring) return

        document.documentElement.classList.add('custom-cursor')
        let mx = 0
        let my = 0
        let rx = 0
        let ry = 0
        let raf = 0

        const onMove = (e: PointerEvent) => {
            mx = e.clientX
            my = e.clientY
            dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`
        }
        const loop = () => {
            rx += (mx - rx) * 0.18
            ry += (my - ry) * 0.18
            ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`
            raf = requestAnimationFrame(loop)
        }
        const over = (e: PointerEvent) => {
            if ((e.target as Element)?.closest?.(HOVER_SELECTOR)) ring.classList.add('hover')
        }
        const out = (e: PointerEvent) => {
            if ((e.target as Element)?.closest?.(HOVER_SELECTOR)) ring.classList.remove('hover')
        }

        window.addEventListener('pointermove', onMove, { passive: true })
        window.addEventListener('pointerover', over, { passive: true })
        window.addEventListener('pointerout', out, { passive: true })
        loop()

        cleanup = () => {
            window.removeEventListener('pointermove', onMove)
            window.removeEventListener('pointerover', over)
            window.removeEventListener('pointerout', out)
            cancelAnimationFrame(raf)
            document.documentElement.classList.remove('custom-cursor')
        }
    })
})

onBeforeUnmount(() => cleanup?.())
</script>

<template>
    <ClientOnly>
        <div
            id="scrollProgress"
            class="scroll-progress"
        />
        <!-- Teleport to body so the cursor sits in the root stacking context, above any teleported overlay -->
        <Teleport to="body">
            <div
                v-if="active"
                ref="dotEl"
                class="cursor-dot"
                aria-hidden="true"
            />
            <div
                v-if="active"
                ref="ringEl"
                class="cursor-ring"
                aria-hidden="true"
            />
        </Teleport>
    </ClientOnly>
</template>
