<template>
    <aside class="w-full lg:w-96 shrink-0 mt-17">
        <!-- Sticky wrapper -->
        <div class="sticky top-36">
            <!-- Profile Card -->
            <div class="relative bg-white rounded-3xl shadow p-6 pt-20 text-center">
                <!-- Avatar floating -->
                <div class="absolute inset-x-0 -top-16 flex justify-center">
                    <NuxtImg
                        :src="siteConfig.avatar"
                        :alt="siteConfig.name"
                        width="128"
                        height="128"
                        format="webp"
                        quality="80"
                        class="w-32 h-32 rounded-full ring-4 ring-primary-100 shadow-lg"
                    />
                </div>

                <!-- Name -->
                <h3 class="mt-2 text-2xl font-semibold text-neutral-900">
                    {{ siteConfig.brand }}
                </h3>

                <!-- Roles (typewriter) -->
                <div class="mt-1 text-sm text-neutral-600 min-h-[24px]">
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
                            class="group flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200 text-neutral-600 transition-colors"
                        >
                            <UIcon
                                :name="social.icon"
                                class="size-5"
                            />
                        </ULink>
                    </UTooltip>
                </div>
            </div>
        </div>
    </aside>
</template>
