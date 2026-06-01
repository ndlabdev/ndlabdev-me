import type { Project } from '~/types/site'

export const projects = {
    projects: <Project[]>[
        {
            title: 'NDLab Admin Dashboard',
            description: 'A modern SaaS admin dashboard template designed to accelerate development of admin interfaces and internal tools. Built with Next.js 16, TypeScript, shadcn/ui, and Tailwind CSS v4, featuring pre-built dashboards, RBAC user management, and production-ready architecture.',
            image: '/v1769077679/ndlab-dev/ndlab-admin.webp',
            tech: ['Next.js 16', 'TypeScript', 'Tailwind CSS v4', 'shadcn/ui', 'TanStack Table'],
            links: {
                live: 'https://next-saas-admin.vercel.app/'
            },
            details: {
                role: 'Frontend Engineer (Next.js)',
                year: '2025',
                projectType: 'Personal project',
                duration: 'Side project (~4–6 weeks of focused development)',
                teamSize: 'Solo',
                responsibilities: [
                    'Architected the overall dashboard structure using Next.js 16 App Router and Server Components.',
                    'Built multiple dashboard variants including analytics, e-commerce, CRM, and kanban board views.',
                    'Implemented user role management with granular permissions and RBAC support.',
                    'Developed interactive data visualizations using Recharts for metrics and analytics.',
                    'Created reusable UI components with shadcn/ui built on Radix UI primitives.',
                    'Built advanced data tables with sorting, filtering, and pagination using TanStack Table.',
                    'Implemented form handling with React Hook Form and Zod validation for type-safe inputs.'
                ],
                highlights: [
                    'Uses Next.js 16 App Router with Server Components for optimal performance and SEO.',
                    'Comprehensive component library built on shadcn/ui with consistent design tokens.',
                    'Advanced data tables with TanStack Table supporting complex filtering and sorting operations.',
                    'Type-safe form handling with React Hook Form and Zod schema validation.',
                    'Responsive design optimized across desktop, tablet, and mobile breakpoints.',
                    'Production-ready folder structure with security-focused routing patterns.',
                    'Drag-and-drop calendar and real-time messaging UI components included.'
                ],
                challenges: [
                    'Designing a flexible component architecture that works across multiple dashboard use cases.',
                    'Implementing RBAC with granular permissions while keeping the codebase maintainable.',
                    'Balancing bundle size with feature richness when including multiple chart types and table variants.',
                    'Creating a consistent design system that scales across dozens of components and pages.'
                ],
                outcomes: [
                    'Created a production-ready admin template that significantly reduces boilerplate for new projects.',
                    'Deepened expertise in Next.js 16, shadcn/ui, and modern React patterns.',
                    'Built a scalable foundation suitable for SaaS products, internal tools, and client projects.',
                    'Developed reusable patterns for authentication, authorization, and dashboard layouts.'
                ]
            }
        },
        {
            title: 'SV5UI — Svelte 5 Component Library',
            description: 'A modern, fully-typed UI component library designed for Svelte 5. Built with Tailwind CSS 4, OKLCH color tokens, and accessible headless primitives from Bits UI and Vaul Svelte. Features 20+ components with full TypeScript support and extensive customization options.',
            image: '/v1774346963/ndlab-dev/sv5ui.png',
            tech: ['Svelte 5', 'SvelteKit', 'Tailwind CSS 4', 'TypeScript', 'Bits UI'],
            links: {
                github: 'https://github.com/ndlabdev/sv5ui',
                live: 'https://sv5ui.vercel.app/'
            },
            details: {
                role: 'Frontend Engineer (Svelte)',
                year: '2025',
                projectType: 'Personal project',
                duration: 'Side project (~3–4 weeks of focused development)',
                teamSize: 'Solo',
                responsibilities: [
                    'Architected the component library structure using Svelte 5 with SvelteKit for documentation site.',
                    'Built 20+ reusable components across categories: General, Layout, Data Display, Feedback, Navigation, and Overlay.',
                    'Implemented accessible components using Bits UI and Vaul Svelte headless primitives.',
                    'Designed a theming system using OKLCH color space with light and dark mode support.',
                    'Integrated Iconify for access to 200,000+ icons across the component library.',
                    'Created a global configuration system with per-instance overrides for maximum flexibility.',
                    'Wrote comprehensive TypeScript types with exported prop types for developer experience.'
                ],
                highlights: [
                    'Full TypeScript support with exported prop types for all components.',
                    'Accessibility-first approach built on headless primitives from Bits UI.',
                    'Modern theming system using OKLCH color space for perceptually uniform colors.',
                    'Tailwind Variants integration for consistent component styling patterns.',
                    'Extensive Iconify integration providing access to 200,000+ icons.',
                    'Global configuration system allowing library-wide defaults with per-instance overrides.',
                    'Light and dark mode support out of the box.'
                ],
                challenges: [
                    'Designing a flexible API that balances ease of use with customization options.',
                    'Ensuring accessibility compliance across all interactive components.',
                    'Building a theming system that works seamlessly with Tailwind CSS 4 and OKLCH colors.',
                    'Creating consistent component patterns while supporting Svelte 5 runes and new reactivity model.'
                ],
                outcomes: [
                    'Created a production-ready component library that accelerates Svelte 5 development.',
                    'Deepened expertise in Svelte 5 runes, Tailwind CSS 4, and accessible component design.',
                    'Built reusable patterns for headless UI primitives that can be extended for future components.',
                    'Published as an npm package for easy installation and community usage.'
                ]
            }
        },
        {
            title: 'NDLab — Tech Blog',
            description: 'A long-term personal technology blog platform focused on web engineering, backend architecture, and performance optimization. It is built with Laravel 12, Filament v4, and Tailwind CSS, with MySQL and Redis powering the data layer and caching strategy.',
            image: '/v1766392565/ndlab-dev/ndlab-blog.png',
            tech: ['Laravel 12', 'Filament v4', 'Tailwind CSS', 'MySQL', 'Redis'],
            links: {
                live: 'https://ndlab.blog/'
            },
            details: {
                role: 'Full-stack Engineer',
                year: '2025',
                projectType: 'Personal project',
                duration: '2025 — Ongoing',
                teamSize: 'Solo',
                responsibilities: [
                    'Designed MySQL schema for posts, categories, tags, series, comments, reactions, bookmarks, slug history, and analytics.',
                    'Developed backend logic including CRUD, SEO middleware, fulltext search, and view/referrer tracking.',
                    'Built Filament v4 admin panel with TipTap editor and SEO tools.',
                    'Developed frontend with Blade and TailwindCSS focused on readability and SEO.',
                    'Implemented Redis caching for performance improvements.',
                    'Used Laravel Sail for local development environment.',
                    'Deployed production infrastructure via Laravel Forge with queue workers and cron jobs.',
                    'Integrated Resend for authentication-related emails.'
                ],
                highlights: [
                    'Optimized performance via Redis caching.',
                    'Advanced SEO with slug history and structured metadata.',
                    'Clean and efficient admin panel via Filament v4.',
                    'Responsive UI optimized for long-form reading.',
                    'Stable deployment pipeline with Forge.'
                ],
                challenges: [
                    'Implementing slug history with redirect logic.',
                    'Optimizing MySQL fulltext search and analytics.',
                    'Customizing TipTap editor for code-heavy posts.',
                    'Maintaining consistent dev/prod environments via Sail & Forge.'
                ],
                outcomes: [
                    'Scalable long-term platform for technical content.',
                    'Fast response times and strong SEO performance.',
                    'Reliable content management experience.',
                    'Professional, maintainable deployment setup.'
                ]
            }
        }
    ]
}
