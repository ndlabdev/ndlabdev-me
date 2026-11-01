import type { ExtraSkill, SkillGroup } from '~/types/site'

export const skills = {
    skills: <SkillGroup[]>[
        {
            category: 'Backend',
            tint: '#6366F1',
            catIcon: 'i-heroicons-server-stack',
            items: [
                { label: 'TypeScript', icon: 'i-logos-typescript-icon', doc: 'https://www.typescriptlang.org/', tier: 'core', role: 'lang' },
                { label: 'Node.js', icon: 'i-logos-nodejs-icon', doc: 'https://nodejs.org/', tier: 'core', role: 'runtime' },
                { label: 'Express', icon: 'i-logos-express', doc: 'https://expressjs.com/', invertDark: true, tier: 'core', role: 'framework' },
                { label: 'Python', icon: 'i-logos-python', doc: 'https://www.python.org/', tier: 'familiar', role: 'lang' },
                { label: 'Laravel', icon: 'i-logos-laravel', doc: 'https://laravel.com/', tier: 'familiar', role: 'framework' },
                { label: 'NestJS', icon: 'i-logos-nestjs', doc: 'https://nestjs.com/', tier: 'core', role: 'framework' },
                { label: 'Prisma', icon: 'i-logos-prisma', doc: 'https://www.prisma.io/', invertDark: true, tier: 'familiar', role: 'orm' },
                { label: 'RabbitMQ', icon: 'i-logos-rabbitmq-icon', doc: 'https://www.rabbitmq.com/', tier: 'core', role: 'queue' }
            ]
        },
        {
            category: 'Database',
            tint: '#10B981',
            catIcon: 'i-heroicons-circle-stack',
            items: [
                { label: 'PostgreSQL', icon: 'i-logos-postgresql', doc: 'https://www.postgresql.org/', tier: 'core', role: 'db' },
                { label: 'MySQL', icon: 'i-logos-mysql-icon', doc: 'https://www.mysql.com/', tier: 'familiar', role: 'db' },
                { label: 'Redis', icon: 'i-logos-redis', doc: 'https://redis.io/', tier: 'core', role: 'cache' },
                { label: 'Google BigQuery', icon: 'i-logos-google-cloud', doc: 'https://cloud.google.com/bigquery', tier: 'core', role: 'warehouse' },
                { label: 'pgvector', icon: 'i-heroicons-cube-transparent', doc: 'https://github.com/pgvector/pgvector', tier: 'familiar', role: 'vectors' }
            ]
        },
        {
            category: 'Frontend',
            tint: '#22D3EE',
            catIcon: 'i-heroicons-squares-2x2',
            items: [
                { label: 'Nuxt.js', icon: 'i-logos-nuxt-icon', doc: 'https://nuxt.com/', tier: 'core', role: 'ui' },
                { label: 'Next.js', icon: 'i-logos-nextjs-icon', doc: 'https://nextjs.org/', invertDark: true, tier: 'familiar', role: 'ui' },
                { label: 'Svelte 5', icon: 'i-logos-svelte-icon', doc: 'https://svelte.dev/', tier: 'core', role: 'ui' },
                { label: 'Tailwind CSS', icon: 'i-logos-tailwindcss-icon', doc: 'https://tailwindcss.com/', tier: 'familiar', role: 'css' }
            ]
        },
        {
            category: 'Cloud & DevOps',
            tint: '#F59E0B',
            catIcon: 'i-heroicons-cloud',
            items: [
                { label: 'AWS', icon: 'i-logos-aws', invertDark: true, tier: 'core', role: 'cloud' },
                { label: 'Docker', icon: 'i-logos-docker-icon', tier: 'core', role: 'containers' },
                { label: 'GitHub Actions', icon: 'i-logos-github-actions', doc: 'https://github.com/features/actions', tier: 'familiar', role: 'ci/cd' },
                { label: 'Vercel', icon: 'i-logos-vercel-icon', invertDark: true, tier: 'familiar', role: 'hosting' }
            ]
        },
        {
            category: 'AI & LLM',
            tint: '#EC4899',
            catIcon: 'i-heroicons-cpu-chip',
            items: [
                { label: 'LangChain', icon: 'i-simple-icons-langchain', doc: 'https://www.langchain.com/', tier: 'core', role: 'framework' },
                { label: 'LangGraph', icon: 'i-simple-icons-langgraph', doc: 'https://www.langchain.com/langgraph', tier: 'familiar', role: 'agents' },
                { label: 'LangSmith', icon: 'i-simple-icons-langchain', doc: 'https://www.langchain.com/langsmith', tier: 'familiar', role: 'observability' },
                { label: 'RAG', icon: 'i-heroicons-document-magnifying-glass', tier: 'core', role: 'retrieval' },
                { label: 'LLM APIs', icon: 'i-heroicons-command-line', tier: 'core', role: 'multi-provider' }
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
        { label: 'Vue.js', url: 'https://vuejs.org/', icon: 'i-logos-vue', tier: 'familiar', role: 'ui' },
        { label: 'React', url: 'https://react.dev/', icon: 'i-logos-react', tier: 'familiar', role: 'ui' },
        { label: 'GraphQL', url: 'https://graphql.org/', icon: 'i-logos-graphql', tier: 'familiar', role: 'api' },
        { label: 'Hasura', url: 'https://hasura.io/', icon: 'i-logos-hasura-icon', tier: 'familiar', role: 'api' },
        { label: 'Pusher', url: 'https://pusher.com/', icon: 'i-simple-icons-pusher', tier: 'familiar', role: 'realtime' },
        { label: 'ElysiaJS', url: 'https://elysiajs.com/', icon: 'i-heroicons-bolt', tier: 'familiar', role: 'framework' },
        { label: 'CodeIgniter', url: 'https://codeigniter.com/', icon: 'i-simple-icons-codeigniter', tier: 'familiar', role: 'framework' },
        { label: 'ESLint', url: 'https://eslint.org/', icon: 'i-logos-eslint', tier: 'familiar', role: 'linting' }
    ]
}
