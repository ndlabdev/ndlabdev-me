<template>
    <aside class="w-full lg:w-80 lg:block hidden shrink-0 mt-17">
        <!-- Sticky wrapper -->
        <div class="sticky top-36 space-y-4">
            <!-- Profile Card -->
            <div class="relative bg-white dark:bg-neutral-900 rounded-3xl shadow p-6 pt-20 text-center transition-colors">
                <!-- Avatar floating -->
                <div class="absolute inset-x-0 -top-16 flex justify-center">
                    <NuxtImg
                        :src="siteConfig.avatar || siteConfig.placeholderAvatar"
                        :alt="siteConfig.name"
                        width="128"
                        height="128"
                        format="webp"
                        quality="80"
                        class="min-w-32 min-h-32 object-cover rounded-full ring-4 ring-primary-100 shadow-lg"
                    />
                </div>

                <!-- Name -->
                <h3 class="mt-2 text-2xl font-semibold text-neutral-900 dark:text-neutral-100 transition-colors">
                    {{ siteConfig.brand }}
                </h3>

                <!-- Roles (typewriter) -->
                <div class="mt-1 text-sm text-neutral-600 dark:text-neutral-400 min-h-[24px] transition-colors">
                    <TypingSubtitle />
                </div>

                <!-- Social icons -->
                <div class="mt-4 flex flex-wrap justify-center gap-3">
                    <UTooltip
                        v-for="social in siteConfig.socials"
                        :key="social.name"
                        :text="social.name"
                        :popper="{ placement: 'top' }"
                        arrow
                    >
                        <ULink
                            :href="social.url"
                            target="_blank"
                            :class="social.class"
                            class="group flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-300 transition-colors"
                        >
                            <UIcon
                                :name="social.icon"
                                class="size-5"
                            />
                        </ULink>
                    </UTooltip>
                </div>
            </div>

            <!-- Contact Info -->
            <div
                class="bg-white dark:bg-neutral-900 rounded-3xl shadow py-6 px-5 transition-colors"
            >
                <ul class="space-y-4">
                    <li
                        v-for="info in siteConfig.contactInfo.filter(i => ['Email', 'Phone', 'Location'].includes(i.title))"
                        :key="info.title"
                        class="flex items-start gap-3"
                    >
                        <!-- Icon -->
                        <UIcon
                            :name="info.icon"
                            class="text-primary size-5 shrink-0 mt-0.5"
                        />

                        <!-- Content -->
                        <div class="text-sm">
                            <p
                                class="font-semibold text-neutral-900 dark:text-neutral-100 transition-colors"
                            >
                                {{ info.title }}
                            </p>

                            <template v-if="info.link">
                                <a
                                    :href="info.link"
                                    target="_blank"
                                    class="text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors break-words"
                                >
                                    {{ info.value }}
                                </a>
                            </template>
                            <template v-else>
                                <p class="text-neutral-600 dark:text-neutral-400 break-words">
                                    {{ info.value }}
                                </p>
                            </template>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </aside>
</template>
