<script setup lang="ts">
const siteName = 'ndlab.dev'
const siteUrl = 'https://ndlab.dev'
const siteTitle = 'NDLab – Personal Profile & Portfolio'
const siteDescription = 'Personal website of Nguyen Long Dang – Developer, creator, and problem solver. Showcasing projects, skills, and career journey.'
const siteImage = `${siteUrl}/og-image.png`

useHead({
    title: siteTitle,
    meta: [
        { name: 'description', content: siteDescription },

        // Open Graph (Facebook, LinkedIn)
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: siteName },
        { property: 'og:title', content: siteTitle },
        { property: 'og:description', content: siteDescription },
        { property: 'og:url', content: siteUrl },
        { property: 'og:image', content: siteImage },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: siteTitle },
        { name: 'twitter:description', content: siteDescription },
        { name: 'twitter:image', content: siteImage }
    ],
    link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'canonical', href: siteUrl },
        { rel: 'preload', as: 'image', href: '/snow-bg.jpg' }
    ],
    script: [
        {
            key: 'ldjson-schema',
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Person',
                'name': 'Nguyen Long Dang',
                'url': siteUrl,
                'sameAs': [
                    'https://github.com/ndlabdev',
                    'https://linkedin.com/in/ndlabdev'
                ],
                'jobTitle': 'Software Developer',
                'description': siteDescription,
                'image': siteImage
            })
        }
    ],
    bodyAttrs: {
        class: 'bg-cover bg-center bg-fixed',
        style: 'background-image: url(\'/snow-bg.jpg\');'
    }
})
</script>

<template>
    <NuxtLoadingIndicator />
    <NuxtRouteAnnouncer />

    <UApp
        :toaster="{
            position: 'top-center',
            expand: false,
        }"
        :tooltip="{
            delayDuration: 0,
        }"
    >
        <NuxtLayout>
            <NuxtPage />
            <ClientOnly>
                <CanvasSnow />
            </ClientOnly>
        </NuxtLayout>
    </UApp>
</template>
