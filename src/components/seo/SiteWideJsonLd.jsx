import { Helmet } from 'react-helmet';
import { buildOrganizationJsonLd, buildWebSiteJsonLd } from '../../utils/seo';

/**
 * Sitewide JSON-LD (Organization + WebSite). Render once inside the app shell.
 */
export function SiteWideJsonLd() {
  const org = buildOrganizationJsonLd();
  const web = buildWebSiteJsonLd();
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(org)}</script>
      <script type="application/ld+json">{JSON.stringify(web)}</script>
    </Helmet>
  );
}

export default SiteWideJsonLd;
