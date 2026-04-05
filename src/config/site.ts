interface NavLink {
  label: string
  href: string
}

interface NavGroup {
  title: string
  links: NavLink[]
}

interface SocialLink {
  platform: string
  href: string
}

interface BusinessCoordinates {
  lat: number
  lng: number
}

interface BusinessInfo {
  phone: string
  email: string
  address: string
  hours: string
  coordinates?: BusinessCoordinates
}

interface SiteConfig {
  siteUrl: string
  name: string
  tagline: string
  description: string
  ogImage: string
  logo: string
  colors: {
    primary: string
    secondary: string
  }
  nav: NavLink[]
  footerGroups: NavGroup[]
  social: SocialLink[]
  copyright: string
  business?: BusinessInfo
  formAction?: string
}

export const siteConfig: SiteConfig = {
  siteUrl: 'https://kystrel.github.io',
  name: 'Astro Starter',
  tagline: 'A minimal template to start building\nfast, modern websites.',
  description:
    'A minimal Astro starter template for building fast, modern websites with Tailwind CSS and DaisyUI.',
  ogImage: `${import.meta.env.BASE_URL}og-image.png`,
  logo: '/favicon.svg',
  colors: {
    primary: 'primary',
    secondary: 'secondary',
  },
  nav: [
    { label: 'Link 1', href: '#' },
    { label: 'Link 2', href: '#' },
    { label: 'Link 3', href: '#' },
  ],
  footerGroups: [
    {
      title: 'Quick Links',
      links: [
        { label: 'Home', href: '#' },
        { label: 'Services', href: '#' },
        { label: 'About', href: '#' },
      ],
    },
    {
      title: 'More',
      links: [
        { label: 'Testimonials', href: '#' },
        { label: 'Contact', href: '#' },
        { label: 'Menu', href: '#' },
      ],
    },
  ],
  social: [
    { platform: 'Instagram', href: '#' },
    { platform: 'Facebook', href: '#' },
    { platform: 'Twitter', href: '#' },
  ],
  copyright: 'Your Company Name',
  business: {
    phone: '+1 (555) 000-0000',
    email: 'hello@example.com',
    address: '123 Main Street, Your City, ST 00000',
    hours: 'Mon–Fri 8am–6pm',
    coordinates: {
      lat: 40.7128,
      lng: -74.006,
    },
  },
}
