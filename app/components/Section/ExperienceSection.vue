<script setup lang="ts">
import type { ExperienceItem } from '~/utils/config'

const experiences = siteConfig.experience as ExperienceItem[]
</script>

<template>
    <section
        id="experience"
        class="bg-white dark:bg-neutral-900 rounded-3xl shadow p-8 scroll-mt-20"
    >
        <h2 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-8">
            Experience
        </h2>

        <div class="relative">
            <div class="space-y-8">
                <div
                    v-for="(exp, index) in experiences"
                    :key="index"
                    class="relative pl-12 md:pl-14 group"
                >
                    <!-- Timeline line (behind dot) -->
                    <div
                        v-if="index < experiences.length - 1"
                        class="absolute left-[0.9375rem] md:left-[1.1875rem] top-10 bottom-[-2rem] w-px bg-neutral-200 dark:bg-neutral-700"
                    />

                    <!-- Timeline dot (above line via z-10) -->
                    <div
                        class="absolute left-0 top-0 z-10 flex items-center justify-center size-8 md:size-10 rounded-xl bg-white dark:bg-neutral-900 ring-1 ring-primary/30 group-hover:ring-primary/60 group-hover:bg-primary/10 transition-all duration-300"
                    >
                        <UIcon
                            :name="exp.icon"
                            class="text-primary size-4 md:size-5"
                        />
                    </div>

                    <!-- Content card -->
                    <div class="rounded-2xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-800/30 p-4 md:p-5 group-hover:border-primary/20 dark:group-hover:border-primary/20 group-hover:shadow-sm transition-all duration-300">
                        <!-- Header -->
                        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                            <h3 class="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                                {{ exp.title }}
                            </h3>

                            <span class="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 dark:bg-primary/15 px-2.5 py-1 rounded-full w-fit shrink-0">
                                <UIcon
                                    name="i-heroicons-calendar-days"
                                    class="size-3.5"
                                />
                                {{ exp.date }}
                            </span>
                        </div>

                        <!-- Description list -->
                        <ul class="space-y-2">
                            <li
                                v-for="(line, i) in exp.description"
                                :key="i"
                                class="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed"
                            >
                                <span class="shrink-0 mt-1.5 size-1.5 rounded-full bg-primary/50" />
                                <span>{{ line }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
