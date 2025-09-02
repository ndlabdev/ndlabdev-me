<script setup lang="ts">
interface NavItem {
    label: string
    to: string
    icon: string
}

const props = defineProps<{
    navItems: NavItem[]
    activeSection: string
    scrollToSection: (id: string) => void
}>()

const isOpen = ref(false)

function handleNavClick(id: string) {
    props.scrollToSection(id)
    isOpen.value = false
}
</script>

<template>
    <!-- Slideover -->
    <USlideover
        v-model:open="isOpen"
        side="left"
        :ui="{ content: 'max-w-xs' }"
    >
        <!-- Mobile menu button -->
        <UButton
            icon="i-heroicons-bars-3"
            class="lg:hidden"
            aria-label="Open menu"
        />

        <template #content>
            <div class="flex flex-col h-full overflow-y-auto bg-white dark:bg-neutral-900">
                <!-- Profile -->
                <div class="relative text-center px-6 pt-10 pb-6 border-b border-neutral-200 dark:border-neutral-700">
                    <NuxtImg
                        :src="siteConfig.avatar || siteConfig.placeholderAvatar"
                        :alt="siteConfig.name"
                        width="96"
                        height="96"
                        format="webp"
                        quality="80"
                        class="min-w-24 h-24 object-cover rounded-full ring-4 ring-primary-100 shadow mx-auto"
                    />

                    <h3 class="mt-3 text-lg font-bold text-neutral-900 dark:text-neutral-100">
                        {{ siteConfig.brand }}
                    </h3>
                    <p class="text-sm text-neutral-600 dark:text-neutral-400">
                        <TypingSubtitle />
                    </p>

                    <!-- Socials -->
                    <div class="mt-4 flex justify-center gap-3 flex-wrap">
                        <ULink
                            v-for="social in siteConfig.socials"
                            :key="social.name"
                            :href="social.url"
                            target="_blank"
                            :class="social.class"
                            class="flex h-9 w-9 items-center justify-center rounded-full
                     bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300
                     hover:bg-primary hover:text-white transition-colors"
                        >
                            <UIcon
                                :name="social.icon"
                                class="size-4"
                            />
                        </ULink>
                    </div>
                </div>

                <!-- Navigation -->
                <nav class="flex-1 px-4 py-6 space-y-2">
                    <NuxtLink
                        v-for="item in props.navItems"
                        :key="item.label"
                        :href="item.to"
                        :class="props.activeSection === item.to
                            ? 'bg-primary/10 text-primary'
                            : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'"
                        class="w-full flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-colors"
                        @click="handleNavClick(item.to)"
                    >
                        <UIcon
                            :name="item.icon"
                            class="size-5 shrink-0"
                        />
                        {{ item.label }}
                    </NuxtLink>
                </nav>

                <!-- Contact Info -->
                <div class="px-6 py-5 border-t border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800">
                    <ul class="space-y-4 text-sm">
                        <li
                            v-for="info in siteConfig.contactInfo.filter(i => ['Email', 'Phone', 'Location'].includes(i.title))"
                            :key="info.title"
                            class="flex items-start gap-3"
                        >
                            <UIcon
                                :name="info.icon"
                                class="text-primary size-5 shrink-0 mt-0.5"
                            />
                            <div>
                                <p class="font-semibold text-neutral-900 dark:text-neutral-100">
                                    {{ info.title }}
                                </p>
                                <template v-if="info.link">
                                    <a
                                        :href="info.link"
                                        class="text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors break-words"
                                    >
                                        {{ info.value }}
                                    </a>
                                </template>
                                <template v-else>
                                    <span class="text-neutral-600 dark:text-neutral-400 break-words">
                                        {{ info.value }}
                                    </span>
                                </template>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </template>
    </USlideover>
</template>
