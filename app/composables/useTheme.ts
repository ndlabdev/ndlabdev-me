/**
 * Theme runtime — accent presets + reduce-motion override.
 * Mode (dark/light/system) is owned by Nuxt UI's useColorMode().
 * Accent + reduce-motion persist to localStorage (ndlab-*) and apply
 * data-accent / data-reduce-motion on <html>. FOUC is prevented by the
 * inline head script in nuxt.config.ts.
 */
export interface AccentPreset {
    id: string
    name: string
    grad: string
}

export const ACCENT_PRESETS: AccentPreset[] = [
    { id: 'indigo', name: 'Indigo', grad: 'linear-gradient(135deg,#6366F1,#A855F7 50%,#22D3EE)' },
    { id: 'aurora', name: 'Aurora', grad: 'linear-gradient(135deg,#8B5CF6,#D946EF 50%,#22D3EE)' },
    { id: 'emerald', name: 'Emerald', grad: 'linear-gradient(135deg,#10B981,#14B8A6 50%,#34D399)' },
    { id: 'sunset', name: 'Sunset', grad: 'linear-gradient(135deg,#FB923C,#F43F5E)' },
    { id: 'amber', name: 'Amber', grad: 'linear-gradient(135deg,#F59E0B,#FBBF24 50%,#FB923C)' },
    { id: 'mono', name: 'Mono', grad: 'linear-gradient(135deg,#94A3B8,#CBD5E1 50%,#64748B)' }
]

const DEFAULT_ACCENT = 'indigo'

export function useTheme() {
    const accent = useState<string>('ndlab-accent', () => DEFAULT_ACCENT)
    const reduceMotion = useState<boolean>('ndlab-reduce-motion', () => false)

    function withTransition() {
        if (import.meta.server) return
        if (prefersReducedMotion()) return
        document.body.classList.add('theming')
        window.clearTimeout((withTransition as { _t?: number })._t)
        ;(withTransition as { _t?: number })._t = window.setTimeout(
            () => document.body.classList.remove('theming'),
            500
        )
    }

    function setAccent(id: string, animate = true) {
        accent.value = id
        if (import.meta.server) return
        localStorage.setItem('ndlab-accent', id)
        if (animate) withTransition()
        document.documentElement.setAttribute('data-accent', id)
    }

    function setReduceMotion(v: boolean) {
        reduceMotion.value = v
        if (import.meta.server) return
        localStorage.setItem('ndlab-reduce-motion', v ? 'true' : 'false')
        if (v) document.documentElement.setAttribute('data-reduce-motion', 'true')
        else document.documentElement.removeAttribute('data-reduce-motion')
    }

    // Sync reactive state from the attributes set by the FOUC script.
    function hydrate() {
        if (import.meta.server) return
        accent.value = document.documentElement.getAttribute('data-accent') || DEFAULT_ACCENT
        reduceMotion.value = document.documentElement.getAttribute('data-reduce-motion') === 'true'
    }

    return { accent, reduceMotion, presets: ACCENT_PRESETS, setAccent, setReduceMotion, withTransition, hydrate }
}
