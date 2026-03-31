import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ArrowRight, PeopleFill } from 'react-bootstrap-icons';
import TeamCard from './TeamCard';
import { useInViewReveal } from '../../hooks/useInViewReveal';

const TeamSection = () => {
  const [ref, visible] = useInViewReveal({ rootMargin: '0px 0px -6% 0px', threshold: 0.05 });

  return (
    <section
      ref={ref}
      className={`team-landing home-section-fade ${visible ? 'home-section-fade--visible' : ''} ${visible ? 'team-landing--inview' : ''}`}
      aria-labelledby="team-landing-heading"
    >
      <Container>
        <Row>
          <Col>
            <div className="team-landing__shell">
              <header className={`team-landing__header reveal ${visible ? 'reveal--visible' : ''}`}>
                <p className="team-landing__eyebrow">
                  <PeopleFill className="team-landing__eyebrow-ico" aria-hidden />
                  People
                </p>
                <h2 id="team-landing-heading" className="team-landing__title">
                  The team
                </h2>
                <p className="team-landing__lead">
                  Meet the experts guiding strategy, partnerships, and client success across every
                  touchpoint.
                </p>
              </header>
              <TeamCard inView={visible} />
              <div className="team-landing__footer">
                <Link to="/about#team" className="team-landing__btn">
                  <span>View full team</span>
                  <ArrowRight className="team-landing__btn-ico" aria-hidden />
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TeamSection;
