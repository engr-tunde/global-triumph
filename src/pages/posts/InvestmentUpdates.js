import FooterContact from '../../components/FooterContact';
import BlogMain from '../../components/blog/BlogMain';
import BlogSecondRow from '../../components/blog/BlogSecondRow';
import BlogTop from '../../components/blog/BlogTop';
import { Container } from 'react-bootstrap';
import { useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import TopHead from '../../components/general/TopHead';

const InvestmentUpdates = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const { data, loading, error } = useFetch(`${process.env.REACT_APP_API_URL}/posts/get-all-posts`);

  return (
    <>
      <TopHead pageTitle="Real Estate Investments Updates" />
      <section className="learn">
        {data && (
          <Container>
            <div className="learn-bx">
              <h3>GTMPM Investments Updates</h3>
              <BlogTop
                learnItem1={data
                  .filter((post) => post.category === 'Investment Update')
                  .slice(0, 1)}
              />
              <BlogSecondRow
                learnSecondRowItems={data
                  .filter((post) => post.category === 'Investment Update')
                  .slice(1, 4)}
              />
              <BlogMain
                learnMainItems={data
                  .filter((post) => post.category === 'Investment Update')
                  .slice(4, 100)}
              />
            </div>
          </Container>
        )}
        {loading && <div style={{ color: 'red !important', fontSize: '25px' }}>Loading...</div>}
        {error && <div style={{ color: 'red !important', fontSize: '25px' }}>{error}</div>}
      </section>
      <FooterContact />
    </>
  );
};

export default InvestmentUpdates;
