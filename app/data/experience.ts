import type { ExperienceItem } from '~/types/site'

export const experience = {
    experience: <ExperienceItem[]>[
        {
            date: '2018 – 2021',
            title: 'Information Technology Student · Nha Trang University',
            description: [
                {
                    text: 'Completed coursework in software engineering, algorithms, data structures, database systems, and computer networking.',
                    highlight: ['software engineering', 'algorithms', 'data structures', 'database systems', 'computer networking']
                },
                {
                    text: 'Built multiple full-stack web projects as part of academic coursework and independent study.',
                    highlight: ['full-stack web projects']
                }
            ],
            icon: 'i-heroicons-academic-cap'
        },
        {
            date: 'May 2021 – Mar 2023',
            title: 'Full-Stack Developer · Widosoft',
            description: [
                {
                    text: 'Maintained and upgraded admin dashboard screens for a Japanese client’s chat application with Laravel 7 and jQuery throughout the two-year tenure, alongside two in-house products, and worked on its near real-time messaging for end customers, implemented with AJAX polling against incremental message endpoints.',
                    highlight: ['Japanese client’s chat application', 'Laravel 7', 'jQuery', 'near real-time messaging', 'AJAX polling']
                },
                {
                    text: 'Developed the admin portal for Honrada, the company’s English learning platform, with Vue.js, Node.js, and GraphQL (Hasura), and maintained its student and teacher portals (class scheduling, teacher feedback, live video lessons).',
                    highlight: ['Honrada', 'Vue.js', 'Node.js', 'GraphQL (Hasura)', 'student and teacher portals']
                },
                {
                    text: 'Built the admin portal for the company’s billiards club management product with Vue.js and Node.js, covering booking, player ranking, and multi-location management.',
                    highlight: ['billiards club management product', 'booking', 'player ranking', 'multi-location management']
                }
            ],
            icon: 'i-heroicons-code-bracket'
        },
        {
            date: 'Apr 2023 – Mar 2026',
            title: 'Software Engineer · Screen1 Technologies',
            description: [
                {
                    text: 'Built AI-Intent and AI-Insight end to end, from ReactJS frontend to backend: two LLM-powered features automating data enrichment and report analysis with multi-provider LLMs, BigQuery, and AWS Lambda/SQS/DynamoDB.',
                    highlight: ['AI-Intent', 'AI-Insight', 'end to end', 'LLM-powered features', 'multi-provider LLMs', 'BigQuery', 'AWS Lambda/SQS/DynamoDB']
                },
                {
                    text: 'Built an internal AI assistant that turned scattered product and design documents into a single place to ask questions, so engineering, QA, sales, and marketing could get source-cited answers in seconds instead of searching files or waiting on the people who wrote them.',
                    highlight: ['internal AI assistant', 'source-cited answers in seconds']
                },
                {
                    text: 'Designed and built a Salesforce-to-BigQuery sync pipeline from scratch on RabbitMQ and Redis, supporting incremental and historical syncs with idempotent writes to prevent duplicate records on retries.',
                    highlight: ['Salesforce-to-BigQuery sync pipeline', 'RabbitMQ', 'Redis', 'incremental and historical syncs', 'idempotent writes']
                },
                {
                    text: 'Optimized slow PostgreSQL and BigQuery queries through query plan analysis, lowering latency and scan costs, and built real-time dashboard updates with Pusher.',
                    highlight: ['PostgreSQL', 'BigQuery', 'query plan analysis', 'latency and scan costs', 'real-time dashboard updates', 'Pusher']
                }
            ],
            icon: 'i-heroicons-briefcase'
        }
    ]
}
