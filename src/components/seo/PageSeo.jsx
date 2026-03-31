import { Helmet } from 'react-helmet';
import { absoluteUrl, getSiteOrigin, truncate } from '../../utils/seo';
import { DEFAULT_DESCRIPTION } from '../../config/seoDefaults';

/** Default social image (absolute URL). Use a 1200×630 asset in /public when available. */
export const DEFAULT_OG_IMAGE_PATH = '/favicon.png';

/**
 * Full head tags for SEO & social: title, description, canonical, Open Graph, Twitter Card.
 * Optional structuredData: JSON-LD object (Article, WebPage, etc.).
 */
export function PageSeo({
  title,
  description,
  canonicalPath,
  imageUrl,
  type = 'website',
  articlePublished,
  articleModified,
  articleSection,
  noindex,
  keywords,
  structuredData,
}) {
  const origin = getSiteOrigin();
  const canonical = canonicalPath ? absoluteUrl(canonicalPath) : origin;
  const safeTitle = title ? truncate(title, 65) : 'Global Triumph';
  const fullTitle = safeTitle.includes('Global Triumph') ? safeTitle : `${safeTitle} | Global Triumph`;
  const desc = truncate(description || DEFAULT_DESCRIPTION, 160);
  const ogImage = imageUrl ? absoluteUrl(imageUrl) : absoluteUrl(DEFAULT_OG_IMAGE_PATH);
  const twitterCard = 'summary_large_image';

  const robots = noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1';

  return (
    <Helmet htmlAttributes={{ lang: 'en-NG' }}>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <link rel="canonical" href={canonical} />
      <meta name="robots" content={robots} />
      <meta name="theme-color" content="#1e6b47" />
      <meta name="geo.region" content="NG-LA" />
      <meta name="geo.placename" content="Lagos" />

      <meta property="og:site_name" content="Global Triumph" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={safeTitle} />
      <meta property="og:locale" content="en_NG" />

      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogImage} />

      {type === 'article' && articlePublished ? (
        <meta property="article:published_time" content={articlePublished} />
      ) : null}
      {type === 'article' && articleModified ? (
        <meta property="article:modified_time" content={articleModified} />
      ) : null}
      {type === 'article' && articleSection ? (
        <meta property="article:section" content={articleSection} />
      ) : null}

      {structuredData ? (
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      ) : null}
    </Helmet>
  );
}

export default PageSeo;
