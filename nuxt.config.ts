// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/ui', '@nuxtjs/sitemap', 'nuxt-vitalizer', ['nuxt-mail', {
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
    }], 'nuxt-gtag'],
    devtools: { enabled: true },
    // Folder-based organization without path prefixes (LayoutAppNav → AppNav).
    components: [{ path: '~/components', pathPrefix: false }],
    app: {
        head: {
            link: [
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;450;500;600&family=JetBrains+Mono:wght@400;500;600;700&display=swap' }
            ],
            script: [
                {

                    // FOUC prevention for accent + reduce-motion (color-mode handles dark class)
                    key: 'ndlab-theme-init',
                    innerHTML: `(function(){try{var e=document.documentElement;e.setAttribute("data-accent",localStorage.getItem("ndlab-accent")||"indigo");if(localStorage.getItem("ndlab-reduce-motion")==="true")e.setAttribute("data-reduce-motion","true");}catch(_){}})();`,
                    tagPosition: 'head'
                }
            ]
        }
    },
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
    colorMode: {
        preference: 'dark',
        fallback: 'dark'
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
    gtag: {
        enabled: process.env.NODE_ENV === 'production',
        id: 'G-D33X1BSE9N'
    },
    image: {
        cloudinary: {
            baseURL: 'https://res.cloudinary.com/ndlab/image/upload'
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
