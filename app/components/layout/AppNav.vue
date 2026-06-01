<script setup lang="ts">
const colorMode = useColorMode()
const { active } = useScrollSpy('hero')
const czOpen = useState<boolean>('cz-open', () => false)
const mobileOpen = useState<boolean>('mobile-open', () => false)

const scrolled = ref(false)
function onScroll() {
    scrolled.value = window.scrollY > 30
}
onMounted(() => {
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

function toggleMode() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

function go(id: string) {
    scrollToSection(id)
}
</script>

<template>
    <nav
        class="fixed top-0 left-0 right-0 z-[900] flex items-center justify-between px-[var(--gutter)] border-b border-b-transparent transition-[padding,background,border-color] duration-[400ms] ease-[var(--ease)]"
        :class="scrolled
            ? 'py-[12px] bg-[var(--surface-glass)] backdrop-blur-[18px] backdrop-saturate-[1.6] !border-b-border-soft'
            : 'py-[18px]'"
    >
        <a
            href="#hero"
            class="flex items-center gap-[11px] font-display font-bold text-[18px] tracking-[-0.01em] text-text-base"
            aria-label="NDLab — home"
            @click.prevent="go('hero')"
        >
            <span class="size-[30px] rounded-[9px] grid place-items-center [background:var(--grad)] text-white font-mono text-[13px] font-bold shadow-[0_6px_18px_-6px_rgba(var(--accent-rgb),0.7)]"><span class="inline-block -translate-y-[0.5px]">&lt;/&gt;</span></span>NDLab
        </a>

        <div class="max-[768px]:hidden flex items-center gap-1">
            <a
                v-for="item in navItems"
                :key="item.id"
                :href="`#${item.id}`"
                class="relative text-[14px] px-[14px] py-[9px] rounded-full font-normal transition-colors duration-[250ms]"
                :class="active === item.id
                    ? 'text-text-base after:content-[\'\'] after:absolute after:left-[14px] after:right-[14px] after:bottom-[2px] after:h-[2px] after:rounded-[2px] after:[background:var(--grad)]'
                    : 'text-text-muted hover:text-text-base'"
                @click.prevent="go(item.id)"
            >
                <span class="font-mono text-[10.5px] text-accent opacity-70 mr-[5px]">{{ item.n }}</span>{{ item.label }}
            </a>
        </div>

        <div class="flex items-center gap-[10px]">
            <UButton
                color="neutral"
                variant="outline"
                square
                class="rounded-full size-10 justify-center transition-transform duration-[250ms] hover:rotate-[15deg]"
                aria-label="Toggle light and dark mode"
                @click="toggleMode"
            >
                <UIcon
                    name="i-heroicons-sun"
                    class="size-[18px] hidden dark:block"
                />
                <UIcon
                    name="i-heroicons-moon"
                    class="size-[18px] block dark:hidden"
                />
            </UButton>

            <UButton
                icon="i-heroicons-swatch"
                color="neutral"
                variant="outline"
                square
                class="rounded-full size-10 justify-center transition-transform duration-[250ms] hover:rotate-45"
                aria-label="Customize theme"
                aria-haspopup="dialog"
                :aria-expanded="czOpen"
                @click="czOpen = true"
            />

            <UButton
                icon="i-heroicons-bars-3"
                color="neutral"
                variant="outline"
                square
                class="rounded-full size-10 justify-center hidden max-[768px]:inline-flex"
                aria-label="Open menu"
                @click="mobileOpen = true"
            />
        </div>
    </nav>
</template>
