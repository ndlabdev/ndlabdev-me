<script setup lang="ts">
const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Projects', to: '/projects' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' }
]
</script>

<template>
    <header
        class="sticky top-0 z-50 border-b backdrop-blur
           bg-white border-neutral-200
           dark:bg-neutral-900/75 dark:border-neutral-700"
    >
        <div class="container mx-auto px-4 flex h-16 items-center justify-between">
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
                    :to="item.to"
                    class="hover:text-primary transition-colors font-medium"
                    active-class="text-primary"
                >
                    {{ item.label }}
                </NuxtLink>
            </nav>

            <!-- Actions -->
            <div class="flex items-center gap-3">
                <ColorModeButton />
            </div>
        </div>
    </header>
</template>
