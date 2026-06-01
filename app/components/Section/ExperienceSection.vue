<script setup lang="ts">
import type { ExperienceDescription } from '~/utils/config'

// Newest first for the timeline.
const timeline = [...siteConfig.experience].reverse()

function splitTitle(title: string) {
    const [role, ...rest] = title.split('·')
    return { role: role?.trim() || title, co: rest.join('·').trim() }
}

function asDesc(d: string | ExperienceDescription): ExperienceDescription {
    return typeof d === 'string' ? { text: d } : d
}
</script>

<template>
    <section
        id="experience"
        class="section"
    >
        <div class="wrap">
            <div class="section-head reveal">
                <span class="eyebrow"><span class="idx">04</span><span class="bar" />Experience</span>
                <h2>The <span class="grad-text">journey</span> so far.</h2>
                <p>From a curious student to shipping production distributed systems.</p>
                <span class="rule" />
            </div>

            <div class="relative">
                <div
                    id="tlSpine"
                    class="absolute left-[19px] top-[8px] bottom-[8px] w-[2px] rounded-[2px] overflow-hidden bg-border-soft"
                >
                    <div
                        id="tlFill"
                        class="absolute top-0 left-0 w-full h-0 [background:var(--grad)] shadow-[0_0_12px_rgba(var(--accent-rgb),0.6)]"
                    />
                </div>

                <div
                    v-for="(item, i) in timeline"
                    :key="i"
                    class="tl-item group reveal relative pl-[64px] pb-[36px] last:pb-0"
                >
                    <div class="absolute left-[8px] top-[4px] size-[24px] rounded-full bg-surface border border-border-strong grid place-items-center z-[2] transition-[border-color,box-shadow] duration-[400ms] group-[.lit]:border-[rgba(var(--accent-rgb),0.6)] group-[.lit]:shadow-[0_0_0_4px_rgba(var(--accent-rgb),0.12)]">
                        <i class="size-2 rounded-full bg-text-faint transition-[background] duration-[400ms] group-[.lit]:[background:var(--grad)]" />
                    </div>
                    <div class="glass px-[26px] py-[24px]">
                        <div class="flex items-start justify-between gap-4 flex-wrap">
                            <div>
                                <div class="text-[18px] font-display font-semibold text-text-base">
                                    {{ splitTitle(item.title).role }}
                                </div>
                                <div class="text-accent-3 text-[14px] mt-[3px]">
                                    {{ splitTitle(item.title).co }}
                                </div>
                            </div>
                            <div class="font-mono text-[11.5px] text-text-muted px-[11px] py-[5px] border border-border-soft rounded-full whitespace-nowrap">
                                {{ item.date }}
                            </div>
                        </div>
                        <ul class="list-none mt-4 flex flex-col gap-[9px]">
                            <li
                                v-for="(d, j) in item.description"
                                :key="j"
                                class="flex gap-[11px] text-[14px] text-text-muted leading-[1.65] before:content-['▹'] before:text-accent before:shrink-0"
                            >
                                <span class="flex-1 min-w-0"><template
                                    v-for="(part, k) in splitText(asDesc(d).text, asDesc(d).highlight)"
                                    :key="k"
                                ><strong
                                    v-if="asDesc(d).highlight?.includes(part)"
                                    class="text-text-base font-semibold"
                                >{{ part }}</strong><template v-else>{{ part }}</template></template></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
