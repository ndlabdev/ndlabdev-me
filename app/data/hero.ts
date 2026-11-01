import type { Intro } from '~/types/site'

export const hero = {

    // Basic info
    name: 'Nguyen Long Dang',
    brand: 'ndlabdev',
    avatar: '/v1766394686/ndlab-dev/avatar_url.png',
    placeholderAvatar: 'https://placehold.co/200x200/png?text=ND',
    title: 'Full-Stack Developer',
    siteName: 'NDLab',
    siteUrl: 'https://ndlab.dev',

    // Hero role rotation
    roles: [
        'Full-Stack Developer',
        'Backend Engineer',
        'Data Pipeline Engineer',
        'LLM Feature Builder',
        'Problem Solver'
    ],

    // Hero intro
    intro: <Intro>{
        text: 'Welcome to my personal website! I’m a Full-Stack Developer with nearly 5 years of experience building event-driven, data-intensive systems with Node.js, PostgreSQL, and AWS. Most recently I worked on a real-time user behavior analytics platform for a US client, owning its Salesforce-to-BigQuery integration and shipping LLM-powered features. Explore my projects, skills, and journey here.',
        highlight: [
            'Full-Stack Developer',
            'event-driven, data-intensive systems',
            'real-time user behavior analytics platform',
            'Salesforce-to-BigQuery integration',
            'LLM-powered features'
        ]
    }
}
