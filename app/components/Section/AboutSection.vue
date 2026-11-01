<script setup lang="ts">
const { copy } = useCopy()

const summaryParts = splitText(siteConfig.summary.text, siteConfig.summary.highlight)

const stats = [
    { count: siteStats.years, suffix: '', label: 'Years experience' },
    { count: siteStats.companies, suffix: '', label: 'Companies' },
    { count: siteStats.technologies, suffix: '+', label: 'Technologies' },
    { count: siteConfig.projects.length, suffix: '', label: 'Shipped projects' }
]

const copyable = new Set(['Email', 'Phone'])
</script>

<template>
    <section
        id="about"
        class="section"
    >
        <div class="wrap">
            <div class="section-head reveal">
                <span class="eyebrow"><span class="idx">01</span><span class="bar" />About</span>
                <h2>Engineer at heart, <span class="grad-text">systems thinker</span> by trade.</h2>
                <p>I care about the unglamorous parts — throughput, idempotency, observability — that make products feel instant and never go down.</p>
                <span class="rule" />
            </div>

            <div
                class="grid grid-cols-1 min-[521px]:grid-cols-2 min-[1025px]:grid-cols-4 gap-[18px]"
                data-stagger
            >
                <div class="glass relative overflow-hidden p-[28px] flex flex-col col-span-1 min-[521px]:col-span-2 min-[1025px]:row-span-2">
                    <span class="pointer-events-none absolute -top-[40%] -right-[30%] size-[200px] rounded-full bg-[var(--aurora-1)] blur-[50px] opacity-60" />
                    <h3 class="text-[22px] mb-[14px] text-text-base">
                        Building things that scale quietly.
                    </h3>
                    <p class="text-text-muted text-[15px]">
                        <template
                            v-for="(part, j) in summaryParts"
                            :key="j"
                        >
                            <strong
                                v-if="siteConfig.summary.highlight.includes(part)"
                                class="text-text-base font-semibold"
                            >{{ part }}</strong><template v-else>
                                {{ part }}
                            </template>
                        </template>
                    </p>
                </div>

                <div
                    v-for="s in stats"
                    :key="s.label"
                    class="glass relative overflow-hidden p-[28px] col-span-1 flex flex-col justify-center gap-[4px]"
                >
                    <div class="font-display text-[clamp(34px,4vw,46px)] font-semibold leading-none">
                        <span
                            class="grad-text inline"
                            :data-count="s.count"
                            :data-suffix="s.suffix"
                        >0</span>
                    </div>
                    <div class="font-mono text-[11.5px] text-text-muted tracking-[0.06em] uppercase">
                        {{ s.label }}
                    </div>
                </div>

                <div class="glass relative overflow-hidden p-[28px] col-span-1 min-[521px]:col-span-2">
                    <h4 class="font-mono text-[11.5px] tracking-[0.12em] uppercase text-text-faint mb-[16px]">
                        // Profile
                    </h4>
                    <div
                        v-for="row in siteConfig.personalInfo"
                        :key="row.label"
                        class="flex items-center justify-between gap-4 py-[9px] border-b border-dashed border-border-soft last:border-b-0"
                    >
                        <span class="font-mono text-[12px] text-text-faint shrink-0">{{ row.label }}</span>
                        <span
                            class="group flex items-center gap-2 text-[13.5px] text-text-base text-right"
                            :class="copyable.has(row.label) ? 'cursor-pointer hover:text-accent-3' : ''"
                            @click="copyable.has(row.label) && copy(row.value, row.label.toLowerCase())"
                        >
                            {{ row.value }}
                            <UIcon
                                v-if="copyable.has(row.label)"
                                name="i-heroicons-clipboard-document"
                                class="size-[13px] shrink-0 opacity-40 group-hover:opacity-100"
                            />
                        </span>
                    </div>
                </div>

                <div class="glass relative overflow-hidden p-[28px] col-span-1 min-[521px]:col-span-2">
                    <h4 class="font-mono text-[11.5px] tracking-[0.12em] uppercase text-text-faint mb-[16px]">
                        // Professional highlights
                    </h4>
                    <ul
                        class="list-none flex flex-col gap-[12px]"
                        data-stagger
                    >
                        <li
                            v-for="(h, i) in siteConfig.highlights"
                            :key="i"
                            class="flex gap-[12px] text-[14px] text-text-muted"
                        >
                            <UIcon
                                name="i-heroicons-check"
                                class="size-4 text-accent-3 shrink-0 mt-[3px]"
                            />
                            <span>
                                <template
                                    v-for="(part, j) in splitText(h.text, h.highlight)"
                                    :key="j"
                                >
                                    <strong
                                        v-if="h.highlight?.includes(part)"
                                        class="text-text-base font-semibold"
                                    >{{ part }}</strong><template v-else>
                                        {{ part }}
                                    </template>
                                </template>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>
