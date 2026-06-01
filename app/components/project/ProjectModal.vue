<script setup lang="ts">
const props = defineProps<{
    selectedProject: typeof siteConfig.projects[number]
}>()

const open = ref(false)

const SECTION_ICON: Record<string, string> = {
    responsibilities: 'i-heroicons-wrench-screwdriver',
    highlights: 'i-heroicons-sparkles',
    challenges: 'i-heroicons-bolt',
    outcomes: 'i-heroicons-trophy'
}

const meta = computed(() => {
    const scalarMeta: { key: string, label: string, value: string }[] = []
    const arrayMeta: { key: string, label: string, icon: string, items: string[] }[] = []

    for (const [key, value] of Object.entries(props.selectedProject.details)) {
        const label = createLabelFromKey(key)

        if (Array.isArray(value)) {
            if (value.length > 0) arrayMeta.push({ key, label, icon: SECTION_ICON[key] || 'i-heroicons-list-bullet', items: value })
        } else if (typeof value === 'string' && value.trim().length > 0) {
            scalarMeta.push({ key, label, value: value.trim() })
        }
    }

    // Role + year headline the title block, so keep them out of the info grid.
    return {
        role: scalarMeta.find(m => m.key === 'role')?.value,
        year: scalarMeta.find(m => m.key === 'year')?.value,
        scalarMeta: scalarMeta.filter(m => m.key !== 'role' && m.key !== 'year'),
        arrayMeta
    }
})

const modalUi = {
    overlay: 'bg-[rgba(5,6,10,0.6)] backdrop-blur-[3px]',
    content: 'bg-[var(--surface-glass)] backdrop-blur-[24px] backdrop-saturate-[1.6] ring-0 border border-border-soft rounded-[var(--r-lg)] max-w-[680px] max-h-[88dvh] overflow-hidden shadow-[var(--shadow)] flex flex-col p-0 divide-y-0'
}
</script>

<template>
    <UModal
        v-model:open="open"
        :title="selectedProject.title"
        :ui="modalUi"
    >
        <UButton
            label="Details"
            trailing-icon="i-heroicons-arrow-right"
            color="neutral"
            variant="ghost"
            :ui="btnProjectGhostUi"
        />

        <template #content>
            <button
                type="button"
                aria-label="Close"
                class="absolute top-[14px] right-[14px] z-[3] size-[34px] grid place-items-center rounded-full text-white bg-[rgba(0,0,0,0.4)] hover:bg-[rgba(0,0,0,0.6)] backdrop-blur-[4px] transition-colors"
                @click="open = false"
            >
                <UIcon
                    name="i-heroicons-x-mark"
                    class="size-[18px]"
                />
            </button>

            <!-- Full-bleed banner -->
            <div class="relative h-[200px] w-full overflow-hidden bg-surface-2 shrink-0">
                <NuxtImg
                    :src="selectedProject.image"
                    :alt="selectedProject.title"
                    width="960"
                    height="500"
                    format="webp"
                    quality="85"
                    fit="cover"
                    provider="cloudinary"
                    class="absolute inset-0 size-full object-cover"
                />
                <div class="absolute inset-x-0 top-0 h-[64px] [background:linear-gradient(to_bottom,rgba(10,11,15,0.5),transparent)]" />
                <div class="absolute inset-x-0 bottom-0 h-[88px] [background:linear-gradient(to_top,var(--surface),transparent)]" />
            </div>

            <!-- Scrollable body -->
            <div class="flex-1 min-h-0 overflow-y-auto p-[clamp(22px,3.5vw,32px)] space-y-[28px]">
                <div>
                    <span class="eyebrow">
                        <span class="idx">{{ meta.year || '//' }}</span>
                        <span class="bar" />
                        {{ meta.role || 'Case study' }}
                    </span>
                    <h3 class="font-display font-semibold text-[clamp(22px,3.6vw,32px)] tracking-[-0.02em] text-text-base mt-[12px] leading-tight">
                        {{ selectedProject.title }}
                    </h3>
                    <div class="flex flex-wrap gap-[7px] mt-[16px]">
                        <UBadge
                            v-for="t in selectedProject.tech"
                            :key="t"
                            :label="t"
                            color="neutral"
                            variant="subtle"
                            size="sm"
                            class="font-mono rounded-[6px]"
                        />
                    </div>
                </div>

                <section>
                    <h4 class="font-mono text-[11.5px] tracking-[0.12em] uppercase text-text-faint mb-[12px]">
                        // Overview
                    </h4>
                    <p class="text-text-muted text-[14.5px] leading-[1.7]">
                        {{ selectedProject.description }}
                    </p>
                </section>

                <section v-if="meta.scalarMeta.length">
                    <h4 class="font-mono text-[11.5px] tracking-[0.12em] uppercase text-text-faint mb-[12px]">
                        // Project info
                    </h4>
                    <div class="grid sm:grid-cols-2 gap-x-[28px]">
                        <div
                            v-for="item in meta.scalarMeta"
                            :key="item.key"
                            class="flex items-start justify-between gap-4 py-[10px] border-b border-dashed border-border-soft"
                        >
                            <span class="font-mono text-[12px] text-text-faint shrink-0">{{ item.label }}</span>
                            <span class="text-[13.5px] text-text-base text-right">{{ item.value }}</span>
                        </div>
                    </div>
                </section>

                <section
                    v-for="section in meta.arrayMeta"
                    :key="section.key"
                >
                    <h4 class="font-mono text-[11.5px] tracking-[0.12em] uppercase text-text-faint mb-[14px] flex items-center gap-[8px]">
                        <UIcon
                            :name="section.icon"
                            class="size-[15px] text-accent-3"
                        />
                        {{ section.label }}
                    </h4>
                    <ul class="flex flex-col gap-[10px]">
                        <li
                            v-for="item in section.items"
                            :key="item"
                            class="flex gap-[11px] text-[14px] text-text-muted leading-[1.65] before:content-['▹'] before:text-accent before:shrink-0"
                        >
                            <span class="flex-1 min-w-0">{{ item }}</span>
                        </li>
                    </ul>
                </section>
            </div>

            <!-- Footer -->
            <div class="shrink-0 border-t border-border-soft p-[clamp(18px,3vw,24px)] flex gap-2 flex-wrap">
                <UButton
                    v-if="selectedProject.links.live"
                    :to="selectedProject.links.live"
                    target="_blank"
                    icon="i-heroicons-arrow-top-right-on-square"
                    label="Live"
                    :ui="btnProjectPrimaryUi"
                />
                <UButton
                    v-if="selectedProject.links.github"
                    :to="selectedProject.links.github"
                    target="_blank"
                    color="neutral"
                    variant="ghost"
                    icon="i-simple-icons-github"
                    label="GitHub"
                    :ui="btnProjectGhostUi"
                />
            </div>
        </template>
    </UModal>
</template>
