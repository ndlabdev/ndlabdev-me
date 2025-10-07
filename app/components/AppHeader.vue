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
    const el = document.querySelector(id) as HTMLElement | null
    if (el) {
        window.scrollTo({
            top: el.offsetTop - 80,
            behavior: 'smooth'
        })
    }
}

function detectActiveSection() {
    const sections = Array.from(document.querySelectorAll('section[id]')) as HTMLElement[]
    const scrollPos = window.scrollY + 100

    let currentSection = '#hero'

    for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (!section) continue

        if (scrollPos >= section.offsetTop) {
            currentSection = `#${section.id}`
            break
        }
    }

    activeSection.value = currentSection
}

onMounted(() => {
    detectActiveSection()
    window.addEventListener('scroll', detectActiveSection, { passive: true })
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', detectActiveSection)
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
                    :class="activeSection === item.to ? 'text-primary' : 'hover:text-primary'"
                    class="hover:text-primary transition-colors font-medium  cursor-pointer"
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
