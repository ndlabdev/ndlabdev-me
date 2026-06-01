<template>
    <div>
        <BackgroundFx />
        <CustomCursor />
        <AppPreloader />

        <AppNav />
        <!-- Rarely-opened chrome: defer hydration to browser idle to cut initial JS work -->
        <LazyMobileMenu hydrate-on-idle />

        <main>
            <slot />
        </main>

        <AppFooter />

        <LazyScrollToTop hydrate-on-idle />
        <LazyThemeCustomizer hydrate-on-idle />
    </div>
</template>
