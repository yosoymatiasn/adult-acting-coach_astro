export interface NavLink {
  label: string
  href: string
  external?: boolean
}

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/classes', label: 'Classes' },
  { href: '/public-speaking', label: 'Public Speaking' },
  { href: '/showcases', label: 'Showcases' },
  { href: '/self-tapes', label: 'Self-Tapes' },
  { href: '/building-your-brand', label: 'Private Coaching' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
]

export const footerLinks: NavLink[] = []
