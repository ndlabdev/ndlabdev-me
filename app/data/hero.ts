import type { Intro } from '~/types/site'

export const hero = {

    // Basic info
    name: 'Nguyen Long Dang',
    brand: 'ndlabdev',
    avatar: '/v1766394686/ndlab-dev/avatar_url.png',
    placeholderAvatar: 'https://placehold.co/200x200/png?text=ND',
    title: 'Software Engineer',
    siteName: 'NDLab',
    siteUrl: 'https://ndlab.dev',

    // Hero role rotation
    roles: [
        'Software Engineer',
        'Backend Engineer',
        'Data Pipeline Developer',
        'API Architect',
        'Problem Solver'
    ],

    // Hero intro
    intro: <Intro>{
        text: 'Welcome to my personal website! I’m a Software Engineer with nearly 5 years of experience designing scalable backend systems and event-driven architectures. Most recently built a real-time user behavior analytics platform, and I’m always looking for the next distributed systems challenge. Explore my projects, skills, and journey here.',
        highlight: [
            'Software Engineer',
            'scalable backend systems',
            'event-driven architectures',
            'real-time user behavior analytics platform',
            'distributed systems'
        ]
    }
}
