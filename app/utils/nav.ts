export interface NavItem {
    n: string
    label: string
    id: string
}

export const navItems: NavItem[] = [
    { n: '00', label: 'Home', id: 'hero' },
    { n: '01', label: 'About', id: 'about' },
    { n: '02', label: 'Skills', id: 'skills' },
    { n: '03', label: 'Projects', id: 'projects' },
    { n: '04', label: 'Experience', id: 'experience' },
    { n: '05', label: 'Contact', id: 'contact' }
]
