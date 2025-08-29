// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/ui'],
    devtools: { enabled: true },

    css: ['@/assets/css/main.css'],
    compatibilityDate: '2025-07-15',
    eslint: {
        config: {
            stylistic: true
        }
    }
})
