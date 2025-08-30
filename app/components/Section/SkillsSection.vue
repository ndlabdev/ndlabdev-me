<template>
    <section class="bg-white dark:bg-neutral-900 rounded-3xl shadow p-8 mt-12">
        <h2 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
            Skills
        </h2>

        <div class="space-y-8">
            <div
                v-for="(group, index) in siteConfig.skills"
                :key="index"
            >
                <h3 class="text-lg font-semibold text-primary mb-3">
                    {{ group.category }}
                </h3>

                <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    <div
                        v-for="(skill, i) in group.items"
                        :key="i"
                        class="flex flex-col items-center gap-2 p-4 rounded-xl border
                            border-neutral-200 dark:border-neutral-700
                            bg-neutral-50 dark:bg-neutral-800
                            hover:border-primary hover:shadow-md
                            cursor-default transition-colors relative"
                    >
                        <!-- Icon -->
                        <UIcon
                            :name="skill.icon"
                            :class="[
                                'size-10',
                                skill.invertDark ? 'dark:invert' : 'text-primary',
                            ]"
                        />

                        <!-- Label -->
                        <span class="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                            {{ skill.label }}
                        </span>

                        <!-- External doc link -->
                        <a
                            v-if="skill.doc"
                            :href="skill.doc"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="absolute top-2 right-2 text-neutral-400 hover:text-primary transition-colors"
                        >
                            <UIcon
                                name="i-heroicons-arrow-top-right-on-square"
                                class="size-4"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Extra Skills -->
        <div
            v-if="siteConfig.extraSkills.length"
            class="mt-10"
        >
            <!-- Title -->
            <h3 class="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                Other Skills
            </h3>

            <!-- Skills list -->
            <div class="flex flex-wrap gap-2">
                <ULink
                    v-for="(skill, i) in siteConfig.extraSkills"
                    :key="i"
                    :href="skill.url"
                    target="_blank"
                    class="px-3 py-1 rounded-full text-sm border border-neutral-300 dark:border-neutral-700
             text-neutral-700 dark:text-neutral-300
             hover:bg-primary hover:text-white dark:hover:text-white
             transition-colors"
                >
                    {{ skill.label }}
                </ULink>
            </div>
        </div>
    </section>
</template>
