import { hero } from '~/data/hero'
import { about } from '~/data/about'
import { skills } from '~/data/skills'
import { projects } from '~/data/projects'
import { experience } from '~/data/experience'
import { contact } from '~/data/contact'

// Single composed config consumed across the app (auto-imported via utils/).
// Content lives in app/data/*; types in app/types/site.ts.
export const siteConfig = {
    ...hero,
    ...about,
    ...skills,
    ...projects,
    ...experience,
    ...contact
}

// Headline numbers shown in Hero + About. Companies = experience entries that aren't education.
const techTotal = skills.skills.reduce((n, g) => n + g.items.length, 0) + skills.extraSkills.length
export const siteStats = {
    years: 5,
    companies: experience.experience.filter(e => e.icon !== 'i-heroicons-academic-cap').length,
    technologies: Math.floor(techTotal / 10) * 10
}

export type { ExperienceDescription, ExperienceItem } from '~/types/site'
