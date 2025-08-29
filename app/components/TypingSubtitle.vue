<script setup lang="ts">

// Roles list
const roles = [
    'Full-Stack Web Developer',
    'Frontend Engineer',
    'Backend Engineer',
    'API Architect',
    'Problem Solver'
]

// Reactive text
const text = ref('')

// State
let roleIndex = 0
let charIndex = 0
let typing = true
let timer: number | null = null

// Config
const TYPE_SPEED = 100 // ms per char typing
const DELETE_SPEED = 60 // ms per char deleting
const PAUSE_BEFORE_DELETE = 1500 // ms
const PAUSE_BEFORE_NEXT = 400 // ms

function typewriter() {
    const current = roles[roleIndex]!

    if (typing) {
    // Forward typing
        text.value = current.slice(0, ++charIndex)
        if (charIndex === current.length) {
            typing = false
            timer = window.setTimeout(typewriter, PAUSE_BEFORE_DELETE)
            return
        }
        timer = window.setTimeout(typewriter, TYPE_SPEED)
    } else {
    // Backward deleting
        text.value = current.slice(0, --charIndex)
        if (charIndex === 0) {
            typing = true
            roleIndex = (roleIndex + 1) % roles.length
            timer = window.setTimeout(typewriter, PAUSE_BEFORE_NEXT)
            return
        }
        timer = window.setTimeout(typewriter, DELETE_SPEED)
    }
}

onMounted(() => {
    typewriter()
})

onBeforeUnmount(() => {
    if (timer) clearTimeout(timer)
})
</script>

<template>
    <h2 class="mt-2 text-gray-600">
        <span>{{ text }}</span>
        <span class="inline-block w-[1ch] animate-[blink_1s_steps(2,start)_infinite]">|</span>
    </h2>
</template>
