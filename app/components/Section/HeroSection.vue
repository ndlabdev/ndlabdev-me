<script setup lang="ts">
const introParts = splitText(siteConfig.intro.text, siteConfig.intro.highlight)
const rolesJson = JSON.stringify(siteConfig.roles)
</script>

<template>
    <section
        id="hero"
        class="hero section min-h-svh flex items-center pt-[120px]"
    >
        <div class="wrap grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-[clamp(32px,5vw,72px)] items-center w-full">
            <div class="lg:order-1 order-2">
                <div class="inline-flex items-center gap-[9px] font-mono text-[12.5px] text-text-muted px-[14px] py-[7px] border border-border-soft rounded-full bg-[var(--surface-glass)] mb-[26px]">
                    <span class="size-2 rounded-full bg-[#34D399] shadow-[0_0_0_4px_rgba(52,211,153,0.18)] animate-[ndPulse_2.4s_infinite]" /> Available for select opportunities
                </div>

                <h1 class="text-[clamp(40px,6.6vw,84px)] leading-none tracking-[-0.035em] text-text-base">
                    <span class="line block overflow-hidden"><span class="word inline-block">Hi</span> <span class="word inline-block">there</span> <span class="word inline-block"><span class="inline-block origin-[70%_70%] animate-[wave_2.5s_ease-in-out_0.8s_infinite]">👋</span></span></span>
                    <span class="line block overflow-hidden"><span class="word inline-block">I'm</span> <span class="word inline-block grad-text">Nguyen</span></span>
                    <span class="line block overflow-hidden"><span class="word inline-block grad-text">Long</span> <span class="word inline-block grad-text">Dang</span></span>
                </h1>

                <div class="font-mono text-[clamp(15px,2vw,20px)] mt-[22px] text-text-muted flex items-center gap-[10px]">
                    <span class="text-accent-3">~/role&nbsp;$</span>
                    <span
                        id="roleRotate"
                        class="text-text-base font-medium"
                        :data-roles="rolesJson"
                    />
                    <span class="inline-block w-[9px] h-[1.1em] bg-accent translate-y-[2px] animate-[blink_1s_steps(1)_infinite]" />
                </div>

                <p class="text-text-muted text-[clamp(15px,1.6vw,17.5px)] max-w-[52ch] mt-[26px]">
                    <template
                        v-for="(part, j) in introParts"
                        :key="j"
                    >
                        <strong
                            v-if="siteConfig.intro.highlight.includes(part)"
                            class="text-text-base font-semibold"
                        >{{ part }}</strong><template v-else>
                            {{ part }}
                        </template>
                    </template>
                </p>

                <blockquote class="mt-[22px] pl-[18px] italic text-text-base text-[15px] max-w-[46ch] border-l-2 [border-image:var(--grad)_1]">
                    "Good architecture isn't the cleverest code — it's the system that keeps working at 3&nbsp;AM."
                </blockquote>

                <div class="flex gap-[14px] mt-[34px] flex-wrap">
                    <UButton
                        to="/NGUYEN_LONG_DANG.pdf"
                        target="_blank"
                        icon="i-heroicons-arrow-down-tray"
                        label="Download CV"
                        :ui="btnCtaUi"
                        data-magnetic
                    />
                    <UButton
                        icon="i-heroicons-envelope"
                        label="Contact Me"
                        color="neutral"
                        variant="ghost"
                        :ui="btnCtaGhostUi"
                        data-magnetic
                        @click="scrollToSection('contact')"
                    />
                </div>

                <div class="flex gap-[28px] mt-[40px] flex-wrap">
                    <div
                        v-for="m in [{ v: '5+', l: 'Years exp' }, { v: '3', l: 'Companies' }, { v: '10+', l: 'Technologies' }]"
                        :key="m.l"
                    >
                        <b class="grad-text font-display text-[26px] block">{{ m.v }}</b>
                        <span class="font-mono text-[11.5px] text-text-muted tracking-[0.08em] uppercase">{{ m.l }}</span>
                    </div>
                </div>
            </div>

            <div class="lg:order-2 order-1 relative grid place-items-center">
                <div class="relative w-[clamp(220px,26vw,320px)] aspect-square rounded-full p-[3px] [background:conic-gradient(from_0deg,var(--accent),var(--accent-3),var(--accent-2),var(--accent))] shadow-[0_0_70px_-10px_rgba(var(--accent-rgb),0.5)] animate-[ndFloat_6s_ease-in-out_infinite]">
                    <div class="absolute inset-[-3px] rounded-full [background:conic-gradient(from_0deg,transparent_0deg,rgba(var(--accent-rgb),0)_270deg,var(--accent-3)_360deg)] animate-[ndSpin_6s_linear_infinite]" />
                    <div class="relative z-[2] size-full rounded-full overflow-hidden bg-surface-2 grid place-items-center">
                        <NuxtImg
                            :src="siteConfig.avatar || siteConfig.placeholderAvatar"
                            :alt="siteConfig.name"
                            width="640"
                            height="640"
                            format="webp"
                            quality="90"
                            fit="cover"
                            densities="1x 2x"
                            sizes="220px md:320px"
                            preload
                            fetchpriority="high"
                            provider="cloudinary"
                            class="size-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>

        <div class="absolute bottom-[26px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-[10.5px] tracking-[0.2em] text-text-faint">
            <div class="w-[22px] h-[34px] border border-border-strong rounded-[12px] relative after:content-[''] after:absolute after:top-[6px] after:left-1/2 after:-translate-x-1/2 after:w-[3px] after:h-[6px] after:rounded-[2px] after:bg-accent after:animate-[scrolly_1.8s_var(--ease)_infinite]" />SCROLL
        </div>
    </section>
</template>
