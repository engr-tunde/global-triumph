/** Default copy per route — used when pages do not pass a custom `description`. */

export const SITE_NAME = 'Global Triumph Market Plus Multiconcept';
export const SITE_SHORT = 'Global Triumph';

export const DEFAULT_DESCRIPTION =
  'Global Triumph Market Plus Multiconcept (GTMPM) — real estate, property sales and investments, professional property management, visa processing, and CCTV services in Nigeria. Serving Lagos, Lekki, Sangotedo, and growth corridors.';

export const DEFAULT_KEYWORDS =
  'Global Triumph, GTMPM, real estate Nigeria, property investment Lagos, buy property Lagos, Lekki real estate, Sangotedo property, visa services Nigeria, property management Lagos, CCTV installation, interior décor, real estate development';

/** @type {Record<string, { title?: string; description: string; keywords?: string }>} */
export const ROUTE_SEO = {
  '/': {
    title: 'Real estate, investments & visa services in Nigeria',
    description:
      'Invest in verified property, explore structured investment programs, and access visa and lifestyle services—with transparent processes and assets you can verify. Global Triumph Market Plus Multiconcept.',
    keywords:
      'GTMPM, Global Triumph Nigeria, real estate investment, property Lagos, Lekki property, visa services',
  },
  '/about': {
    description:
      'About Global Triumph Market Plus Multiconcept — incorporated 2014, SCRUM-certified realtors, serving local and international clients in real estate, development, and visa services.',
  },
  '/services': {
    description:
      'Our services: property sales and consultancy, real estate development, property management, marketing, CCTV and interior décor, and visa services — end-to-end support from one team.',
  },
  '/contact': {
    description:
      'Contact Global Triumph for property enquiries, investment programs, visa support, and general questions. Prompt responses from our team.',
  },
  '/investments': {
    description:
      'Compare investment tiers, entry ranges, ROI, and ceilings. Structured real estate investment programs with clear documentation — Global Triumph.',
  },
  '/projects': {
    description:
      'Explore our portfolio of developments and completed projects — residential and commercial real estate across prime corridors in Nigeria.',
  },
  '/shop': {
    description:
      'Browse properties for sale and rent — verified listings with details, features, and pricing from Global Triumph.',
  },
  '/gallery': {
    description:
      'Event gallery and highlights from Global Triumph — launches, milestones, and community moments.',
  },
  '/faq': {
    description:
      'Frequently asked questions about investing, property purchases, services, and working with Global Triumph Market Plus Multiconcept.',
  },
  '/learn': {
    description:
      'Learn hub — articles and resources on real estate, investment, and mobility from Global Triumph.',
  },
  '/industry-news': {
    description:
      'Real estate industry news and updates relevant to Nigerian markets — curated by Global Triumph.',
  },
  '/visa-processing': {
    description:
      'Visa processing and advisory for students, families, and workers — support for USA, UAE, Europe, and more through Global Triumph.',
  },
  '/visa-opportunities': {
    description:
      'Visa opportunities and pathways — explore options with guidance from Global Triumph.',
  },
  '/careers': {
    description:
      'Careers at Global Triumph — join a disciplined team in real estate, investments, and client success.',
  },
  '/product-updates': {
    description:
      'Product and platform updates from Global Triumph — new features, listings, and announcements.',
  },
  '/investment-updates': {
    description:
      'Investment updates and insights — programs, performance context, and news from Global Triumph.',
  },
  '/terms-and-conditions': {
    description:
      'Terms and conditions for using Global Triumph Market Plus Multiconcept websites and services.',
  },
  '/privacy-policy': {
    description:
      'Privacy policy — how Global Triumph collects, uses, and protects your information.',
  },
  '/signup': {
    description:
      'Create your investor account with Global Triumph — verify your email and access your dashboard.',
    keywords: 'GTMPM signup, register investor account',
  },
  '/login': {
    description: 'Sign in to your Global Triumph investor account — secure access to your portfolio.',
  },
  '/marketer-signup': {
    description:
      'Create a marketer account — earn commissions and track performance with Global Triumph.',
  },
  '/marketer-login': {
    description: 'Sign in to your marketer portal — Global Triumph partner dashboard.',
  },
  '/marketer-forgot-password': {
    description: 'Reset your marketer account password — Global Triumph.',
  },
  '/forgot-password': {
    description: 'Reset your investor account password — Global Triumph.',
  },
  '/reset-password': {
    description: 'Set a new password for your Global Triumph account.',
  },
  '/verify-account': {
    description: 'Verify your email to activate your Global Triumph account.',
    noindex: true,
  },
  '/gtmpm-admin': {
    description: 'Team sign-in — Global Triumph internal dashboard.',
    noindex: true,
  },
};

const PREFIX_ROUTES = [
  {
    prefix: '/career-details',
    description:
      'Job opportunity at Global Triumph — role details, requirements, and how to apply.',
  },
  {
    prefix: '/project-details',
    description:
      'Project details — development overview, location, and highlights from Global Triumph.',
  },
  {
    prefix: '/list-details',
    description:
      'Property listing — price, features, and enquiry options with Global Triumph.',
  },
  {
    prefix: '/event-gallery',
    description: 'Event gallery — photos and highlights from Global Triumph events.',
  },
  {
    prefix: '/post-details',
    description: 'Article — insights and updates from Global Triumph.',
  },
];

/**
 * @param {string} pathname
 * @returns {{ title?: string; description?: string; keywords?: string; noindex?: boolean } | null}
 */
export function matchRouteSeo(pathname) {
  if (!pathname) return null;
  const normalized = pathname.split('?')[0] || '/';
  if (ROUTE_SEO[normalized]) return ROUTE_SEO[normalized];
  for (const { prefix, ...rest } of PREFIX_ROUTES) {
    if (normalized.startsWith(prefix)) return rest;
  }
  return null;
}
