<template>
    <!-- Hero section -->
    <section
        id="hero"
        class="bg-white dark:bg-neutral-900 rounded-3xl shadow p-8 scroll-mt-32"
    >
        <div class="flex flex-col md:flex-row items-center md:items-start gap-6">
            <!-- Avatar -->
            <NuxtImg
                :src="siteConfig.avatar"
                :alt="siteConfig.name"
                width="128"
                height="128"
                format="webp"
                quality="80"
                sizes="128px sm:160px lg:192px"
                class="rounded-full ring-4 ring-primary-100 shadow"
            />

            <!-- Text -->
            <div>
                <h1 class="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                    Hi there <span class="inline-block origin-[70%_70%] animate-[wave_2s_infinite]">👋</span>,
                    I’m <span class="text-primary">Nguyen Long Dang</span>
                </h1>

                <TypingSubtitle />

                <p class="mt-2 text-neutral-700 dark:text-neutral-300">
                    Welcome to my personal website! I’m a developer who loves creating digital experiences
                    that are not only functional but also intuitive and enjoyable to use. Here you’ll find
                    my projects, ideas, and the journey I’m taking as I grow in the world of software
                    development.
                </p>

                <!-- Call-to-action -->
                <div class="mt-6 flex gap-3">
                    <UButton
                        to="/projects"
                        variant="solid"
                    >
                        View Projects
                    </UButton>

                    <UButton
                        to="/contact"
                        color="info"
                        variant="outline"
                    >
                        Contact Me
                    </UButton>
                </div>
            </div>
        </div>
    </section>
</template>
