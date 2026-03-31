import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Building,
  CashCoin,
  CheckCircle,
  Headset,
  Passport,
  Speedometer2,
} from 'react-bootstrap-icons';
import whyEditorial from '../../assets/img/landing/why-choose-editorial.jpg';
import { useInViewReveal } from '../../hooks/useInViewReveal';

const CHOICE_ITEMS = [
  {
    icon: CashCoin,
    title: 'Easy opt-in',
    text: 'Straightforward onboarding so you can start investing without friction.',
  },
  {
    icon: Speedometer2,
    title: 'Growth you can track',
    text: 'Clear visibility into how your investments perform over time.',
  },
  {
    icon: Building,
    title: 'Physical projects',
    text: 'Backed by real assets and on-the-ground developments you can trust.',
  },
  {
    icon: CheckCircle,
    title: 'Realistic returns',
    text: 'Strategies built for sustainable profit—not empty promises.',
  },
  {
    icon: Passport,
    title: 'Visa support',
    text: 'Dedicated visa processing services when your plans cross borders.',
  },
  {
    icon: Headset,
    title: 'End-to-end guidance',
    text: 'A team beside you from first conversation to portfolio milestones.',
  },
];

const FeaturesSection = () => {
  const [whyRef, whyVisible] = useInViewReveal({ rootMargin: '0px 0px -5% 0px', threshold: 0.06 });

  return (
    <section
      ref={whyRef}
      className={`why-us home-section-fade ${whyVisible ? 'home-section-fade--visible' : ''} ${whyVisible ? 'why-us--inview' : ''}`}
      id="why-choose-us"
      aria-labelledby="why-us-heading"
    >
      <div className="why-us__bg" aria-hidden="true">
        <span className="why-us__glow why-us__glow--1" />
        <span className="why-us__glow why-us__glow--2" />
        <span className="why-us__diagonal" />
      </div>

      <Container className="why-us__container">
        <div className="why-us__head-wrap">
          <span className="why-us__watermark" aria-hidden="true">
            Why
          </span>
          <header className={`why-us__header reveal ${whyVisible ? 'reveal--visible' : ''} reveal-blur`}>
            <p className="why-us__eyebrow">Why choose us</p>
            <h2 id="why-us-heading" className="why-us__title">
              Built for investors who want clarity, not chaos
            </h2>
            <p className="why-us__subtitle">
              With Global Triumph, your money works for you—steady focus on returns, transparent
              processes, and real projects you can believe in.
            </p>
          </header>
        </div>

        <blockquote className={`why-us__manifesto reveal ${whyVisible ? 'reveal--visible' : ''}`}>
          <span className="why-us__manifesto-mark" aria-hidden="true">
            “
          </span>
          <p>
            We don&apos;t trade in hype—we anchor every offer in{' '}
            <strong>titles, land, and outcomes you can verify.</strong>
          </p>
        </blockquote>

        <Row className="why-us__layout g-4 g-lg-5 align-items-stretch">
          <Col lg={5} className="why-us__visual-col">
            <div className={`why-us__visual ${whyVisible ? 'why-us__visual--inview' : ''}`}>
              <div className="why-us__visual-stack">
                <div className="why-us__visual-frame">
                  <img
                    src={whyEditorial}
                    alt="Modern city skyline and professional environment"
                    loading="lazy"
                  />
                </div>
                <div className="why-us__visual-float" aria-hidden="true">
                  <span className="why-us__visual-float-ico">◆</span>
                  <span className="why-us__visual-float-txt">Asset-backed</span>
                </div>
              </div>
              <div className="why-us__visual-caption">
                <span className="why-us__visual-tag">Investment focus</span>
                <p className="why-us__visual-lead">Steady returns on investments</p>
                <p className="why-us__visual-copy">
                  We combine disciplined strategy with on-the-ground execution so your capital is put
                  to work responsibly.
                </p>
              </div>
            </div>
          </Col>

          <Col lg={7}>
            <ul className="why-us__grid">
              {CHOICE_ITEMS.map((item, index) => {
                const CardIcon = item.icon;
                const isFeature = index === 0;
                return (
                  <li
                    key={item.title}
                    className={`why-us__card ${isFeature ? 'why-us__card--feature' : ''} why-us__card--m${index % 3}`}
                    style={{ '--why-i': index }}
                  >
                    <span className="why-us__card-icon" aria-hidden="true">
                      <CardIcon />
                    </span>
                    <div className="why-us__card-body">
                      <h3 className="why-us__card-title">{item.title}</h3>
                      <p className="why-us__card-text">{item.text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className={`why-us__cta ${whyVisible ? 'why-us__cta--inview' : ''}`}>
              <Link to="/investments" className="why-us__cta-link">
                <span>Explore investment programs</span>
                <ArrowRight className="why-us__cta-arrow" aria-hidden />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FeaturesSection;
