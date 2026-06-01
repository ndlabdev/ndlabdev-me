// Shared content types for the site config (split across app/data/*).

export interface SkillItem {
    label: string
    icon: string
    doc?: string
    invertDark?: boolean
    tier?: 'core' | 'familiar'
    role?: string
}

export interface SkillGroup {
    category: string
    tint?: string
    catIcon?: string
    items: SkillItem[]
}

export interface ExtraSkill {
    label: string
    url: string
    icon: string
    tier?: 'core' | 'familiar'
    role?: string
}

export interface PersonalInfo {
    label: string
    value: string
    icon: string
    link?: string
}

export interface Highlight {
    text: string
    highlight?: string[]
}

export interface ExperienceDescription {
    text: string
    highlight?: string[]
}

export interface ExperienceItem {
    date: string
    title: string
    description: Array<string | ExperienceDescription>
    icon: string
}

export interface ProjectDetails {
    role: string
    year: string
    projectType: string
    duration: string
    teamSize: string
    responsibilities: string[]
    highlights: string[]
    challenges: string[]
    outcomes: string[]
}

export interface Project {
    title: string
    description: string
    image: string
    tech: string[]
    links: { live?: string, github?: string }
    details: ProjectDetails
}

export interface SocialLink {
    name: string
    url: string
    icon: string
    class: string
}

export interface ContactInfo {
    icon: string
    title: string
    description: string
    value: string
    link: string | null
}

export interface Intro {
    text: string
    highlight: string[]
}
