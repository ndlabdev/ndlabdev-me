<template>
    <section
        id="about"
        class="bg-white dark:bg-neutral-900 rounded-3xl shadow p-8 scroll-mt-20"
    >
        <!-- Title -->
        <h2 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            About Me
        </h2>

        <!-- Description -->
        <p class="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
            <span class="font-semibold text-primary">Software Engineer</span> with over 4 years of experience building
            scalable web applications and data-driven platforms. Specialized in backend development with Node.js and AWS,
            with a strong focus on designing event-driven architectures using RabbitMQ, Redis, and BigQuery.
            Most recently built a real-time user behavior analytics platform that helps marketers capture, analyze,
            and optimize user engagement across websites.
        </p>

        <!-- Personal Info -->
        <div class="grid md:grid-cols-2 gap-x-8 gap-y-3 text-neutral-700 dark:text-neutral-300">
            <div
                v-for="(info, index) in siteConfig.personalInfo"
                :key="index"
                class="flex items-start gap-2"
            >
                <UIcon
                    :name="info.icon"
                    class="text-primary size-5 shrink-0"
                />

                <span>
                    <span class="font-semibold">{{ info.label }}:</span>&nbsp;
                    <template v-if="info.link">
                        <a
                            :href="info.link"
                            target="_blank"
                            class="hover:text-primary transition-colors"
                        >
                            {{ info.value }}
                        </a>
                    </template>

                    <template v-else>
                        {{ info.value }}
                    </template>
                </span>
            </div>
        </div>

        <!-- Highlights -->
        <div class="mt-8">
            <h3 class="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-3">
                Professional Highlights
            </h3>

            <ul class="space-y-3 text-neutral-700 dark:text-neutral-300">
                <li
                    v-for="(item, i) in siteConfig.highlights"
                    :key="i"
                    class="flex items-start gap-3"
                >
                    <UIcon
                        name="i-heroicons-star"
                        class="text-primary size-5 flex-none shrink-0 mt-0.5"
                    />

                    <!-- Render text with highlights -->
                    <span>
                        <template
                            v-for="(part, j) in splitText(item.text, item.highlight)"
                            :key="j"
                        >
                            <span
                                v-if="item.highlight?.includes(part)"
                                class="font-medium"
                            >
                                {{ part }}
                            </span>
                            <span v-else>{{ part }}</span>
                        </template>
                    </span>
                </li>
            </ul>
        </div>
    </section>
</template>
