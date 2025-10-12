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
            <NuxtLink
                to="/"
                class="flex items-center gap-2 font-bold text-xl text-primary"
                @click="scrollToSection('#hero')"
            >
                <span class="inline-flex items-center gap-2 font-semibold select-none text-neutral-900 dark:text-white">
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 64 64"
                        role="img"
                        aria-label="NDLab logo"
                        class="rounded-xl"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <linearGradient
                                id="ndlabGrad"
                                x1="0"
                                y1="0"
                                x2="1"
                                y2="1"
                            >
                                <stop
                                    offset="0%"
                                    stop-color="#111827"
                                />
                                <stop
                                    offset="100%"
                                    stop-color="#3f3f46"
                                />
                            </linearGradient>
                        </defs>
                        <rect
                            x="0"
                            y="0"
                            width="64"
                            height="64"
                            rx="12"
                            fill="url(#ndlabGrad)"
                        />
                        <path
                            d="M18 46V18h6l16 20V18h6v28h-6L24 26v20h-6z"
                            fill="#fff"
                        />
                    </svg>

                    <span class="text-base">
                        NDLab
                    </span>
                </span>
            </NuxtLink>

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
