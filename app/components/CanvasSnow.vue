<!-- components/CanvasSnow.vue -->
<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

type Props = {

    /** 0.5 ~ 2: relative density (1 = default) */
    density?: number

    /** 0.5 ~ 2: global falling speed multiplier */
    speed?: number

    /** snowflake radius range (px) */
    sizeMin?: number
    sizeMax?: number

    /** snow color (any CSS color) */
    color?: string
}
const props = withDefaults(defineProps<Props>(), {
    density: 1,
    speed: 1,
    sizeMin: 1,
    sizeMax: 3,
    color: '#fff'
})

const canvas = ref<HTMLCanvasElement | null>(null)
let ctx: CanvasRenderingContext2D | null = null

// Cached canvas metrics
let cssW = 0, cssH = 0, dpr = 1

// rAF id & visibility control
let raf = 0
let lastTs = 0
let reduceMotion = false

// Minimal flake structure kept in arrays/objects
type Flake = {
    x: number
    y: number
    r: number
    vy: number
    sway: number
    phase: number
    freq: number
    alpha: number
}
let flakes: Flake[] = []

/** Return a value in [min, max) */
function rand(min: number, max: number) {
    return min + Math.random() * (max - min)
}

/** Determine amount of flakes by viewport area (clamped) */
function calcCount(w: number, h: number) {
    // ~ 1 flake / 7000 px²; adjust via density; clamp for sanity
    const base = Math.round((w * h) / 7000)
    return Math.max(180, Math.min(850, Math.round(base * props.density)))
}

/** Initialize or reinitialize canvas and flake set */
function setupCanvas() {
    const c = canvas.value!
    dpr = Math.min(window.devicePixelRatio || 1, 2) // cap DPR for perf
    cssW = window.innerWidth
    cssH = window.innerHeight

    c.width = Math.floor(cssW * dpr)
    c.height = Math.floor(cssH * dpr)
    c.style.width = cssW + 'px'
    c.style.height = cssH + 'px'

    ctx = c.getContext('2d')
    if (!ctx) return

    // Map drawing units to CSS pixels
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    // (Re)create flakes
    const count = calcCount(cssW, cssH)
    flakes = Array.from({ length: count }, () => makeFlake(true))
}

/** Create a flake; if initial=true, spawn anywhere on screen, else spawn above top */
function makeFlake(initial = false): Flake {
    const r = rand(props.sizeMin, props.sizeMax)
    return {
        x: Math.random() * cssW,
        y: initial ? Math.random() * cssH : -10,
        r,
        vy: rand(30, 80) / 60 * props.speed, // ~px per frame at 60fps
        sway: rand(8, 28), // horizontal amplitude
        phase: Math.random() * Math.PI * 2, // initial phase
        freq: rand(0.6, 1.2), // sway frequency multiplier
        alpha: rand(0.5, 0.95)
    }
}

/** Debounced resize */
let resizeTimer: number | undefined
function onResize() {
    window.clearTimeout(resizeTimer)
    resizeTimer = window.setTimeout(() => {
        setupCanvas()
    }, 120)
}

/** Page visibility handling */
function onVisibility() {
    if (document.hidden) {
        cancelAnimationFrame(raf)
    } else {
        lastTs = performance.now()
        raf = requestAnimationFrame(tick)
    }
}

/** Reduce motion media query handling */
function handleRmq(e: MediaQueryListEvent | MediaQueryList) {
    reduceMotion = e.matches
    if (reduceMotion) {
        cancelAnimationFrame(raf)
    } else {
        lastTs = performance.now()
        raf = requestAnimationFrame(tick)
    }
}

/** Main animation loop (time-based) */
function tick(ts: number) {
    if (!ctx) return

    // delta time in seconds (clamped to avoid huge jumps)
    let dt = (ts - lastTs) / 1000
    lastTs = ts
    if (dt > 0.1) dt = 0.016 // cap to ~60fps step on tab return

    // Clear
    ctx.clearRect(0, 0, cssW, cssH)

    // Drawing
    for (const f of flakes) {
        const x = f.x + Math.sin(f.phase) * f.sway
        ctx.globalAlpha = f.alpha
        ctx.beginPath()
        ctx.arc(x, f.y, f.r, 0, Math.PI * 2)
        ctx.fillStyle = props.color
        ctx.fill()

        f.y += f.vy * (dt * 60)
        f.phase += (0.01 + f.vy * 0.002) * f.freq * (dt * 60)

        if (f.y - f.r > cssH) {
            // reset this flake's properties instead of reassigning array index
            Object.assign(f, makeFlake(false), { x: Math.random() * cssW })
        }
    }

    raf = requestAnimationFrame(tick)
}

onMounted(() => {
    // Honor reduced motion
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    handleRmq(mq)
    mq.addEventListener?.('change', handleRmq)

    setupCanvas()
    window.addEventListener('resize', onResize, { passive: true })
    document.addEventListener('visibilitychange', onVisibility)

    if (!reduceMotion) {
        lastTs = performance.now()
        raf = requestAnimationFrame(tick)
    }
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', onResize)
    document.removeEventListener('visibilitychange', onVisibility)
    try {
        const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
        mq.removeEventListener?.('change', handleRmq)
    } catch (error) {
        // Ignore if removeEventListener not supported
        console.log(error)
    }
    cancelAnimationFrame(raf)
})
</script>

<template>
    <canvas
        ref="canvas"
        class="pointer-events-none fixed inset-0 z-[9999] block"
        aria-hidden="true"
    />
</template>
