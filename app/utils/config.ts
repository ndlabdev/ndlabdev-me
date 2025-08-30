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
    avatar: 'https://up2client.com/envato/arya-stark/html/main-file/light-mode/layout_two/background-snow-img/assets/images/home-images/portfolio-girl.jpg',
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
        { label: 'Location', value: 'Nha Trang City, Khanh Hoa Province, Vietnam', icon: 'i-heroicons-map-pin', link: 'https://goo.gl/maps/HK8e9BBwU8Q2' }
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

    // Social Links
    socials: [
        { name: 'github', url: 'https://github.com/ndlabdev', icon: 'i-simple-icons-github', class: 'social-github' },
        { name: 'linkedin', url: 'https://www.linkedin.com/in/dang-nguyen-long/', icon: 'i-simple-icons-linkedin', class: 'social-linkedin' },
        { name: 'facebook', url: 'https://www.facebook.com/nguyen.long.ang.2024', icon: 'i-simple-icons-facebook', class: 'social-facebook' },
        { name: 'twitter', url: 'https://x.com/ngNguyen430794', icon: 'i-simple-icons-x', class: 'social-twitter' },
        { name: 'instagram', url: 'https://instagram.com/ndlabdev', icon: 'i-simple-icons-instagram', class: 'social-instagram' },
        { name: 'email', url: 'mailto:longdang0412@gmail.com', icon: 'i-heroicons-envelope', class: 'social-email' }
    ]
}
