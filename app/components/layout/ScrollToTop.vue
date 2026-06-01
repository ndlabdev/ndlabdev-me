<script setup lang="ts">
const R = 24
const CIRCUMFERENCE = 2 * Math.PI * R

const visible = ref(false)
const progress = ref(0)

// Cache layout metrics; re-measure on resize instead of reading scrollHeight every scroll frame.
let max = 0
let threshold = 600
function measure() {
    max = document.documentElement.scrollHeight - window.innerHeight
    threshold = Math.max(600, window.innerHeight * 0.6)
}

function update() {
    const y = window.scrollY
    progress.value = max > 0 ? Math.min(y / max, 1) : 0
    visible.value = y > threshold
}

let ticking = false
function onScroll() {
    if (ticking) return
    ticking = true
    requestAnimationFrame(() => {
        update()
        ticking = false
    })
}

function toTop(e: MouseEvent) {
    scrollToTop()
    ;(e.currentTarget as HTMLElement | null)?.blur()
}

const dashoffset = computed(() => CIRCUMFERENCE * (1 - progress.value))

onMounted(() => {
    measure()
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', measure, { passive: true })
})
onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', measure)
})
</script>

<template>
    <ClientOnly>
        <button
            v-show="visible"
            class="fixed right-[max(24px,env(safe-area-inset-right))] bottom-[max(24px,env(safe-area-inset-bottom))] size-[52px] z-[880] grid place-items-center rounded-full border border-border-soft bg-surface text-text-base shadow-[var(--shadow)] outline-none cursor-pointer [-webkit-tap-highlight-color:transparent] transition-[transform,box-shadow,border-color] duration-300 ease-[var(--ease)] hover:-translate-y-[3px] hover:scale-105 hover:border-[rgba(var(--accent-rgb),0.55)] hover:shadow-[var(--glow)] active:scale-[0.94] focus-visible:border-[rgba(var(--accent-rgb),0.7)] focus-visible:shadow-[var(--glow),0_0_0_3px_rgba(var(--accent-rgb),0.45)]"
            aria-label="Scroll to top"
            @mousedown.prevent
            @click="toTop"
        >
            <svg
                class="absolute inset-0 size-[52px] -rotate-90 pointer-events-none"
                viewBox="0 0 52 52"
                aria-hidden="true"
            >
                <circle
                    class="fill-none [stroke-width:2.5] [stroke:var(--border)]"
                    cx="26"
                    cy="26"
                    :r="R"
                />
                <circle
                    class="fill-none [stroke-width:2.5] [stroke:var(--accent)] [stroke-linecap:round] transition-[stroke-dashoffset] duration-100 ease-linear"
                    cx="26"
                    cy="26"
                    :r="R"
                    :stroke-dasharray="CIRCUMFERENCE"
                    :stroke-dashoffset="dashoffset"
                />
            </svg>
            <UIcon
                name="i-heroicons-arrow-up"
                class="relative z-[1] size-[19px]"
            />
        </button>
    </ClientOnly>
</template>
