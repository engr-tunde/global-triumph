import BlogContent from '../../components/blog/BlogContent';
import FooterContact from '../../components/FooterContact';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import VisaForm from '../../components/visa/VisaForm';
import TopHead from '../../components/general/TopHead';

const PostSingle = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const { postUrl } = useParams();

  const { data, loading, error } = useFetch(
    `${process.env.REACT_APP_API_URL}/posts/post/${postUrl}`
  );

  return (
    <>
      {data && (
        <>
          {data.message === "Doesn't Exist" ? (
            <Helmet>
              <meta charSet="utf-8" />
              <title>Real Estate News & Updates - Global Triumph Market Plus Multiconcept</title>
              <meta
                name="description"
                content="Learn about real estate investments on Global Triumph Market Plus Multiconcept - Real estate investments and properties, properties for sales"
              />
            </Helmet>
          ) : (
            <TopHead pageTitle={data.data.postTitle} />
          )}

          {data.message === "Doesn't Exist" ? (
            <section className="blog-content">
              <Container>
                <div className="inner">
                  <h3>The post you are trying to fetch no longer exists here.</h3>
                </div>
              </Container>
            </section>
          ) : (
            <BlogContent data={data.data} />
          )}

          {data.data.category === 'Visa Opportunity' ? <VisaForm /> : null}
        </>
      )}

      {loading && <div style={{ color: 'red !important', fontSize: '25px' }}>Loading...</div>}
      {error && <div style={{ color: 'red !important', fontSize: '25px' }}>{error}</div>}
      <FooterContact />
    </>
  );
};

export default PostSingle;
