<script setup lang="ts">

// ** VeeValidate Imports
import type { FormSubmitEvent } from '@nuxt/ui'
import { email, getDefaults, nonEmpty, object, optional, pipe, string, type InferOutput } from 'valibot'

// ** Label
const contactLabel = {
    name: 'Your Name',
    phone: 'Phone Number',
    email: 'Your Email',
    subject: 'Subject',
    message: 'Your Message'
}

// ** Schema
const schema = object({
    name: optional(pipe(
        string(`${contactLabel.name} cannot be empty.`),
        nonEmpty(`${contactLabel.name} cannot be empty.`)
    ), ''),
    email: optional(pipe(
        string(`${contactLabel.email} cannot be empty.`),
        email(`${contactLabel.email} is not a valid format.`),
        nonEmpty(`${contactLabel.email} cannot be empty.`)
    ), ''),
    subject: optional(pipe(
        string(`${contactLabel.subject} cannot be empty.`),
        nonEmpty(`${contactLabel.subject} cannot be empty.`)
    ), ''),
    message: optional(pipe(
        string(`${contactLabel.message} cannot be empty.`),
        nonEmpty(`${contactLabel.message} cannot be empty.`)
    ), '')

})

const defaultState = getDefaults(schema)

// ** Types
type IContactForm = InferOutput<typeof schema>

// ** Reactive
const state = reactive<Partial<IContactForm>>({ ...defaultState })

// ** useHooks
const mail = useMail()
const toast = useToast()

// ** Methods
async function onSubmit(event: FormSubmitEvent<IContactForm>) {
    try {
        await mail.send({
            from: event.data.email,
            subject: `New message from ${event.data.name} - ${event.data.subject}`,
            text: `
📩 New Contact Form Submission

Hello ${siteConfig.name},

You’ve received a new message via your portfolio website (${siteConfig.brand || 'Portfolio'}).

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

        Object.assign(state, defaultState)

        toast.add({
            title: 'Message Sent',
            description: 'Your message has been delivered. I’ll get back to you soon.',
            icon: 'i-lucide-check-circle-2'
        })
    } catch (error) {
        console.error(error)
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
        class="bg-white dark:bg-neutral-900 rounded-3xl shadow p-8 scroll-mt-20"
    >
        <!-- Title -->
        <h2 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
            Contact Me
        </h2>
        <p class="text-neutral-600 dark:text-neutral-400 mb-8">
            Have a project in mind, want to collaborate, or just say hi? Let’s connect.
        </p>

        <!-- Contact Info -->
        <div class="grid sm:grid-cols-3 gap-6 mb-8">
            <div
                v-for="(info, i) in siteConfig.contactInfo"
                :key="i"
                class="bg-neutral-50 dark:bg-neutral-800 rounded-2xl p-5 text-center shadow-sm"
            >
                <UIcon
                    :name="info.icon"
                    class="text-primary size-7 mx-auto mb-2"
                />

                <!-- Title -->
                <h3 class="font-semibold text-neutral-900 dark:text-neutral-100">
                    {{ info.title }}
                </h3>

                <!-- Description -->
                <p class="text-sm text-neutral-600 dark:text-neutral-400">
                    {{ info.description }}
                </p>

                <!-- Value -->
                <template v-if="info.link">
                    <a
                        :href="info.link"
                        class="block mt-2 text-sm text-neutral-700 dark:text-neutral-300 hover:text-primary transition-colors break-all"
                    >
                        {{ info.value }}
                    </a>
                </template>

                <template v-else>
                    <span
                        class="block mt-2 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed break-words"
                    >
                        {{ info.value }}
                    </span>
                </template>
            </div>
        </div>

        <!-- Map -->
        <div class="mb-8">
            <iframe
                class="w-full h-64 rounded-2xl shadow-sm"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62807.80470188593!2d109.1631875!3d12.2387911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3170674e8a0e24c5%3A0x19a2b4f81d3f63c!2zTmhhIFRyYW5nLCBLaGFuaCBIb2EsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1703340000000!5m2!1sen!2s"
                allowfullscreen
                loading="lazy"
                title="Google Map showing my office location"
                referrerpolicy="no-referrer-when-downgrade"
            />
        </div>

        <!-- Contact Form -->
        <UForm
            :state="state"
            :schema="schema"
            :validate-on="['change', 'input']"
            class="space-y-5"
            @submit="onSubmit"
        >
            <!-- Name + Email in one row -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <UFormField
                    name="name"
                    :label="contactLabel.name"
                >
                    <UInput
                        v-model="state.name"
                        placeholder="John Doe"
                        class="w-full"
                    />
                </UFormField>

                <UFormField
                    name="email"
                    :label="contactLabel.email"
                >
                    <UInput
                        v-model="state.email"
                        type="email"
                        placeholder="you@example.com"
                        class="w-full"
                    />
                </UFormField>
            </div>

            <!-- Subject -->
            <div>
                <UFormField
                    name="subject"
                    :label="contactLabel.subject"
                >
                    <UInput
                        v-model="state.subject"
                        placeholder="Subject of your message"
                        class="w-full"
                    />
                </UFormField>
            </div>

            <!-- Message -->
            <div>
                <UFormField
                    name="message"
                    :label="contactLabel.message"
                >
                    <UTextarea
                        v-model="state.message"
                        :rows="4"
                        placeholder="Write your message..."
                        class="w-full"
                    />
                </UFormField>
            </div>

            <!-- Submit -->
            <div>
                <UButton
                    type="submit"
                    loading-auto
                    icon="i-heroicons-paper-airplane"
                    class="w-full md:w-auto px-6 py-2.5 text-sm font-semibold rounded-xl"
                >
                    Send Message
                </UButton>
            </div>
        </UForm>
    </section>
</template>
