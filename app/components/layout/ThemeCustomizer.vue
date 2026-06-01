<script setup lang="ts">
const open = useState<boolean>('cz-open', () => false)
const colorMode = useColorMode()
const { accent, reduceMotion, presets, setAccent, setReduceMotion, withTransition, hydrate } = useTheme()

// Sync the selected accent / reduce-motion from the values the FOUC script
// applied (localStorage → data-* attrs); otherwise the picker always shows the default.
onMounted(hydrate)

const modes = [
    { id: 'dark', label: 'Dark', icon: 'i-heroicons-moon' },
    { id: 'light', label: 'Light', icon: 'i-heroicons-sun' },
    { id: 'system', label: 'Auto', icon: 'i-heroicons-computer-desktop' }
] as const

function setMode(id: string) {
    withTransition()
    colorMode.preference = id
}

function reset() {
    setMode('dark')
    setAccent('indigo')
    setReduceMotion(false)
}

// USlideover handles overlay, focus-trap, Esc, click-outside and scroll-lock.
const slideoverUi = {
    content: 'w-[min(380px,90vw)] max-w-none bg-[var(--surface-glass)] backdrop-blur-[24px] backdrop-saturate-[1.7] border-l border-border-soft ring-0 divide-y-0',
    body: 'flex flex-col gap-[28px]',
    header: 'border-b-0'
}
</script>

<template>
    <USlideover
        v-model:open="open"
        :ui="slideoverUi"
        aria-label="Customize theme"
    >
        <template #title>
            <span class="flex items-center gap-[10px] text-[18px] text-text-base"><span class="font-mono text-[11px] text-accent-3">/theme</span> Customize</span>
        </template>

        <template #body>
            <div>
                <span class="block font-mono text-[11px] tracking-[0.12em] uppercase text-text-faint mb-[13px]">Color mode</span>
                <div
                    class="grid grid-cols-3 gap-1 p-1 bg-surface-2 border border-border-soft rounded-[12px]"
                    role="group"
                    aria-label="Color mode"
                >
                    <button
                        v-for="m in modes"
                        :key="m.id"
                        class="px-2 py-[9px] rounded-[9px] text-[13px] text-text-muted flex items-center justify-center gap-[7px] transition-[color,background] duration-200 aria-pressed:bg-surface aria-pressed:text-text-base aria-pressed:shadow-[0_2px_8px_-2px_rgba(0,0,0,0.4)]"
                        :aria-pressed="colorMode.preference === m.id"
                        @click="setMode(m.id)"
                    >
                        <UIcon
                            :name="m.icon"
                            class="size-[15px]"
                        />{{ m.label }}
                    </button>
                </div>
            </div>

            <div>
                <span class="block font-mono text-[11px] tracking-[0.12em] uppercase text-text-faint mb-[13px]">Accent theme</span>
                <div
                    class="grid grid-cols-3 gap-[10px]"
                    role="group"
                    aria-label="Accent theme"
                >
                    <button
                        v-for="p in presets"
                        :key="p.id"
                        class="group relative p-0 rounded-[13px] border border-border-soft bg-surface-2 overflow-hidden cursor-pointer aspect-[1.5] transition-[transform,border-color] duration-[250ms] ease-[var(--ease)] hover:-translate-y-[3px] hover:border-border-strong aria-pressed:border-[rgba(var(--accent-rgb),0.8)] aria-pressed:shadow-[0_0_0_2px_rgba(var(--accent-rgb),0.35)]"
                        :aria-pressed="accent === p.id"
                        :aria-label="`${p.name} theme`"
                        @click="setAccent(p.id)"
                    >
                        <span
                            class="absolute inset-0"
                            :style="{ background: p.grad }"
                        />
                        <span class="absolute top-[7px] right-[7px] size-[20px] rounded-full grid place-items-center bg-[rgba(255,255,255,0.95)] text-[#0A0B0F] opacity-0 scale-50 transition-[opacity,transform] duration-200 group-aria-pressed:opacity-100 group-aria-pressed:scale-100"><UIcon
                            name="i-heroicons-check"
                            class="size-3"
                        /></span>
                        <span class="absolute inset-x-0 bottom-0 px-2 py-[6px] font-mono text-[10px] text-white text-left [background:linear-gradient(180deg,transparent,rgba(0,0,0,0.55))]">{{ p.name }}</span>
                    </button>
                </div>
            </div>

            <div>
                <span class="block font-mono text-[11px] tracking-[0.12em] uppercase text-text-faint mb-[13px]">Preferences</span>
                <div class="flex items-center justify-between gap-[14px] px-4 py-[14px] border border-border-soft rounded-[12px] bg-surface-2">
                    <div>
                        <div class="text-[13.5px] text-text-base">
                            Reduce motion
                        </div>
                        <div class="text-[11.5px] text-text-faint font-mono mt-[2px]">
                            disable animations
                        </div>
                    </div>
                    <USwitch
                        :model-value="reduceMotion"
                        aria-label="Reduce motion"
                        @update:model-value="setReduceMotion"
                    />
                </div>
                <UButton
                    label="Reset to default"
                    icon="i-heroicons-arrow-path"
                    color="neutral"
                    variant="outline"
                    block
                    class="mt-3 font-mono rounded-[11px]"
                    @click="reset"
                />
            </div>
        </template>
    </USlideover>
</template>
