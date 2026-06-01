import type { ContactInfo, SocialLink } from '~/types/site'

export const contact = {
    socials: <SocialLink[]>[
        { name: 'github', url: 'https://github.com/ndlabdev', icon: 'i-simple-icons-github', class: 'social-github' },
        { name: 'linkedin', url: 'https://www.linkedin.com/in/dang-nguyen-long/', icon: 'i-simple-icons-linkedin', class: 'social-linkedin' },
        { name: 'facebook', url: 'https://www.facebook.com/nguyen.long.ang.2024', icon: 'i-simple-icons-facebook', class: 'social-facebook' },
        { name: 'instagram', url: 'https://www.instagram.com/ndlabdev/', icon: 'i-simple-icons-instagram', class: 'social-instagram' },
        { name: 'email', url: 'mailto:longdang0412@gmail.com', icon: 'i-heroicons-envelope', class: 'social-email' }
    ],

    contactInfo: <ContactInfo[]>[
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
