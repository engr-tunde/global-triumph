import { useLocation } from 'react-router-dom';
import PageSeo from '../seo/PageSeo';
import {
  DEFAULT_KEYWORDS,
  matchRouteSeo,
} from '../../config/seoDefaults';

/**
 * Page-level SEO. Uses route-based defaults from `seoDefaults` + optional overrides.
 *
 * @param {string} pageTitle — Short title segment (shown as “{pageTitle} | Global Triumph” unless the route supplies a full marketing title).
 * @param {string} [description] — Override meta description (155–160 chars ideal).
 * @param {string} [keywords] — Override keywords.
 * @param {string} [canonicalPath] — Override canonical path (default: current `location.pathname`).
 * @param {string} [imageUrl] — Open Graph / Twitter image (absolute or site-relative).
 * @param {boolean} [noindex] — Force noindex (e.g. auth flows, admin).
 */
const TopHead = ({
  pageTitle,
  description,
  keywords,
  canonicalPath,
  imageUrl,
  noindex: noindexProp,
}) => {
  const { pathname } = useLocation();
  const route = matchRouteSeo(pathname);

  const canonical = canonicalPath ?? pathname;
  const resolvedTitle = route?.title ?? pageTitle;
  const resolvedDescription = description ?? route?.description;
  const resolvedKeywords = keywords ?? route?.keywords ?? DEFAULT_KEYWORDS;
  const noindex =
    noindexProp === true || route?.noindex === true || pageTitle === 'Page Not Found';

  return (
    <PageSeo
      title={resolvedTitle}
      description={resolvedDescription}
      canonicalPath={canonical}
      keywords={resolvedKeywords}
      imageUrl={imageUrl}
      noindex={noindex}
    />
  );
};

export default TopHead;
