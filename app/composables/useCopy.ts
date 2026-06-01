import { useClipboard } from '@vueuse/core'

/** Copy text to clipboard (VueUse) and surface a Nuxt UI toast. */
export function useCopy() {
    const toast = useToast()
    const { copy: copyToClipboard, isSupported } = useClipboard({ legacy: true })

    async function copy(value: string, label?: string) {
        if (!isSupported.value) {
            toast.add({ title: 'Clipboard not supported', icon: 'i-heroicons-exclamation-triangle', color: 'error' })
            return
        }
        try {
            await copyToClipboard(value)
            toast.add({ title: label ? `Copied ${label}` : 'Copied', icon: 'i-heroicons-check-circle', color: 'success' })
        } catch {
            toast.add({ title: 'Copy failed', icon: 'i-heroicons-exclamation-triangle', color: 'error' })
        }
    }

    return { copy }
}
