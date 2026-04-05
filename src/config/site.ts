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

interface SiteConfig {
  name: string
  tagline: string
  logo: string
  colors: {
    primary: string
    secondary: string
  }
  nav: NavLink[]
  footerGroups: NavGroup[]
  social: SocialLink[]
  copyright: string
}

export const siteConfig: SiteConfig = {
  name: 'Astro Starter',
  tagline: 'A minimal template to start building\nfast, modern websites.',
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
}
