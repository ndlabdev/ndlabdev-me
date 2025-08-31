<template>
    <section
        id="experience"
        class="bg-white dark:bg-neutral-900 rounded-3xl shadow p-8 scroll-mt-20"
    >
        <h2 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
            Experience
        </h2>

        <UTimeline
            :items="siteConfig.experience"
            class="w-full"
        />
    </section>
</template>
