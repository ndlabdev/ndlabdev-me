<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt'

const siteTitle = `${siteConfig.name} — ${siteConfig.title}`
const siteDescription = 'Nguyen Long Dang — Full-Stack Developer with nearly 5 years building event-driven, data-intensive systems with Node.js, PostgreSQL, AWS, RabbitMQ, Redis, and BigQuery, plus LLM-powered features with RAG and LangChain. Explore projects, skills, and career journey.'
const siteImage = `${siteConfig.siteUrl}/og-image.png`

const sameAs = siteConfig.socials.filter(s => s.url.startsWith('http')).map(s => s.url)
const knowsAbout = [...siteConfig.skills.flatMap(g => g.items.map(i => i.label)), ...siteConfig.extraSkills.map(s => s.label)]
const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'WebSite',
            '@id': `${siteConfig.siteUrl}/#website`,
            'url': siteConfig.siteUrl,
            'name': siteConfig.siteName,
            'description': siteDescription,
            'inLanguage': 'en',
            'publisher': { '@id': `${siteConfig.siteUrl}/#person` }
        },
        {
            '@type': 'Person',
            '@id': `${siteConfig.siteUrl}/#person`,
            'name': siteConfig.name,
            'url': siteConfig.siteUrl,
            'jobTitle': siteConfig.title,
            'description': siteDescription,
            'image': siteImage,
            'email': siteConfig.personalInfo.find(p => p.label === 'Email')?.value,
            'sameAs': sameAs,
            'knowsAbout': knowsAbout,
            'address': { '@type': 'PostalAddress', 'addressLocality': 'Nha Trang', 'addressCountry': 'VN' },
            'alumniOf': { '@type': 'CollegeOrUniversity', 'name': 'Nha Trang University' }
        },
        {
            '@type': 'ItemList',
            '@id': `${siteConfig.siteUrl}/#projects`,
            'name': 'Selected work',
            'itemListElement': siteConfig.projects.map((p, i) => ({
                '@type': 'ListItem',
                'position': i + 1,
                'item': {
                    '@type': 'CreativeWork',
                    'name': p.title,
                    'description': p.description,
                    'url': p.links.live || p.links.github
                }
            }))
        }
    ]
}

// Standardized SEO — single source of truth for meta tags
useSeoMeta({
    title: siteTitle,
    description: siteDescription,
    author: siteConfig.name,
    applicationName: siteConfig.siteName,
    robots: 'index, follow, max-image-preview:large',

    // Open Graph
    ogType: 'website',
    ogSiteName: siteConfig.siteName,
    ogTitle: siteTitle,
    ogDescription: siteDescription,
    ogUrl: siteConfig.siteUrl,
    ogImage: siteImage,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: siteTitle,
    ogImageType: 'image/png',
    ogLocale: 'en_US',

    // Twitter
    twitterCard: 'summary_large_image',
    twitterTitle: siteTitle,
    twitterDescription: siteDescription,
    twitterImage: siteImage,
    twitterImageAlt: siteTitle
})

useHead({
    htmlAttrs: {
        lang: 'en',
        class: 'nuxt-ui-scrollbars scroll-smooth'
    },
    meta: [
        { name: 'theme-color', content: '#0A0B0F', media: '(prefers-color-scheme: dark)' },
        { name: 'theme-color', content: '#F4F5F7', media: '(prefers-color-scheme: light)' }
    ],
    link: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'canonical', href: siteConfig.siteUrl }
    ],
    script: [
        {
            key: 'ldjson-schema',
            type: 'application/ld+json',
            innerHTML: JSON.stringify(jsonLd)
        }
    ]
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
        </NuxtLayout>
    </UApp>

    <Analytics />
</template>
