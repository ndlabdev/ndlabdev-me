<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'
import { email, type InferOutput, minLength, nonEmpty, object, pipe, string } from 'valibot'

const mail = useMail()
const toast = useToast()
const { copy } = useCopy()

const schema = object({
    name: pipe(string(), nonEmpty('Enter your name'), minLength(2, 'Enter your name')),
    email: pipe(string(), nonEmpty('Enter a valid email'), email('Enter a valid email')),
    subject: pipe(string(), nonEmpty('Add a subject'), minLength(2, 'Add a subject')),
    message: pipe(string(), nonEmpty('Write a message'), minLength(10, 'Min 10 characters'))
})
type Schema = InferOutput<typeof schema>

const state = reactive<Partial<Schema>>({ name: '', email: '', subject: '', message: '' })

async function onSubmit(event: FormSubmitEvent<Schema>) {
    try {
        await mail.send({
            from: event.data.email,
            subject: `New message from ${event.data.name} - ${event.data.subject}`,
            text: `
📩 New Contact Form Submission

Hello ${siteConfig.name},

You've received a new message via your portfolio website (${siteConfig.brand || 'Portfolio'}).

━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Name: ${event.data.name}
📧 Email: ${event.data.email}
📝 Subject: ${event.data.subject}

💬 Message:
${event.data.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━

Please reply to the sender at your earliest convenience.

Best regards,
${siteConfig.brand || 'Portfolio Website'} Contact Form
            `
        })

        Object.assign(state, { name: '', email: '', subject: '', message: '' })

        toast.add({
            title: 'Message Sent',
            description: 'Your message has been delivered. I\'ll get back to you soon.',
            icon: 'i-lucide-check-circle-2',
            color: 'success'
        })
    } catch (e) {
        console.error(e)
        toast.add({
            title: 'Error',
            description: 'Something went wrong. Please try again later.',
            icon: 'i-lucide-alert-triangle',
            color: 'error'
        })
    }
}
</script>

<template>
    <section
        id="contact"
        class="section"
    >
        <div class="wrap">
            <div class="section-head reveal">
                <span class="eyebrow"><span class="idx">05</span><span class="bar" />Contact</span>
                <h2>Let's build something <span class="grad-text">reliable</span>.</h2>
                <p>Open to full-stack, backend, data-pipeline, and AI/LLM roles — and interesting collaborations.</p>
                <span class="rule" />
            </div>

            <div class="grid grid-cols-1 min-[1025px]:grid-cols-[0.85fr_1.15fr] gap-[22px] items-start">
                <div
                    class="reveal flex flex-col gap-[14px]"
                    data-dir="left"
                >
                    <div
                        v-for="info in siteConfig.contactInfo"
                        :key="info.title"
                        class="glass group flex items-center gap-4 px-[22px] py-[20px] transition-[transform,border-color] duration-300 ease-[var(--ease)] hover:-translate-y-[3px] hover:border-[rgba(var(--accent-rgb),0.4)]"
                        :class="info.title !== 'Location' ? 'cursor-pointer' : ''"
                        @click="info.title !== 'Location' && copy(info.value, info.title.toLowerCase())"
                    >
                        <span class="size-[44px] rounded-[12px] grid place-items-center bg-surface-2 border border-border-soft text-accent-3 shrink-0"><UIcon
                            :name="info.icon"
                            class="size-5"
                        /></span>
                        <div class="min-w-0">
                            <div class="font-mono text-[11px] text-text-faint tracking-[0.08em] uppercase">
                                {{ info.title }}
                            </div>
                            <div class="text-[14.5px] text-text-base mt-[2px] break-words">
                                {{ info.value }}
                            </div>
                        </div>
                        <UIcon
                            v-if="info.title !== 'Location'"
                            name="i-heroicons-clipboard-document"
                            class="ml-auto size-4 shrink-0 opacity-40 group-hover:opacity-100"
                        />
                    </div>

                    <div class="glass relative overflow-hidden rounded-[var(--r-md)] border border-border-soft h-[150px] mt-[2px]">
                        <iframe
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps?q=Nha%20Trang%2C%20Vietnam&output=embed"
                            title="Map of Nha Trang, Vietnam"
                            class="w-full h-full border-0 dark:[filter:grayscale(1)_invert(0.92)_contrast(0.9)]"
                        />
                        <div class="absolute inset-0 pointer-events-none dark:[background:radial-gradient(ellipse_at_50%_50%,transparent_40%,rgba(10,11,15,0.35))]" />
                    </div>
                </div>

                <UForm
                    :schema="schema"
                    :state="state"
                    class="glass reveal p-[clamp(26px,3.5vw,40px)] grid grid-cols-1 sm:grid-cols-2 gap-[18px]"
                    data-dir="right"
                    @submit="onSubmit"
                >
                    <UFormField
                        name="name"
                        label="Name"
                        :ui="formFieldUi"
                    >
                        <UInput
                            v-model="state.name"
                            placeholder="Jane Doe"
                            class="w-full"
                            :ui="inputUi"
                        />
                    </UFormField>
                    <UFormField
                        name="email"
                        label="Email"
                        :ui="formFieldUi"
                    >
                        <UInput
                            v-model="state.email"
                            type="email"
                            placeholder="you@example.com"
                            class="w-full"
                            :ui="inputUi"
                        />
                    </UFormField>
                    <UFormField
                        name="subject"
                        label="Subject"
                        class="sm:col-span-2"
                        :ui="formFieldUi"
                    >
                        <UInput
                            v-model="state.subject"
                            placeholder="What's this about?"
                            class="w-full"
                            :ui="inputUi"
                        />
                    </UFormField>
                    <UFormField
                        name="message"
                        label="Message"
                        class="sm:col-span-2"
                        :ui="formFieldUi"
                    >
                        <UTextarea
                            v-model="state.message"
                            :rows="5"
                            placeholder="Tell me about your project or role…"
                            class="w-full"
                            :ui="inputUi"
                        />
                    </UFormField>
                    <div class="sm:col-span-2">
                        <UButton
                            type="submit"
                            block
                            loading-auto
                            trailing-icon="i-heroicons-arrow-right"
                            :ui="btnCtaUi"
                            data-magnetic
                        >
                            Send message
                        </UButton>
                    </div>
                </UForm>
            </div>
        </div>
    </section>
</template>
