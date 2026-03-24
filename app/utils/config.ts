interface SkillItem {
    label: string
    icon: string
    doc?: string
    invertDark?: boolean
}

interface SkillGroup {
    category: string
    items: SkillItem[]
}

export interface ExperienceItem {
    date: string
    title: string
    description: string[]
    icon: string
}

export const siteConfig = {

    // Basic info
    name: 'Nguyen Long Dang',
    brand: 'ndlabdev',
    avatar: '/v1766394686/ndlab-dev/avatar_url.png',
    placeholderAvatar: 'https://placehold.co/200x200/png?text=ND',
    title: 'Software Engineer',
    siteName: 'NDLab',
    siteUrl: 'https://ndlab.dev',

    // Roles
    roles: [
        'Software Engineer',
        'Backend Engineer',
        'Data Pipeline Developer',
        'API Architect',
        'Problem Solver'
    ],

    // Personal Info (for About Me)
    personalInfo: [
        { label: 'Name', value: 'Nguyen Long Dang', icon: 'i-heroicons-user' },
        { label: 'Email', value: 'longdang0412@gmail.com', icon: 'i-heroicons-envelope', link: 'mailto:longdang0412@gmail.com' },
        { label: 'Phone', value: '+84 389 747 179', icon: 'i-heroicons-phone', link: 'tel:+84389747179' },
        { label: 'Job Title', value: 'Software Engineer', icon: 'i-heroicons-code-bracket' },
        { label: 'Experience', value: '4+ Years', icon: 'i-heroicons-academic-cap' },
        { label: 'Education', value: 'Nha Trang University', icon: 'i-heroicons-academic-cap' },
        { label: 'Nationality', value: 'Vietnamese', icon: 'i-heroicons-flag' },
        { label: 'Languages', value: 'Vietnamese, English', icon: 'i-heroicons-language' },
        { label: 'Location', value: 'Nha Trang City, Khanh Hoa Province, Vietnam', icon: 'i-heroicons-map-pin', link: 'https://maps.app.goo.gl/XCoMHu1gKKchK73T7' }
    ],

    // Highlights
    highlights: [
        {
            text: 'Focus on writing clean, maintainable, and scalable code for both frontend and backend applications.',
            highlight: ['clean, maintainable, and scalable code']
        },
        {
            text: 'Enjoy tackling complex problems and turning them into simple, user-friendly solutions.',
            highlight: ['complex problems']
        },
        {
            text: 'Experienced in team collaboration, contributing effectively to meet deadlines and deliver quality projects.',
            highlight: ['team collaboration']
        },
        {
            text: 'Keen on continuous learning and staying updated with new technologies in web development.',
            highlight: ['continuous learning']
        },
        {
            text: 'Pay attention to performance and user experience to ensure products run smoothly and are enjoyable to use.',
            highlight: ['performance and user experience']
        }
    ],

    // Skills
    skills: <SkillGroup[]> [
        {
            category: 'Frontend',
            items: [
                { label: 'Nuxt.js', icon: 'i-logos-nuxt-icon', doc: 'https://nuxt.com/' },
                { label: 'Next.js', icon: 'i-logos-nextjs-icon', doc: 'https://nextjs.org/', invertDark: true },
                { label: 'Svelte 5', icon: 'i-logos-svelte-icon', doc: 'https://svelte.dev/' },
                { label: 'TypeScript', icon: 'i-logos-typescript-icon', doc: 'https://www.typescriptlang.org/' },
                { label: 'Tailwind CSS', icon: 'i-logos-tailwindcss-icon', doc: 'https://tailwindcss.com/' }
            ]
        },
        {
            category: 'Backend',
            items: [
                { label: 'Node.js', icon: 'i-logos-nodejs-icon', doc: 'https://nodejs.org/' },
                { label: 'Express', icon: 'i-logos-express', doc: 'https://expressjs.com/', invertDark: true },
                { label: 'Laravel', icon: 'i-logos-laravel', doc: 'https://laravel.com/' },
                { label: 'NestJS', icon: 'i-logos-nestjs', doc: 'https://nestjs.com/' },
                { label: 'Prisma', icon: 'i-logos-prisma', doc: 'https://www.prisma.io/', invertDark: true },
                { label: 'PostgreSQL', icon: 'i-logos-postgresql', doc: 'https://www.postgresql.org/' },
                { label: 'MySQL', icon: 'i-logos-mysql-icon', doc: 'https://www.mysql.com/' },
                { label: 'Redis', icon: 'i-logos-redis', doc: 'https://redis.io/' },
                { label: 'RabbitMQ', icon: 'i-logos-rabbitmq-icon', doc: 'https://www.rabbitmq.com/' },
                { label: 'Google BigQuery', icon: 'i-logos-google-cloud', doc: 'https://cloud.google.com/bigquery' }
            ]
        },
        {
            category: 'Tools & DevOps',
            items: [
                { label: 'AWS', icon: 'i-logos-aws', invertDark: true },
                { label: 'Docker', icon: 'i-logos-docker-icon' },
                { label: 'GitHub Actions', icon: 'i-logos-github-actions', doc: 'https://github.com/features/actions' },
                { label: 'Vercel', icon: 'i-logos-vercel-icon', invertDark: true }
            ]
        }
    ],

    extraSkills: <{ label: string, url: string }[]>[
        { label: 'ElysiaJS', url: 'https://elysiajs.com/' },
        { label: 'CodeIgniter', url: 'https://codeigniter.com/' },
        { label: 'GraphQL', url: 'https://graphql.org/' },
        { label: 'ESLint', url: 'https://eslint.org/' }
    ],

    // Projects
    projects: [
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
        },
        {
            title: 'Millionaire Quiz',
            description: 'A “Who Wants to Be a Millionaire?”–style quiz game built with Nuxt 4, TypeScript, and Tailwind CSS. It features a progressive money ladder, lifelines, and a strongly typed game state that keeps the logic predictable and easy to extend.',
            image: '/v1766392565/ndlab-dev/millionaire-quiz.png',
            tech: ['Nuxt 4', 'TypeScript', 'Tailwind CSS'],
            links: {
                github: 'https://github.com/ndlabdev/millionaire-quiz',
                live: 'https://millionaire-quiz-seven.vercel.app/'
            },
            details: {
                role: 'Frontend engineer (Nuxt 4)',
                year: '2025',
                projectType: 'Personal project',
                duration: 'Side project (~2–3 weeks of focused work)',
                teamSize: 'Solo',
                responsibilities: [
                    'Designed the overall game flow, including question progression and money ladder logic.',
                    'Implemented a strongly typed game state in TypeScript to handle questions, answers, lifelines, and game results.',
                    'Built a responsive UI with Nuxt 4 and Tailwind CSS, including transitions between questions and result screens.',
                    'Added accessibility-friendly behaviors such as focus management and keyboard navigation for answering questions.',
                    'Structured the codebase into reusable composables so that the quiz engine can be reused for future games.'
                ],
                highlights: [
                    'Implements classic lifelines (e.g. 50/50) using pure functions and a predictable state transition system.',
                    'Uses Nuxt 4 and TypeScript together to enforce strict typing across components and game logic.',
                    'Responsive layout that works cleanly on desktop, tablet, and mobile without layout shifts.',
                    'Clear separation between game logic and UI presentation, making it easier to extend with new question sets or rules.',
                    'Animations and feedback states (correct, incorrect, final result) that give the app a polished, game-like feel.'
                ],
                challenges: [
                    'Balancing the complexity of game state transitions while keeping the codebase readable and maintainable.',
                    'Ensuring that the lifelines could be triggered in any valid state without breaking the progression.',
                    'Designing the question data model in a way that is easy to update and localize later.',
                    'Managing transitions and timers without causing race conditions or inconsistent UI states.'
                ],
                outcomes: [
                    'Deepened practical experience with Nuxt 4, composables, and TypeScript in a non-trivial stateful UI.',
                    'Created a reusable quiz/game engine that can be adapted to other types of quizzes in future projects.',
                    'Improved understanding of how to structure game logic separately from UI components for better testability.'
                ]
            }
        }
    ],

    // Experience
    experience: <ExperienceItem[]>[
        {
            date: '2018 – 2021',
            title: 'Information Technology Student · Nha Trang University',
            description: [
                'Completed coursework in software engineering, algorithms, data structures, database systems, and computer networking.',
                'Built multiple full-stack web projects as part of academic coursework and independent study.'
            ],
            icon: 'i-heroicons-academic-cap'
        },
        {
            date: 'May 2021 – Mar 2023',
            title: 'Full-Stack Developer · Widosoft',
            description: [
                'Developed the admin system for Honrada, an English learning platform for beginners through intermediate learners, including student, teacher, and admin management modules.',
                'Built the admin dashboard for a Billiards Club Management System with booking, player ranking, and multi-location management features.',
                'Delivered additional full-stack web projects for Japanese clients, handling frontend and backend development and performance optimization.'
            ],
            icon: 'i-heroicons-code-bracket'
        },
        {
            date: 'Apr 2023 – Feb 2026',
            title: 'Software Engineer · Screen1 Technologies',
            description: [
                'Built a real-time user behavior analytics platform similar to Google Analytics, enabling marketers to collect, process, and visualize user interaction data with customizable reports.',
                'Implemented scalable backend services using Node.js and AWS (Lambda, SQS, RDS, S3, ECS, CloudWatch), and built event pipelines with RabbitMQ, Redis, and Pusher for real-time dashboard updates.',
                'Integrated Google BigQuery for data warehousing and behavioral analytics, including automated Salesforce-to-BigQuery data pipelines for cross-platform reporting.',
                'Optimized large-scale query performance and ensured system reliability and cost efficiency across cloud infrastructure.'
            ],
            icon: 'i-heroicons-briefcase'
        }
    ],

    // Social Links
    socials: [
        { name: 'github', url: 'https://github.com/ndlabdev', icon: 'i-simple-icons-github', class: 'social-github' },
        { name: 'linkedin', url: 'https://www.linkedin.com/in/dang-nguyen-long/', icon: 'i-simple-icons-linkedin', class: 'social-linkedin' },
        { name: 'facebook', url: 'https://www.facebook.com/nguyen.long.ang.2024', icon: 'i-simple-icons-facebook', class: 'social-facebook' },
        { name: 'instagram', url: 'https://www.instagram.com/nguyenlongdang04121999/', icon: 'i-simple-icons-instagram', class: 'social-instagram' },
        { name: 'email', url: 'mailto:longdang0412@gmail.com', icon: 'i-heroicons-envelope', class: 'social-email' }
    ],

    // Contact info
    contactInfo: [
        {
            icon: 'i-heroicons-envelope',
            title: 'Email',
            description: 'Feel free to reach out via email',
            value: 'longdang0412@gmail.com',
            link: 'mailto:longdang0412@gmail.com'
        },
        {
            icon: 'i-heroicons-phone',
            title: 'Phone',
            description: 'Available for quick calls or messages',
            value: '+84 389 747 179',
            link: 'tel:+84389747179'
        },
        {
            icon: 'i-heroicons-map-pin',
            title: 'Location',
            description: 'Currently based in',
            value: 'Nha Trang City, Khanh Hoa Province, Vietnam',
            link: null
        }
    ]
}
