<template>
    <section
        id="projects"
        class="bg-white dark:bg-neutral-900 rounded-3xl shadow p-8 scroll-mt-20"
    >
        <!-- Title -->
        <h2 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
            Projects
        </h2>

        <!-- Grid Projects -->
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div
                v-for="(project, i) in siteConfig.projects"
                :key="i"
                class="rounded-xl border border-neutral-200 dark:border-neutral-700
               bg-neutral-50 dark:bg-neutral-800 overflow-hidden
               hover:border-primary hover:shadow-md transition-colors flex flex-col"
            >
                <!-- Thumbnail -->
                <NuxtImg
                    :src="project.image"
                    :alt="project.title"
                    format="webp"
                    class="w-full h-40 sm:h-48 object-cover"
                    sizes="sm:100vw md:50vw lg:33vw"
                />

                <!-- Content -->
                <div class="flex flex-col flex-1 p-4">
                    <h3 class="text-lg font-semibold">
                        <ULink
                            v-if="project.links.live || project.links.github"
                            :href="project.links.live || project.links.github"
                            target="_blank"
                            class="text-neutral-900 dark:text-neutral-100 hover:text-primary transition-colors"
                        >
                            {{ project.title }}
                        </ULink>

                        <span
                            v-else
                            class="text-neutral-900 dark:text-neutral-100"
                        >
                            {{ project.title }}
                        </span>
                    </h3>

                    <p class="text-sm text-neutral-600 dark:text-neutral-400 mt-1 flex-1">
                        {{ project.description }}
                    </p>

                    <!-- Tech stack -->
                    <div class="mt-3 flex flex-wrap gap-2">
                        <span
                            v-for="tech in project.tech"
                            :key="tech"
                            class="px-2 py-0.5 text-xs rounded-full
                     bg-neutral-200 dark:bg-neutral-700
                     text-neutral-700 dark:text-neutral-300"
                        >
                            {{ tech }}
                        </span>
                    </div>

                    <!-- Links -->
                    <div class="mt-4 flex gap-2">
                        <!-- Live button -->
                        <UButton
                            v-if="project.links.live"
                            :to="project.links.live"
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
                            v-if="project.links.github"
                            :to="project.links.github"
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
                </div>
            </div>
        </div>
    </section>
</template>
