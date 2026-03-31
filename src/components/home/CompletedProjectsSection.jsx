import { useMemo } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy } from 'react-bootstrap-icons';
import loader from '../../assets/img/loader.gif';
import CompletedProjectCard from './CompletedProjectCard';
import useFetch from '../../hooks/useFetch';
import { useInViewReveal } from '../../hooks/useInViewReveal';

const MAX_COMPLETED = 6;

const CompletedProjectsSection = () => {
  const { data, loading, error } = useFetch(
    `${process.env.REACT_APP_API_URL}/projects/get-all-projects`
  );
  const [ref, visible] = useInViewReveal({ rootMargin: '0px 0px -6% 0px', threshold: 0.05 });

  const completed = useMemo(() => {
    if (!data?.length) return [];
    return data.filter((p) => p.status === 'Completed');
  }, [data]);

  const display = useMemo(() => completed.slice(0, MAX_COMPLETED), [completed]);

  if (!loading && !error && completed.length === 0) {
    return null;
  }

  return (
    <section
      ref={ref}
      className={`comp-portfolio home-section-fade ${visible ? 'home-section-fade--visible' : ''} ${visible ? 'comp-portfolio--inview' : ''}`}
      aria-labelledby="comp-portfolio-heading"
    >
      <div className="comp-portfolio__bg" aria-hidden="true">
        <span className="comp-portfolio__mesh" />
        <span className="comp-portfolio__sweep" />
        <span className="comp-portfolio__glow comp-portfolio__glow--a" />
        <span className="comp-portfolio__glow comp-portfolio__glow--b" />
      </div>

      <Container className="comp-portfolio__container">
        <Row className="comp-portfolio__head-row align-items-end g-4 g-lg-5">
          <Col lg={7}>
            <span className="comp-portfolio__watermark" aria-hidden="true">
              Done
            </span>
            <header className={`comp-portfolio__header reveal ${visible ? 'reveal--visible' : ''}`}>
              <p className="comp-portfolio__eyebrow">
                <Trophy className="comp-portfolio__eyebrow-ico" aria-hidden />
                Track record
              </p>
              <h2 id="comp-portfolio-heading" className="comp-portfolio__title">
                Completed projects
              </h2>
              <p className="comp-portfolio__lead">
                Finished developments with documented outcomes—each one a reference you can verify
                end to end.
              </p>
            </header>
          </Col>
          <Col lg={5} className="comp-portfolio__head-aside">
            <div className={`comp-portfolio__aside-card reveal ${visible ? 'reveal--visible' : ''}`}>
              <p className="comp-portfolio__aside-stat">{completed.length}</p>
              <p className="comp-portfolio__aside-label">completed in portfolio</p>
              <div className="comp-portfolio__aside-bar" aria-hidden="true" />
            </div>
          </Col>
        </Row>

        {loading && (
          <div className="comp-portfolio__state">
            <img src={loader} alt="Loading" />
          </div>
        )}
        {error && (
          <div className="comp-portfolio__state comp-portfolio__state--err" role="alert">
            {error}
          </div>
        )}

        {!loading && !error && display.length > 0 && (
          <Row className="comp-portfolio__row g-4 g-xl-4">
            {display.map((project, index) => (
              <CompletedProjectCard
                key={project.projectID ?? project.id ?? index}
                {...project}
                index={index}
                featured={index === 0}
              />
            ))}
          </Row>
        )}

        {!loading && !error && completed.length > 0 && (
          <div className="comp-portfolio__footer">
            <Link to="/projects" className="comp-portfolio__btn">
              <span>Full project archive</span>
              <ArrowRight className="comp-portfolio__btn-ico" aria-hidden />
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
};

export default CompletedProjectsSection;
