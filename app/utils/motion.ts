/**
 * True when the user has reduced motion — either via the OS setting or the
 * in-app Theme Customizer (which sets data-reduce-motion on <html>).
 */
export function prefersReducedMotion(): boolean {
    if (import.meta.server) return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
      || document.documentElement.getAttribute('data-reduce-motion') === 'true'
}
