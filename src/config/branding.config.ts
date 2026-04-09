// branding.config.ts — single source of truth for all site-level data.
// Edit this file first when customizing a site built from this starter.

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

interface BusinessInfo {
  // All fields are optional. Omit any the client does not want public.
  phone?: string
  email?: string
  address?: string
  // Schema.org format: "Mo-Fr 08:00-18:00". Two-letter day codes, 24-hour time.
  hours?: string
  coordinates?: { lat: number; lng: number }
  // Schema.org @type — defaults to "LocalBusiness".
  // See https://schema.org/LocalBusiness for subtypes (e.g. "ProfessionalService").
  schemaType?: string
}

interface BrandingConfig {
  site: {
    // Canonical URL — no trailing slash. Must match astro.config.mjs `site`.
    siteUrl: string
    name: string
    tagline: string
    description: string
    ogImage: string
    logo: string
  }
  // Contact and location data. Omit entirely for remote-only businesses.
  business?: BusinessInfo
  nav: NavLink[]
  footerGroups: NavGroup[]
  social: SocialLink[]
  copyright: string
  // URL for the contact form POST action. Omit if not using a form endpoint.
  formAction?: string
}

export const brandingConfig: BrandingConfig = {
  site: {
    siteUrl: 'https://kystrel.github.io',
    name: 'Astro Starter',
    tagline: 'A minimal template to start building\nfast, modern websites.',
    description:
      'A minimal Astro starter template for building fast, modern websites with Tailwind CSS and DaisyUI.',
    ogImage: `${import.meta.env.BASE_URL}og-image.png`,
    logo: '/favicon.svg',
  },

  business: {
    phone: '+1 (555) 000-0000',
    email: 'hello@example.com',
    address: '123 Main Street, Your City, ST 00000',
    hours: 'Mo-Fr 08:00-18:00',
    coordinates: { lat: 40.7128, lng: -74.006 },
    schemaType: 'LocalBusiness',
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
