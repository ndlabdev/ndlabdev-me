<script setup lang="ts">
const year = new Date().getFullYear()
const location = siteConfig.personalInfo.find(p => p.label === 'Location')?.value?.split(',')[0] || 'Nha Trang'
</script>

<template>
    <footer class="reveal relative mt-[var(--section-pad)] pt-[clamp(48px,6vw,80px)] border-t border-border-soft before:content-[''] before:absolute before:-top-px before:inset-x-0 before:h-px before:[background:linear-gradient(90deg,transparent,rgba(var(--accent-rgb),0.45),transparent)]">
        <div class="wrap flex flex-col">
            <div class="flex items-center justify-between gap-[28px] flex-wrap pb-[clamp(32px,5vw,48px)] max-[560px]:flex-col max-[560px]:items-center max-[560px]:text-center max-[560px]:gap-[26px]">
                <div>
                    <a
                        href="#hero"
                        class="flex items-center gap-[11px] font-display font-bold text-[18px] text-text-base mb-3 max-[560px]:justify-center"
                        aria-label="NDLab — home"
                        @click.prevent="scrollToTop"
                    >
                        <span class="size-[30px] rounded-[9px] grid place-items-center [background:var(--grad)] text-white font-mono text-[13px] font-bold shadow-[0_6px_18px_-6px_rgba(var(--accent-rgb),0.7)]"><span class="inline-block -translate-y-[0.5px]">&lt;/&gt;</span></span>NDLab
                    </a>
                    <p class="text-text-muted text-[14px]">
                        Software Engineer · Backend &amp; Distributed Systems
                    </p>
                    <span class="inline-flex items-center gap-2 mt-[14px] font-mono text-[11.5px] text-text-faint max-[560px]:justify-center"><span class="size-[7px] rounded-full bg-[#34D399] shadow-[0_0_0_3px_rgba(52,211,153,0.18)] animate-[ndPulse_2.4s_infinite]" /> Available for work · {{ location }}</span>
                </div>

                <div class="flex gap-[10px]">
                    <a
                        v-for="s in siteConfig.socials"
                        :key="s.name"
                        :href="s.url"
                        :target="s.url.startsWith('http') ? '_blank' : undefined"
                        rel="noopener noreferrer"
                        :aria-label="`${s.name} link`"
                        class="size-[46px] rounded-[12px] grid place-items-center border border-border-soft bg-transparent text-text-muted transition-[color,border-color,transform] duration-[250ms] ease-[var(--ease)] hover:text-accent-3 hover:border-[rgba(var(--accent-rgb),0.45)] hover:-translate-y-[3px] focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                    >
                        <UIcon
                            :name="s.icon"
                            class="size-[18px]"
                        />
                    </a>
                </div>
            </div>

            <USeparator :ui="{ border: 'border-border-soft' }" />
            <div class="flex items-center justify-center gap-[18px] pt-[22px] pb-[34px] text-center">
                <div class="font-mono text-[12px] text-text-faint">
                    &copy; {{ year }} Nguyen Long Dang
                </div>
            </div>
        </div>
    </footer>
</template>
