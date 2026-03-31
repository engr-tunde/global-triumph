import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ArrowRight, Buildings } from 'react-bootstrap-icons';
import loader from '../../assets/img/loader.gif';
import ProjectCard from './ProjectCard';
import useFetch from '../../hooks/useFetch';
import { useInViewReveal } from '../../hooks/useInViewReveal';

const ProJectsSection = () => {
  const { data, loading, error } = useFetch(
    `${process.env.REACT_APP_API_URL}/projects/get-all-projects`
  );
  const [ref, visible] = useInViewReveal({ rootMargin: '0px 0px -6% 0px', threshold: 0.05 });

  return (
    <section
      ref={ref}
      className={`feat-projects home-section-fade ${visible ? 'home-section-fade--visible' : ''} ${visible ? 'feat-projects--inview' : ''}`}
      aria-labelledby="feat-projects-heading"
    >
      <div className="feat-projects__bg" aria-hidden="true" />
      <Container>
        <header className={`feat-projects__header reveal ${visible ? 'reveal--visible' : ''}`}>
          <p className="feat-projects__eyebrow">
            <Buildings className="feat-projects__eyebrow-ico" aria-hidden />
            Portfolio
          </p>
          <h2 id="feat-projects-heading" className="feat-projects__title">
            Featured portfolio
          </h2>
          <p className="feat-projects__lead">
            A snapshot of developments we&apos;re proud to stand behind—explore the full portfolio
            anytime.
          </p>
        </header>

        <Row className="feat-projects__row g-4">
          {data &&
            data.slice(0, 3).map((project, index) => (
              <ProjectCard key={project.projectID || index} {...project} index={index} />
            ))}
        </Row>

        {loading && (
          <div className="feat-projects__state">
            <img src={loader} alt="Loading" />
          </div>
        )}
        {error && (
          <div className="feat-projects__state feat-projects__state--err" role="alert">
            {error}
          </div>
        )}

        <div className="feat-projects__footer">
          <Link to="/projects" className="feat-projects__btn">
            <span>View all projects</span>
            <ArrowRight className="feat-projects__btn-ico" aria-hidden />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default ProJectsSection;
