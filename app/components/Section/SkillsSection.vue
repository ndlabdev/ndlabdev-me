<script setup lang="ts">

// Categories = grouped skills + an "Other Skills" card built from the extraSkills list.
const categories = [
    ...siteConfig.skills,
    {
        category: 'Other Skills',
        tint: '#2DD4BF',
        catIcon: 'i-heroicons-check-badge',
        items: siteConfig.extraSkills.map(s => ({ label: s.label, icon: s.icon, doc: s.url, tier: s.tier, role: s.role, invertDark: false }))
    }
]

const allSkills = categories.flatMap(c => c.items)
const techCount = allSkills.length
const marqueeItems = allSkills.filter(s => s.icon.startsWith('i-logos')).slice(0, 12)

const chipBase = 'chip2 inline-flex items-center gap-2 px-[13px] py-2 min-h-[36px] rounded-full font-mono text-[12.5px] cursor-default transition-[color,border-color,box-shadow,background] duration-[250ms] ease-[var(--ease)] hover:text-text-base hover:border-[color-mix(in_oklab,var(--tint)_55%,transparent)] hover:bg-[color-mix(in_oklab,var(--tint)_14%,var(--surface-2))] hover:shadow-[0_10px_22px_-10px_color-mix(in_oklab,var(--tint)_75%,transparent)] focus-visible:outline-2 focus-visible:outline-[var(--tint)] focus-visible:outline-offset-2'

function chipClass(tier?: string) {
    return tier === 'core'
        ? 'bg-[color-mix(in_oklab,var(--tint)_10%,var(--surface-2))] border border-[color-mix(in_oklab,var(--tint)_28%,var(--border))] text-text-base'
        : 'bg-surface-2 border border-border-soft text-text-muted'
}
</script>

<template>
    <section
        id="skills"
        class="section"
    >
        <div class="wrap">
            <div class="section-head reveal">
                <span class="eyebrow"><span class="idx">02</span><span class="bar" />Skills</span>
                <h2>A toolkit tuned for <span class="grad-text">scale &amp; reliability</span>.</h2>
                <p>Backend-leaning and full-stack capable — chosen for performance, observability, and developer velocity.</p>
                <span class="rule" />
            </div>

            <div class="reveal font-mono text-[clamp(13px,1.5vw,15px)] text-text-muted mb-[28px] tracking-[0.02em]">
                <span
                    class="grad-text font-display font-bold text-[1.25em]"
                    :data-count="techCount"
                    data-suffix="+"
                >0</span> technologies across <span class="grad-text font-display font-bold text-[1.25em]">{{ categories.length }}</span> domains
            </div>

            <div
                class="grid grid-cols-1 min-[769px]:grid-cols-2 min-[1025px]:grid-cols-3 gap-[18px]"
                data-stagger
            >
                <div
                    v-for="cat in categories"
                    :key="cat.category"
                    class="glass group relative overflow-hidden p-[26px] transition-[border-color,box-shadow] duration-[350ms] ease-[var(--ease)] hover:border-[color-mix(in_oklab,var(--tint)_35%,var(--border))] hover:shadow-[0_20px_44px_-28px_color-mix(in_oklab,var(--tint)_70%,transparent)] before:content-[''] before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:opacity-0 before:transition-opacity before:duration-[350ms] hover:before:opacity-100 before:[background:linear-gradient(90deg,transparent,color-mix(in_oklab,var(--tint)_80%,transparent),transparent)]"
                    :style="`--tint: ${cat.tint || 'var(--accent)'}`"
                >
                    <span class="pointer-events-none absolute -top-1/2 -right-1/4 size-[180px] rounded-full bg-[var(--tint)] blur-[60px] opacity-0 transition-opacity duration-[400ms] group-hover:opacity-[0.12]" />
                    <div class="flex items-center gap-3 mb-5 relative z-[1]">
                        <span class="size-[38px] rounded-[10px] grid place-items-center text-[var(--tint)] bg-[color-mix(in_oklab,var(--tint)_12%,var(--surface-2))] border border-[color-mix(in_oklab,var(--tint)_30%,var(--border))] transition-transform duration-[350ms] ease-[var(--ease)] group-hover:rotate-[-8deg] group-hover:scale-[1.06]"><UIcon
                            :name="cat.catIcon || 'i-heroicons-cube'"
                            class="size-[19px]"
                        /></span>
                        <h3 class="text-[16px] text-text-base">
                            {{ cat.category }}
                        </h3>
                        <span class="ml-auto font-mono text-[11px] text-text-faint">{{ String(cat.items.length).padStart(2, '0') }}</span>
                    </div>
                    <div class="flex flex-wrap gap-2 relative z-[1]">
                        <UTooltip
                            v-for="s in cat.items"
                            :key="s.label"
                            :text="s.role"
                        >
                            <component
                                :is="s.doc ? 'a' : 'span'"
                                :class="[chipBase, chipClass(s.tier)]"
                                :href="s.doc || undefined"
                                :target="s.doc ? '_blank' : undefined"
                                rel="noopener noreferrer"
                                :aria-label="`${s.label}${s.tier === 'core' ? ' — core skill' : ''}`"
                            >
                                <UIcon
                                    :name="s.icon"
                                    class="size-4 shrink-0"
                                    :class="s.invertDark ? 'dark:[filter:invert(1)_grayscale(1)_brightness(1.6)]' : ''"
                                />
                                <span class="whitespace-nowrap">{{ s.label }}</span>
                                <span
                                    v-if="s.tier === 'core'"
                                    class="size-[5px] rounded-full ml-[2px] bg-[var(--tint)] shadow-[0_0_0_3px_color-mix(in_oklab,var(--tint)_25%,transparent)]"
                                />
                            </component>
                        </UTooltip>
                    </div>
                </div>

                <div class="glass relative overflow-hidden p-[26px] flex flex-col justify-center bg-[color-mix(in_oklab,var(--accent)_6%,var(--surface-glass))]">
                    <div class="font-mono text-[12px] text-accent-3 mb-3">
                        /* philosophy */
                    </div>
                    <p class="text-[14.5px] text-text-muted leading-[1.65]">
                        Pick boring, proven tools. Measure before optimizing. Make failure observable, then make it rare.
                    </p>
                    <div class="font-mono text-[11px] text-text-faint mt-4">
                        — ndlab
                    </div>
                </div>
            </div>

            <UMarquee
                pause-on-hover
                :overlay="false"
                :repeat="3"
                aria-hidden="true"
                class="reveal mt-[40px]"
                :ui="{ root: '[--gap:44px] [--duration:38s] [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)] [-webkit-mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]' }"
            >
                <span
                    v-for="s in marqueeItems"
                    :key="s.label"
                    class="inline-flex items-center gap-[13px] font-display text-[clamp(18px,2.6vw,28px)] font-semibold text-text-faint whitespace-nowrap transition-colors duration-300 hover:text-text-base"
                >
                    <UIcon
                        :name="s.icon"
                        class="w-[1em] h-[1em]"
                        :class="s.invertDark ? 'dark:[filter:invert(1)_grayscale(1)_brightness(1.6)]' : ''"
                    />{{ s.label }}
                </span>
            </UMarquee>
        </div>
    </section>
</template>
