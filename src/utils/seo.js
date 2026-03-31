import {
  DEFAULT_DESCRIPTION as SITE_DEFAULT_DESCRIPTION,
  SITE_NAME,
  SITE_SHORT,
} from '../config/seoDefaults';

/** Site URL for canonical & OG tags. Set REACT_APP_SITE_URL in .env (e.g. https://globaltriumph.ng). */
export function getSiteOrigin() {
  const env =
    typeof process !== 'undefined' && process.env.REACT_APP_SITE_URL
      ? String(process.env.REACT_APP_SITE_URL).replace(/\/$/, '')
      : '';
  if (env) return env;
  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin;
  }
  return 'https://globaltriumph.ng';
}

export function absoluteUrl(pathOrUrl) {
  if (!pathOrUrl) return getSiteOrigin();
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  const path = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;
  return `${getSiteOrigin()}${path}`;
}

export function stripHtml(html) {
  if (!html || typeof html !== 'string') return '';
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function truncate(text, maxLen = 160) {
  if (!text) return '';
  const t = text.trim();
  if (t.length <= maxLen) return t;
  return `${t.slice(0, maxLen - 1).trim()}…`;
}

export function buildDescriptionFromHtml(html, fallback) {
  const plain = stripHtml(html);
  if (plain.length >= 50) return truncate(plain, 160);
  return fallback || truncate(plain, 160);
}

export function buildArticleSchema({
  headline,
  description,
  imageUrl,
  datePublished,
  dateModified,
  url,
  section,
}) {
  const publisher = {
    '@type': 'Organization',
    name: 'Global Triumph',
    url: getSiteOrigin(),
  };
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description: truncate(description || '', 300),
    image: imageUrl ? [absoluteUrl(imageUrl)] : undefined,
    datePublished: datePublished || undefined,
    dateModified: dateModified || datePublished || undefined,
    author: publisher,
    publisher,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    articleSection: section || undefined,
  };
}

export function buildProjectSchema({ name, description, url, imageUrl }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description: truncate(description || '', 500),
    url,
    image: imageUrl ? absoluteUrl(imageUrl) : undefined,
    publisher: {
      '@type': 'Organization',
      name: 'Global Triumph',
      url: getSiteOrigin(),
    },
  };
}

export function buildOrganizationJsonLd() {
  const url = getSiteOrigin();
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    alternateName: SITE_SHORT,
    url,
    logo: `${url}/favicon.png`,
    description: SITE_DEFAULT_DESCRIPTION,
    address: {
      '@type': 'PostalAddress',
      streetAddress:
        '26, Omolara Olusi Street, Hopville Estate, opposite SBI Hotel, Sangotedo Road, Ajah',
      addressLocality: 'Lagos',
      addressRegion: 'Lagos',
      addressCountry: 'NG',
    },
    sameAs: [
      'https://www.twitter.com/globaltriumphng',
      'https://www.facebook.com/globaltriumphng',
      'https://www.instagram.com/globaltriumphng',
      'https://www.youtube.com/@globaltriumphng',
    ],
  };
}

export function buildWebSiteJsonLd() {
  const url = getSiteOrigin();
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_SHORT,
    alternateName: SITE_NAME,
    url,
    description: SITE_DEFAULT_DESCRIPTION,
    inLanguage: 'en-NG',
    publisher: {
      '@type': 'Organization',
      name: SITE_SHORT,
      url,
    },
  };
}

export function buildListingSchema({ name, description, url, imageUrl, price, currency = 'NGN' }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description: truncate(description || '', 500),
    image: imageUrl ? absoluteUrl(imageUrl) : undefined,
    url,
    brand: {
      '@type': 'Organization',
      name: 'Global Triumph',
    },
  };
  if (price != null && Number.isFinite(Number(price))) {
    schema.offers = {
      '@type': 'Offer',
      price: String(price),
      priceCurrency: currency,
      availability: 'https://schema.org/InStock',
      url,
    };
  }
  return schema;
}
