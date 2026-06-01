<script setup lang="ts">
const done = ref(false)
const width = ref(0)
let timer: ReturnType<typeof setInterval> | null = null

onMounted(() => {
    if (prefersReducedMotion()) {
        width.value = 100
        finish(180)
        return
    }

    timer = setInterval(() => {
        width.value = Math.min(width.value + Math.random() * 26, 100)
        if (width.value >= 100 && timer) {
            clearInterval(timer)
            timer = null
        }
    }, 90)

    // settle shortly after first paint
    setTimeout(() => {
        width.value = 100
        finish(420)
    }, 600)
})

function finish(delay: number) {
    setTimeout(() => {
        done.value = true
    }, delay)
}

onBeforeUnmount(() => {
    if (timer) clearInterval(timer)
})
</script>

<template>
    <!-- SSR-rendered so it covers content from the first paint, then fades on mount -->
    <div
        class="preloader"
        :class="{ done }"
    >
        <div class="text-center">
            <div class="pl-logo">
                NDLAB.DEV
            </div>
            <div class="pl-bar">
                <i :style="`width: ${width}%`" />
            </div>
        </div>
    </div>
</template>
