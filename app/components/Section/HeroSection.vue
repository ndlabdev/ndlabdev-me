<script setup lang="ts">
function scrollToSection(id: string) {
    const el = document.querySelector(id)
    if (el) {
        window.scrollTo({
            top: el.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
        })
    }
}
</script>

<template>
    <section
        id="hero"
        class="bg-white dark:bg-neutral-900 rounded-3xl shadow p-8 scroll-mt-32"
    >
        <div class="flex flex-col md:flex-row items-center md:items-start gap-6">
            <NuxtImg
                :src="siteConfig.avatar || siteConfig.placeholderAvatar"
                :alt="siteConfig.name"
                width="512"
                height="512"
                format="webp"
                quality="90"
                fit="cover"
                densities="1x 2x"
                class="size-32 rounded-full ring-4 ring-primary-100 shadow"
                provider="cloudinary"
            />

            <div>
                <h1 class="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                    Hi there <span class="inline-block origin-[70%_70%] animate-[wave_2s_infinite]">👋</span>,
                    I’m <span class="text-primary">Nguyen Long Dang</span>
                </h1>

                <TypingSubtitle />

                <p class="mt-2 text-neutral-700 dark:text-neutral-300">
                    Welcome to my personal website! I’m a Software Engineer who specializes in building
                    scalable backend systems and data-driven platforms. Here you’ll find my projects, skills,
                    and the journey I’m taking as I grow in the world of software engineering.
                </p>

                <blockquote class="border-s-4 border-accented ps-4 italic">
                    <p class="my-5 leading-7 text-pretty">
                        The best software isn’t the one with the most features, but the one with the fewest flaws and the clearest purpose.
                    </p>
                </blockquote>

                <div class="mt-6 flex flex-wrap gap-3">
                    <UButton
                        href="/NGUYEN_LONG_DANG.pdf"
                        target="_blank"
                        color="primary"
                        variant="solid"
                        icon="i-heroicons-arrow-down-tray"
                        class="px-6 py-2.5 font-medium rounded-xl"
                    >
                        Download CV
                    </UButton>

                    <UButton
                        color="info"
                        variant="outline"
                        to="#contact"
                        icon="i-heroicons-envelope"
                        class="px-6 py-2.5 font-medium rounded-xl"
                        @click.prevent="scrollToSection('#contact')"
                    >
                        Contact Me
                    </UButton>
                </div>
            </div>
        </div>
    </section>
</template>
