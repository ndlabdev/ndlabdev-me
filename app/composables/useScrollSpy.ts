/**
 * Scroll-spy via IntersectionObserver (no per-scroll offset math).
 * `active` updates only when a section crosses the activation band.
 */
export function useScrollSpy(defaultId = 'hero') {
    const active = ref(defaultId)
    let observer: IntersectionObserver | null = null

    onMounted(() => {
        const sections = [...document.querySelectorAll<HTMLElement>('section[id]')]
        if (!sections.length) return
        observer = new IntersectionObserver((entries) => {
            for (const e of entries) {
                if (e.isIntersecting) active.value = (e.target as HTMLElement).id
            }
        }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 })
        sections.forEach(s => observer!.observe(s))
    })
    onBeforeUnmount(() => observer?.disconnect())

    return { active, scrollTo: scrollToSection }
}
