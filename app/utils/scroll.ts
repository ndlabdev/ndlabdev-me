import { prefersReducedMotion } from './motion'

/** Smooth-scroll to the very top (instant when reduced-motion is on). */
export function scrollToTop() {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
}

/** Smooth-scroll to a section by id, offset for the fixed nav. */
export function scrollToSection(id: string, offset = 80) {
    if (id === 'hero') return scrollToTop()
    const el = document.querySelector(`#${id}`) as HTMLElement | null
    if (!el) return
    window.scrollTo({ top: el.offsetTop - offset, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
}
