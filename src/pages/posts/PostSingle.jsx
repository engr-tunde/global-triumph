import BlogContent from '../../components/blog/BlogContent';
import FooterContact from '../../components/FooterContact';
import { useEffect, useMemo } from 'react';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import VisaForm from '../../components/visa/VisaForm';
import PageSeo from '../../components/seo/PageSeo';
import { buildArticleSchema, buildDescriptionFromHtml, getSiteOrigin } from '../../utils/seo';

const PostSingle = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const { postUrl } = useParams();

  const { data, loading, error } = useFetch(
    `${process.env.REACT_APP_API_URL}/posts/post/${postUrl}`
  );

  const payload = data?.data;
  const isMissing = data?.message === "Doesn't Exist";

  const shareUrl = useMemo(
    () => `${getSiteOrigin()}/post-details/${postUrl}`,
    [postUrl]
  );

  const seo = useMemo(() => {
    if (!payload || isMissing) return null;
    const cover = `${process.env.REACT_APP_IMG_BASEURL}/posts/${payload.coverImage}`;
    const desc = buildDescriptionFromHtml(
      payload.post,
      `${payload.postTitle} — Global Triumph, Nigeria.`
    );
    const published = payload.createdAt || payload.postDate || payload.datePublished || null;
    const modified = payload.updatedAt || published;
    return {
      title: payload.postTitle,
      description: desc,
      canonicalPath: `/post-details/${postUrl}`,
      imageUrl: cover,
      type: 'article',
      articlePublished: published,
      articleModified: modified,
      articleSection: payload.category,
      structuredData: buildArticleSchema({
        headline: payload.postTitle,
        description: desc,
        imageUrl: cover,
        datePublished: published,
        dateModified: modified,
        url: shareUrl,
        section: payload.category,
      }),
    };
  }, [payload, isMissing, postUrl, shareUrl]);

  return (
    <>
      {isMissing && (
        <PageSeo
          title="Post not found"
          description="This article is no longer available on Global Triumph."
          canonicalPath={`/post-details/${postUrl}`}
          noindex
        />
      )}

      {payload && !isMissing && seo && (
        <PageSeo
          title={seo.title}
          description={seo.description}
          canonicalPath={seo.canonicalPath}
          imageUrl={seo.imageUrl}
          type={seo.type}
          articlePublished={seo.articlePublished}
          articleModified={seo.articleModified}
          articleSection={seo.articleSection}
          structuredData={seo.structuredData}
          keywords={`${payload.category || 'real estate'}, Global Triumph, Nigeria, ${payload.postTitle}`}
        />
      )}

      {isMissing && (
        <section className="blog-content blog-content--empty">
          <Container>
            <div className="post-article__inner post-article__inner--empty">
              <h1 className="post-article__title">This post is no longer available.</h1>
              <p className="post-article__empty-text">
                The article you are looking for may have been moved or removed.
              </p>
            </div>
          </Container>
        </section>
      )}

      {payload && !isMissing && (
        <BlogContent
          data={payload}
          shareUrl={shareUrl}
          shareTitle={payload.postTitle}
          shareDescription={buildDescriptionFromHtml(payload.post, '')}
        />
      )}

      {payload && !isMissing && payload.category === 'Visa Opportunity' ? <VisaForm /> : null}

      {loading && <p className="post-page__state">Loading…</p>}
      {error && (
        <p className="post-page__state post-page__state--err" role="alert">
          {error}
        </p>
      )}
      <FooterContact />
    </>
  );
};

export default PostSingle;
