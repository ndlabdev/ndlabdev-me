import type { ExtraSkill, SkillGroup } from '~/types/site'

export const skills = {
    skills: <SkillGroup[]>[
        {
            category: 'Frontend',
            tint: '#22D3EE',
            catIcon: 'i-heroicons-squares-2x2',
            items: [
                { label: 'Nuxt.js', icon: 'i-logos-nuxt-icon', doc: 'https://nuxt.com/', tier: 'core', role: 'ui' },
                { label: 'Next.js', icon: 'i-logos-nextjs-icon', doc: 'https://nextjs.org/', invertDark: true, tier: 'familiar', role: 'ui' },
                { label: 'Svelte 5', icon: 'i-logos-svelte-icon', doc: 'https://svelte.dev/', tier: 'core', role: 'ui' },
                { label: 'TypeScript', icon: 'i-logos-typescript-icon', doc: 'https://www.typescriptlang.org/', tier: 'core', role: 'lang' },
                { label: 'Tailwind CSS', icon: 'i-logos-tailwindcss-icon', doc: 'https://tailwindcss.com/', tier: 'familiar', role: 'css' }
            ]
        },
        {
            category: 'Backend',
            tint: '#6366F1',
            catIcon: 'i-heroicons-server-stack',
            items: [
                { label: 'Node.js', icon: 'i-logos-nodejs-icon', doc: 'https://nodejs.org/', tier: 'core', role: 'runtime' },
                { label: 'Express', icon: 'i-logos-express', doc: 'https://expressjs.com/', invertDark: true, tier: 'core', role: 'framework' },
                { label: 'Laravel', icon: 'i-logos-laravel', doc: 'https://laravel.com/', tier: 'familiar', role: 'framework' },
                { label: 'NestJS', icon: 'i-logos-nestjs', doc: 'https://nestjs.com/', tier: 'core', role: 'framework' },
                { label: 'Prisma', icon: 'i-logos-prisma', doc: 'https://www.prisma.io/', invertDark: true, tier: 'familiar', role: 'orm' },
                { label: 'PostgreSQL', icon: 'i-logos-postgresql', doc: 'https://www.postgresql.org/', tier: 'familiar', role: 'db' },
                { label: 'MySQL', icon: 'i-logos-mysql-icon', doc: 'https://www.mysql.com/', tier: 'familiar', role: 'db' },
                { label: 'Redis', icon: 'i-logos-redis', doc: 'https://redis.io/', tier: 'core', role: 'cache' },
                { label: 'RabbitMQ', icon: 'i-logos-rabbitmq-icon', doc: 'https://www.rabbitmq.com/', tier: 'core', role: 'queue' },
                { label: 'Google BigQuery', icon: 'i-logos-google-cloud', doc: 'https://cloud.google.com/bigquery', tier: 'familiar', role: 'analytics' }
            ]
        },
        {
            category: 'Tools & DevOps',
            tint: '#F59E0B',
            catIcon: 'i-heroicons-wrench-screwdriver',
            items: [
                { label: 'AWS', icon: 'i-logos-aws', invertDark: true, tier: 'core', role: 'cloud' },
                { label: 'Docker', icon: 'i-logos-docker-icon', tier: 'core', role: 'containers' },
                { label: 'GitHub Actions', icon: 'i-logos-github-actions', doc: 'https://github.com/features/actions', tier: 'familiar', role: 'ci/cd' },
                { label: 'Vercel', icon: 'i-logos-vercel-icon', invertDark: true, tier: 'familiar', role: 'hosting' }
            ]
        },
        {
            category: 'AI Tools',
            tint: '#A855F7',
            catIcon: 'i-heroicons-sparkles',
            items: [
                { label: 'ChatGPT', icon: 'i-logos-openai-icon', doc: 'https://chat.openai.com/', invertDark: true, tier: 'familiar', role: 'models' },
                { label: 'Claude', icon: 'i-logos-claude-icon', doc: 'https://claude.ai/', tier: 'core', role: 'assistant' },
                { label: 'Cursor', icon: 'i-simple-icons-cursor', doc: 'https://cursor.com/', tier: 'core', role: 'editor' },
                { label: 'GitHub Copilot', icon: 'i-simple-icons-githubcopilot', doc: 'https://github.com/features/copilot', tier: 'familiar', role: 'completion' }
            ]
        }
    ],

    extraSkills: <ExtraSkill[]>[
        { label: 'ElysiaJS', url: 'https://elysiajs.com/', icon: 'i-heroicons-bolt', tier: 'familiar', role: 'framework' },
        { label: 'CodeIgniter', url: 'https://codeigniter.com/', icon: 'i-simple-icons-codeigniter', tier: 'familiar', role: 'framework' },
        { label: 'GraphQL', url: 'https://graphql.org/', icon: 'i-logos-graphql', tier: 'familiar', role: 'api' },
        { label: 'ESLint', url: 'https://eslint.org/', icon: 'i-logos-eslint', tier: 'familiar', role: 'linting' }
    ]
}
