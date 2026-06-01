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

export type { ExperienceDescription, ExperienceItem } from '~/types/site'
