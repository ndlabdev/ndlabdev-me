<script setup lang="ts">

// Feature SV5UI: move it to the front so it renders as the full-width featured card.
const projects = [...siteConfig.projects].sort((a, b) =>
    Number(b.title.startsWith('SV5UI')) - Number(a.title.startsWith('SV5UI'))
)
</script>

<template>
    <section
        id="projects"
        class="section"
    >
        <div class="wrap">
            <div class="section-head reveal">
                <span class="eyebrow"><span class="idx">03</span><span class="bar" />Projects</span>
                <h2>Selected <span class="grad-text">work</span>.</h2>
                <p>A dashboard, a component library, and a tech blog — each shipped end to end.</p>
                <span class="rule" />
            </div>

            <div
                class="grid grid-cols-1 min-[769px]:grid-cols-2 gap-[22px]"
                data-stagger
            >
                <article
                    v-for="(p, i) in projects"
                    :key="p.title"
                    class="project group relative overflow-hidden rounded-[var(--r-lg)] [transform-style:preserve-3d] [will-change:transform] transition-shadow duration-[400ms] ease-[var(--ease)]"
                    :class="i === 0 ? 'min-[769px]:col-span-2' : ''"
                >
                    <div
                        class="border border-border-soft rounded-[var(--r-lg)] overflow-hidden bg-surface h-full flex flex-col transition-[border-color] duration-[400ms] group-hover:border-[rgba(var(--accent-rgb),0.4)]"
                        :class="i === 0 ? 'min-[769px]:flex-row' : ''"
                    >
                        <div
                            class="relative overflow-hidden aspect-video bg-surface-2"
                            :class="i === 0 ? 'min-[769px]:aspect-auto min-[769px]:w-[52%] min-[769px]:shrink-0' : ''"
                        >
                            <NuxtImg
                                :src="p.image"
                                :alt="p.title"
                                width="900"
                                height="560"
                                format="webp"
                                quality="80"
                                fit="cover"
                                loading="lazy"
                                provider="cloudinary"
                                class="absolute inset-0 size-full object-cover transition-transform duration-[600ms] ease-[var(--ease)] group-hover:scale-[1.06]"
                            />
                            <span class="absolute top-[14px] left-[14px] z-[2] font-mono text-[11px] text-text-base bg-[var(--surface-glass)] backdrop-blur-[8px] px-[10px] py-[5px] rounded-full border border-border-soft">{{ i === 0 ? 'featured / 01' : `project / 0${i + 1}` }}</span>
                        </div>
                        <div
                            class="p-[26px] flex flex-col flex-1"
                            :class="i === 0 ? 'min-[769px]:justify-center min-[769px]:p-[clamp(28px,4vw,48px)]' : ''"
                        >
                            <h3 class="text-[clamp(19px,2.4vw,26px)] mb-[10px] text-text-base [transform:translateZ(30px)]">
                                {{ p.title }}
                            </h3>
                            <p class="text-text-muted text-[14.5px] mb-[18px]">
                                {{ p.description }}
                            </p>
                            <div class="flex flex-wrap gap-[7px] mb-[22px]">
                                <UBadge
                                    v-for="t in p.tech"
                                    :key="t"
                                    :label="t"
                                    color="neutral"
                                    variant="subtle"
                                    size="sm"
                                    class="font-mono rounded-[6px]"
                                />
                            </div>
                            <div class="flex gap-2 mt-auto items-center flex-wrap">
                                <UButton
                                    v-if="p.links.live"
                                    :to="p.links.live"
                                    target="_blank"
                                    icon="i-heroicons-arrow-top-right-on-square"
                                    label="Live"
                                    :ui="btnProjectPrimaryUi"
                                />
                                <UButton
                                    v-if="p.links.github"
                                    :to="p.links.github"
                                    target="_blank"
                                    color="neutral"
                                    variant="ghost"
                                    icon="i-simple-icons-github"
                                    label="GitHub"
                                    :ui="btnProjectGhostUi"
                                />
                                <ProjectModal :selected-project="p" />
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>
