<script setup lang="ts">
const open = useState<boolean>('mobile-open', () => false)

function go(id: string) {
    open.value = false
    setTimeout(() => scrollToSection(id), 60)
}
</script>

<template>
    <USlideover
        v-model:open="open"
        side="top"
        :ui="{ content: 'h-dvh bg-bg ring-0 border-0', overlay: 'bg-transparent' }"
    >
        <template #content>
            <div class="relative h-full flex flex-col justify-center gap-[6px] p-[var(--gutter)]">
                <UButton
                    icon="i-heroicons-x-mark"
                    color="neutral"
                    variant="ghost"
                    class="absolute top-[24px] right-[var(--gutter)] text-text-base"
                    aria-label="Close menu"
                    @click="open = false"
                />
                <a
                    v-for="item in navItems"
                    :key="item.id"
                    :href="`#${item.id}`"
                    class="flex items-baseline gap-4 font-display text-[clamp(34px,9vw,56px)] font-semibold text-text-base"
                    @click.prevent="go(item.id)"
                >
                    <span class="font-mono text-[14px] text-accent">{{ item.n }}</span>{{ item.label }}
                </a>
            </div>
        </template>
    </USlideover>
</template>
