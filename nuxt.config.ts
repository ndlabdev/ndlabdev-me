// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/eslint',
        '@nuxt/image',
        '@nuxt/ui',
        '@nuxtjs/sitemap',
        'nuxt-vitalizer',
        ['nuxt-mail', {
            message: {
                to: process.env.SMTP_AUTH_USER
            },
            smtp: {
                host: process.env.SMTP_HOST,
                port: process.env.SMTP_PORT,
                auth: {
                    user: process.env.SMTP_AUTH_USER,
                    pass: process.env.SMTP_AUTH_PASS
                }
            }
        }]
    ],
    devtools: { enabled: true },
    css: ['@/assets/css/main.css'],
    router: {
        options: {
            scrollBehaviorType: 'smooth'
        }
    },
    site: {
        url: 'https://ndlab.dev',
        name: 'NDLab'
    },
    features: {
        inlineStyles: true
    },
    compatibilityDate: '2025-07-15',
    eslint: {
        config: {
            stylistic: true
        }
    },
    sitemap: {
        urls: [
            {
                loc: '/',
                changefreq: 'monthly',
                priority: 1,
                lastmod: new Date().toISOString()
            }
        ]
    },
    vitalizer: {
        disableStylesheets: 'entry',
        delayHydration: {
            hydrateOnEvents: ['mousemove', 'scroll', 'keydown', 'click', 'touchstart', 'wheel'],
            idleCallbackTimeout: 8000,
            postIdleTimeout: 4000
        }
    }
})
