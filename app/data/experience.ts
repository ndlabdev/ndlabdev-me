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
                    text: 'Developed the admin system for Honrada, an English learning platform for beginners through intermediate learners, including student, teacher, and admin management modules.',
                    highlight: ['Honrada', 'English learning platform', 'student, teacher, and admin management modules']
                },
                {
                    text: 'Built the admin dashboard for a Billiards Club Management System with booking, player ranking, and multi-location management features.',
                    highlight: ['Billiards Club Management System', 'booking', 'player ranking', 'multi-location management']
                },
                {
                    text: 'Delivered additional full-stack web projects for Japanese clients, handling frontend and backend development and performance optimization.',
                    highlight: ['full-stack web projects', 'Japanese clients', 'performance optimization']
                }
            ],
            icon: 'i-heroicons-code-bracket'
        },
        {
            date: 'Apr 2023 – Feb 2026',
            title: 'Software Engineer · Screen1 Technologies',
            description: [
                {
                    text: 'Built a real-time user behavior analytics platform similar to Google Analytics, enabling marketers to collect, process, and visualize user interaction data with customizable reports.',
                    highlight: ['real-time user behavior analytics platform']
                },
                {
                    text: 'Built AI-Intent and AI-Insight, two LLM-powered features that automate record-level enrichment and recurring report analysis, integrating multi-provider LLMs, BigQuery, AWS Lambda/SQS/DynamoDB, and a credit-based billing system.',
                    highlight: [
                        'AI-Intent',
                        'AI-Insight',
                        'LLM-powered features',
                        'record-level enrichment',
                        'recurring report analysis',
                        'multi-provider LLMs',
                        'BigQuery',
                        'AWS Lambda/SQS/DynamoDB',
                        'credit-based billing system'
                    ]
                },
                {
                    text: 'Implemented scalable backend services using Node.js and AWS (Lambda, SQS, RDS, S3, ECS, CloudWatch), with event pipelines built on RabbitMQ, Redis, and Pusher for real-time dashboards.',
                    highlight: ['Node.js', 'AWS', 'RabbitMQ', 'Redis', 'Pusher']
                },
                {
                    text: 'Integrated Google BigQuery for data warehousing and behavioral analytics, including automated Salesforce-to-BigQuery data pipelines for cross-platform reporting.',
                    highlight: ['Google BigQuery', 'Salesforce-to-BigQuery']
                },
                {
                    text: 'Optimized large-scale query performance and ensured system reliability and cost efficiency across cloud infrastructure, leveraging AI coding tools (Cursor, Claude, ChatGPT) to accelerate feature delivery.',
                    highlight: ['AI coding tools', 'Cursor', 'Claude', 'ChatGPT', 'accelerate feature delivery']
                }
            ],
            icon: 'i-heroicons-briefcase'
        }
    ]
}
