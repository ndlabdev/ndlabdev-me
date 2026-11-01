import type { Highlight, Intro, PersonalInfo } from '~/types/site'

export const about = {
    summary: <Intro>{
        text: 'Full-Stack Developer with nearly 5 years of experience building event-driven, data-intensive systems with Node.js, PostgreSQL, and AWS. On a real-time user behavior analytics platform for a US client, owned the Salesforce-to-BigQuery integration service end to end (RabbitMQ, Redis) and built two LLM-powered features for automated data enrichment and report analysis. Strong in production distributed-systems concerns: idempotency, distributed locking, race conditions, and query optimization.',
        highlight: [
            'Full-Stack Developer',
            'Node.js',
            'PostgreSQL',
            'AWS',
            'Salesforce-to-BigQuery integration service',
            'RabbitMQ',
            'Redis',
            'LLM-powered features',
            'idempotency',
            'distributed locking',
            'race conditions',
            'query optimization'
        ]
    },

    personalInfo: <PersonalInfo[]>[
        { label: 'Name', value: 'Nguyen Long Dang', icon: 'i-heroicons-user' },
        { label: 'Email', value: 'longdang0412@gmail.com', icon: 'i-heroicons-envelope', link: 'mailto:longdang0412@gmail.com' },
        { label: 'Phone', value: '+84 389 747 179', icon: 'i-heroicons-phone', link: 'tel:+84389747179' },
        { label: 'Job Title', value: 'Full-Stack Developer', icon: 'i-heroicons-code-bracket' },
        { label: 'Experience', value: 'Nearly 5 Years', icon: 'i-heroicons-briefcase' },
        { label: 'Education', value: 'Nha Trang University', icon: 'i-heroicons-academic-cap' },
        { label: 'Nationality', value: 'Vietnamese', icon: 'i-heroicons-flag' },
        { label: 'Languages', value: 'Vietnamese, English', icon: 'i-heroicons-language' },
        { label: 'Location', value: 'Nha Trang, Khanh Hoa, Vietnam', icon: 'i-heroicons-map-pin', link: 'https://maps.app.goo.gl/XCoMHu1gKKchK73T7' }
    ],

    highlights: <Highlight[]>[
        { text: 'Design for production realities: idempotent writes, distributed locking, and safe retries so pipelines never duplicate or lose data.', highlight: ['idempotent writes', 'distributed locking', 'safe retries'] },
        { text: 'Tune slow PostgreSQL and BigQuery queries through query plan analysis to cut latency and scan costs.', highlight: ['query plan analysis', 'latency and scan costs'] },
        { text: 'Own features end to end, from the React or Vue frontend to the Node.js backend, queues, and cloud infrastructure.', highlight: ['end to end'] },
        { text: 'Build practical LLM features with RAG and multi-provider LLM APIs that save teams real time.', highlight: ['LLM features', 'RAG', 'multi-provider LLM APIs'] },
        { text: 'Work closely with engineering, QA, sales, and marketing to ship tools people actually use.', highlight: ['engineering, QA, sales, and marketing'] }
    ]
}
