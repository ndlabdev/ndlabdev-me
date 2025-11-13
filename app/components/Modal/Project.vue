<script setup lang="ts">
const props = defineProps<{
    selectedProject: typeof siteConfig.projects[number]
}>()

const meta = computed(() => {
    const scalarMeta = []
    const arrayMeta = []

    for (const [key, value] of Object.entries(props.selectedProject.details)) {
        const label = createLabelFromKey(key)

        if (Array.isArray(value)) {
            if (value.length > 0) {
                arrayMeta.push({
                    key,
                    label,
                    items: value
                })
            }
        } else if (typeof value === 'string') {
            const trimmed = value.trim()
            if (trimmed.length > 0) {
                scalarMeta.push({
                    key,
                    label,
                    value: trimmed
                })
            }
        }
    }

    return {
        scalarMeta,
        arrayMeta
    }
})
</script>

<template>
    <UModal
        :title="selectedProject.title"
        :ui="{
            content: 'max-w-3xl',
        }"
    >
        <UButton
            size="sm"
            color="neutral"
            variant="ghost"
            icon="i-lucide-info"
        >
            <span>Details</span>
        </UButton>

        <template #body>
            <div class="space-y-6">
                <section class="space-y-2">
                    <h3 class="text-base font-semibold">
                        Overview
                    </h3>

                    <p class="text-sm leading-relaxed">
                        {{ selectedProject.description }}
                    </p>
                </section>

                <!-- Scalar meta -->
                <section
                    v-if="meta.scalarMeta.length"
                    class="grid gap-2 text-sm"
                >
                    <div
                        v-for="item in meta.scalarMeta"
                        :key="item.key"
                        class="flex justify-between gap-4"
                    >
                        <span class="font-medium text-neutral-900 dark:text-neutral-100">
                            {{ item.label }}
                        </span>

                        <span class="text-right text-neutral-700 dark:text-neutral-200">
                            {{ item.value }}
                        </span>
                    </div>
                </section>

                <!-- Array meta sections -->
                <section
                    v-for="section in meta.arrayMeta"
                    :key="section.key"
                    class="space-y-2"
                >
                    <h4 class="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                        {{ section.label }}
                    </h4>

                    <ul class="list-disc list-inside text-sm text-neutral-700 dark:text-neutral-200 space-y-1">
                        <li
                            v-for="item in section.items"
                            :key="item"
                        >
                            {{ item }}
                        </li>
                    </ul>
                </section>
            </div>
        </template>

        <template #footer>
            <div class="flex gap-2">
                <!-- Live button -->
                <UButton
                    v-if="selectedProject.links.live"
                    :to="selectedProject.links.live"
                    target="_blank"
                    icon="i-heroicons-globe-alt"
                    size="sm"
                    color="primary"
                    variant="solid"
                    class="flex items-center gap-1"
                >
                    <span>Live</span>
                </UButton>

                <!-- GitHub button -->
                <UButton
                    v-if="selectedProject.links.github"
                    :to="selectedProject.links.github"
                    target="_blank"
                    icon="i-simple-icons-github"
                    size="sm"
                    color="neutral"
                    variant="outline"
                    class="flex items-center gap-1"
                >
                    <span>GitHub</span>
                </UButton>
            </div>
        </template>
    </UModal>
</template>
