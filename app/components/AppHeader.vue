<script setup lang="ts">

const navItems = [
    { label: 'Home', to: '#hero', icon: 'i-heroicons-home' },
    { label: 'About', to: '#about', icon: 'i-heroicons-user' },
    { label: 'Skills', to: '#skills', icon: 'i-heroicons-cpu-chip' },
    { label: 'Projects', to: '#projects', icon: 'i-heroicons-briefcase' },
    { label: 'Experience', to: '#experience', icon: 'i-heroicons-academic-cap' },
    { label: 'Contact', to: '#contact', icon: 'i-heroicons-envelope' }
]

const activeSection = ref('#hero')

function scrollToSection(id: string) {
    const el = document.querySelector(id)
    if (el) {
        window.scrollTo({
            top: el.getBoundingClientRect().top + window.scrollY - 80, // offset header
            behavior: 'smooth'
        })
    }
}

// Auto detect active section
onMounted(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    activeSection.value = `#${entry.target.id}`
                }
            })
        },
        {
            threshold: 0.6
        }
    )

    document.querySelectorAll<HTMLElement>('section[id]').forEach((el) => {
        observer.observe(el)
    })
})
</script>

<template>
    <header
        class="sticky top-0 z-50 border-b backdrop-blur
           bg-white border-neutral-200
           dark:bg-neutral-900/75 dark:border-neutral-700"
    >
        <div class="px-6 flex h-16 items-center justify-between">
            <!-- Logo -->
            <NuxtLink
                to="/"
                class="flex items-center gap-2 font-bold text-xl text-primary"
            >
                <span class="font-mono">ndlab.dev</span>
            </NuxtLink>

            <!-- Navigation -->
            <nav class="hidden md:flex gap-6 text-neutral-700 dark:text-neutral-300">
                <NuxtLink
                    v-for="item in navItems"
                    :key="item.label"
                    :href="item.to"
                    :class="activeSection === item.to ? 'text-primary' : 'hover:text-primary'"
                    class="hover:text-primary transition-colors font-medium"
                    @click="scrollToSection(item.to)"
                >
                    {{ item.label }}
                </NuxtLink>
            </nav>

            <!-- Actions -->
            <div class="flex items-center gap-3">
                <ColorModeButton />
                <MobileMenuButton
                    :nav-items="navItems"
                    :active-section="activeSection"
                    :scroll-to-section="scrollToSection"
                />
            </div>
        </div>
    </header>
</template>
