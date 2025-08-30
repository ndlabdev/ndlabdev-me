<template>
    <section class="bg-white dark:bg-neutral-900 rounded-3xl shadow p-8">
        <!-- Title -->
        <h2 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            About Me
        </h2>

        <!-- Description -->
        <p class="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            I am a passionate <span class="font-semibold text-primary">Full-Stack Web Developer</span> with a strong
            focus on building modern, scalable, and user-friendly applications. With experience across both
            frontend and backend, I enjoy turning ideas into reality, writing clean code, and solving
            challenging problems that make an impact.
        </p>

        <!-- Highlights -->
        <ul class="mt-6 space-y-3 text-neutral-700 dark:text-neutral-300">
            <li class="flex items-start gap-3">
                <UIcon
                    name="i-heroicons-check-circle"
                    class="text-primary size-5 shrink-0 mt-0.5"
                />
                <span>Proficient in <span class="font-medium">Nuxt 3, Vue, TypeScript, and Tailwind CSS</span></span>
            </li>
            <li class="flex items-start gap-3">
                <UIcon
                    name="i-heroicons-check-circle"
                    class="text-primary size-5 shrink-0 mt-0.5"
                />
                <span>Strong understanding of <span class="font-medium">REST APIs, backend development, and databases</span></span>
            </li>
            <li class="flex items-start gap-3">
                <UIcon
                    name="i-heroicons-check-circle"
                    class="text-primary size-5 shrink-0 mt-0.5"
                />
                <span>Hands-on experience with <span class="font-medium">cloud platforms & DevOps tools</span></span>
            </li>
            <li class="flex items-start gap-3">
                <UIcon
                    name="i-heroicons-check-circle"
                    class="text-primary size-5 shrink-0 mt-0.5"
                />
                <span>Passionate about <span class="font-medium">UI/UX design and performance optimization</span></span>
            </li>
            <li class="flex items-start gap-3">
                <UIcon
                    name="i-heroicons-check-circle"
                    class="text-primary size-5 shrink-0 mt-0.5"
                />
                <span>A continuous learner who loves exploring <span class="font-medium">new technologies</span></span>
            </li>
        </ul>
    </section>
</template>
