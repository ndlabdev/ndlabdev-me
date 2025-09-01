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

export const siteConfig = {

    // Basic info
    name: 'Nguyen Long Dang',
    brand: 'ndlabdev',
    avatar: '',
    placeholderAvatar: 'https://placehold.co/200x200/png?text=ND',
    title: 'Full-Stack Web Developer',

    // Roles
    roles: [
        'Full-Stack Web Developer',
        'Frontend Developer',
        'Backend Developer',
        'API Architect',
        'Problem Solver'
    ],

    // Personal Info (for About Me)
    personalInfo: [
        { label: 'Name', value: 'Nguyen Long Dang', icon: 'i-heroicons-user' },
        { label: 'Email', value: 'longdang0412@gmail.com', icon: 'i-heroicons-envelope', link: 'mailto:longdang0412@gmail.com' },
        { label: 'Phone', value: '+84 389 747 179', icon: 'i-heroicons-phone', link: 'tel:+84389747179' },
        { label: 'Freelance', value: 'Available', icon: 'i-heroicons-briefcase' },
        { label: 'Job Title', value: 'Full-Stack Web Developer', icon: 'i-heroicons-code-bracket' },
        { label: 'Experience', value: '3+ Years', icon: 'i-heroicons-academic-cap' },
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
                { label: 'Nuxt 3', icon: 'i-logos-nuxt-icon', doc: 'https://nuxt.com/' },
                { label: 'Next.js', icon: 'i-logos-nextjs-icon', doc: 'https://nextjs.org/', invertDark: true },
                { label: 'TypeScript', icon: 'i-logos-typescript-icon', doc: 'https://www.typescriptlang.org/' },
                { label: 'Tailwind CSS', icon: 'i-logos-tailwindcss-icon', doc: 'https://tailwindcss.com/' }
            ]
        },
        {
            category: 'Backend',
            items: [
                { label: 'NestJS', icon: 'i-logos-nestjs', doc: 'https://nestjs.com/' },
                { label: 'Laravel', icon: 'i-logos-laravel', doc: 'https://laravel.com/' },
                { label: 'Prisma', icon: 'i-logos-prisma', doc: 'https://www.prisma.io/', invertDark: true },
                { label: 'PostgreSQL', icon: 'i-logos-postgresql', doc: 'https://www.postgresql.org/' },
                { label: 'Redis', icon: 'i-logos-redis', doc: 'https://redis.io/' },
                { label: 'RabbitMQ', icon: 'i-logos-rabbitmq-icon', doc: 'https://www.rabbitmq.com/' }
            ]
        },
        {
            category: 'Tools & DevOps',
            items: [
                { label: 'GitHub', icon: 'i-logos-github-icon', invertDark: true },
                { label: 'Docker', icon: 'i-logos-docker-icon' },
                { label: 'AWS', icon: 'i-logos-aws', invertDark: true },
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
            title: 'Millionaire Quiz',
            description: 'A “Who Wants to Be a Millionaire?”–style quiz game built with Nuxt 4, TypeScript, and TailwindCSS.',
            image: '/millionaire-quiz.png',
            tech: ['Nuxt 4', 'TypeScript', 'Tailwind CSS'],
            links: {
                github: 'https://github.com/ndlabdev/millionaire-quiz',
                live: 'https://millionaire-quiz-seven.vercel.app/'
            }
        },
        {
            title: 'Movie Discovery App',
            description: 'Movie discovery app using Next.js, TypeScript, TailwindCSS and TMDB API.',
            image: '/movie-discovery.png',
            tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'TMDB API'],
            links: {
                github: 'https://github.com/ndlabdev/nextjs-movie',
                live: 'https://nextjs-movie-woad.vercel.app/'
            }
        }
    ],

    // Experience
    experience: [
        {
            date: '2018 – 2021',
            title: 'Information Technology Student · Nha Trang University',
            description: 'Studied software development, databases, and computer science fundamentals in the College of Information Technology program.',
            icon: 'i-heroicons-academic-cap'
        },
        {
            date: '2021 – 2023',
            title: 'Full-Stack Developer · Widosoft',
            description: 'Worked on multiple web projects for Japanese clients, including an online English learning platform and entertainment-related applications such as a billiards management system.',
            icon: 'i-heroicons-code-bracket'
        },
        {
            date: '2023 – Present',
            title: 'Full-Stack Developer · Screen 1 Technologies',
            description: 'Developing data analytics solutions to help marketers capture, analyze, and optimize user behavior across websites, powering insights similar to ListenLayer’s tracking platform.',
            icon: 'i-heroicons-briefcase'
        }
    ],

    // Social Links
    socials: [
        { name: 'github', url: 'https://github.com/ndlabdev', icon: 'i-simple-icons-github', class: 'social-github' },
        { name: 'linkedin', url: 'https://www.linkedin.com/in/dang-nguyen-long/', icon: 'i-simple-icons-linkedin', class: 'social-linkedin' },
        { name: 'facebook', url: 'https://www.facebook.com/nguyen.long.ang.2024', icon: 'i-simple-icons-facebook', class: 'social-facebook' },
        { name: 'twitter', url: 'https://x.com/ngNguyen430794', icon: 'i-simple-icons-x', class: 'social-twitter' },
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
