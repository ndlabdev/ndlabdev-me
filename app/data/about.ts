import type { Highlight, Intro, PersonalInfo } from '~/types/site'

export const about = {
    summary: <Intro>{
        text: 'Software Engineer with nearly 5 years of experience building scalable web applications and data-driven platforms. Specialized in backend development with Node.js and AWS, with a strong focus on designing event-driven architectures using RabbitMQ, Redis, and BigQuery. Most recently built a real-time user behavior analytics platform that helps marketers capture, analyze, and optimize user engagement across websites. Seeking new opportunities to tackle complex backend and distributed systems challenges at scale.',
        highlight: [
            'Software Engineer',
            'Node.js',
            'AWS',
            'event-driven architectures',
            'RabbitMQ',
            'Redis',
            'BigQuery',
            'real-time user behavior analytics platform',
            'backend and distributed systems'
        ]
    },

    personalInfo: <PersonalInfo[]>[
        { label: 'Name', value: 'Nguyen Long Dang', icon: 'i-heroicons-user' },
        { label: 'Email', value: 'longdang0412@gmail.com', icon: 'i-heroicons-envelope', link: 'mailto:longdang0412@gmail.com' },
        { label: 'Phone', value: '+84 389 747 179', icon: 'i-heroicons-phone', link: 'tel:+84389747179' },
        { label: 'Job Title', value: 'Software Engineer', icon: 'i-heroicons-code-bracket' },
        { label: 'Experience', value: 'Nearly 5 Years', icon: 'i-heroicons-academic-cap' },
        { label: 'Education', value: 'Nha Trang University', icon: 'i-heroicons-academic-cap' },
        { label: 'Nationality', value: 'Vietnamese', icon: 'i-heroicons-flag' },
        { label: 'Languages', value: 'Vietnamese, English', icon: 'i-heroicons-language' },
        { label: 'Location', value: 'Nha Trang City, Khanh Hoa Province, Vietnam', icon: 'i-heroicons-map-pin', link: 'https://maps.app.goo.gl/XCoMHu1gKKchK73T7' }
    ],

    highlights: <Highlight[]>[
        { text: 'Focus on writing clean, maintainable, and scalable code for both frontend and backend applications.', highlight: ['clean, maintainable, and scalable code'] },
        { text: 'Enjoy tackling complex problems and turning them into simple, user-friendly solutions.', highlight: ['complex problems'] },
        { text: 'Experienced in team collaboration, contributing effectively to meet deadlines and deliver quality projects.', highlight: ['team collaboration'] },
        { text: 'Keen on continuous learning and staying updated with new technologies in web development.', highlight: ['continuous learning'] },
        { text: 'Pay attention to performance and user experience to ensure products run smoothly and are enjoyable to use.', highlight: ['performance and user experience'] }
    ]
}
