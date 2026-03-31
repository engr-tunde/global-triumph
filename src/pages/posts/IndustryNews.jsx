import FooterContact from '../../components/FooterContact';
import BlogMain from '../../components/blog/BlogMain';
import BlogSecondRow from '../../components/blog/BlogSecondRow';
import BlogTop from '../../components/blog/BlogTop';
import PostsHubHero from '../../components/blog/PostsHubHero';
import { Container } from 'react-bootstrap';
import { useEffect, useMemo } from 'react';
import useFetch from '../../hooks/useFetch';
import TopHead from '../../components/general/TopHead';

const CATEGORY = 'Industry News';

const IndustryNews = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const { data, loading, error } = useFetch(`${process.env.REACT_APP_API_URL}/posts/get-all-posts`);

  const posts = useMemo(
    () => (data ? data.filter((post) => post.category === CATEGORY) : []),
    [data]
  );

  return (
    <>
      <TopHead pageTitle="Real Estate Industry News" />
      <PostsHubHero
        variant="industry"
        eyebrow="Insights"
        title="Industry news & updates"
        lead="Market signals, policy notes, and perspectives from our desk—curated for owners and investors."
      />
      <section className="blog-hub">
        <Container>
          <div className="blog-hub__shell">
            <h2 className="visually-hidden">Industry news and updates</h2>
            {data && (
              <>
                <BlogTop learnItem1={posts.slice(0, 1)} />
                <BlogSecondRow learnSecondRowItems={posts.slice(1, 4)} />
                <BlogMain learnMainItems={posts.slice(4, 100)} />
              </>
            )}
            {loading && <p className="learn__state">Loading…</p>}
            {error && (
              <p className="learn__state learn__state--err" role="alert">
                {error}
              </p>
            )}
          </div>
        </Container>
      </section>
      <FooterContact />
    </>
  );
};

export default IndustryNews;
