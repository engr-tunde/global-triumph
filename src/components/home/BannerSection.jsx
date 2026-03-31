import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  ChatDots,
  GeoAlt,
  GraphUpArrow,
  ShieldCheck,
  Shop,
} from 'react-bootstrap-icons';
import vidBg from '../../assets/img/vid-bg.mp4';
import heroStill from '../../assets/img/landing/invest-hero-house.jpg';
import { useInViewReveal } from '../../hooks/useInViewReveal';

const BannerSection = () => {
  const [heroRef, heroVisible] = useInViewReveal({ rootMargin: '0px 0px 12% 0px', threshold: 0.08 });

  return (
    <section
      ref={heroRef}
      className={`hero hero--cinema home-section-fade ${heroVisible ? 'home-section-fade--visible' : ''}`}
      id="home"
      aria-labelledby="hero-heading"
    >
      <div className="hero__ambient" aria-hidden="true">
        <span className="hero__blob hero__blob--a" />
        <span className="hero__blob hero__blob--b" />
        <span className="hero__blob hero__blob--c" />
      </div>

      <div className="hero__media" aria-hidden="true">
        <video
          className="hero__video"
          muted
          autoPlay
          loop
          playsInline
          src={vidBg}
        />
        <div className="hero__overlay" />
        <div className="hero__mesh" />
        <div className="hero__grain" />
        <div className="hero__vignette" />
        <div className="hero__shimmer" />
      </div>

      <Container fluid className="hero__container">
        <Row className="hero__row align-items-center">
          <Col xs={12} xl={6} className="hero__col hero__col--copy">
            <div className="hero__content">
              <p className="hero__eyebrow">
                <span className="hero__eyebrow-dot" aria-hidden="true" />
                Global Triumph Market Plus Multiconcept
              </p>

              <h1 id="hero-heading" className="hero__title">
                <span className="hero__title-line">Property, portfolios,</span>
                <span className="hero__title-line hero__title-line--shine">
                  clarity you can build on
                </span>
              </h1>

              <p className="hero__lead">
                Structured real estate, investments, and mobility services—with transparent
                processes and tangible assets you can verify.
              </p>

              <div className="hero__actions">
                <Link to="/investments" className="hero__btn hero__btn--primary">
                  <GraphUpArrow className="hero__btn-ico" aria-hidden />
                  <span>Explore investments</span>
                  <ArrowRight className="hero__btn-arrow" aria-hidden />
                </Link>
                <Link to="/shop" className="hero__btn hero__btn--secondary">
                  <Shop className="hero__btn-ico" aria-hidden />
                  <span>Browse listings</span>
                  <ArrowRight className="hero__btn-arrow" aria-hidden />
                </Link>
              </div>

              <div className="hero__trust" aria-label="Highlights">
                <div className="hero__trust-item">
                  <ShieldCheck className="hero__trust-ico" aria-hidden />
                  <span>Verified assets</span>
                </div>
                <div className="hero__trust-item">
                  <GeoAlt className="hero__trust-ico" aria-hidden />
                  <span>Prime corridors</span>
                </div>
                <div className="hero__trust-item">
                  <Award className="hero__trust-ico" aria-hidden />
                  <span>Since 2014</span>
                </div>
              </div>

              <p className="hero__footnote">
                <Link to="/contact" className="hero__footnote-link">
                  <ChatDots className="hero__footnote-ico" aria-hidden />
                  Talk to our team
                </Link>
              </p>
            </div>
          </Col>

          <Col xs={12} xl={6} className="hero__col hero__col--showcase">
            <div className="hero__showcase">
              <div className="hero__frame">
                <div className="hero__frame-inner">
                  <img
                    className="hero__frame-img"
                    src={heroStill}
                    alt=""
                    loading="eager"
                  />
                </div>
                <div className="hero__frame-ring" aria-hidden="true" />
                <p className="hero__frame-badge">
                  <span>Live portfolio</span>
                  <strong>Curated</strong>
                </p>
              </div>

              <div className="hero__float hero__float--a">
                <span className="hero__float-label">ROI focus</span>
                <span className="hero__float-value">Structured</span>
              </div>
              <div className="hero__float hero__float--b">
                <span className="hero__float-label">Process</span>
                <span className="hero__float-value">Transparent</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="hero__bottom" aria-hidden="true">
        <svg
          className="hero__wave"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="heroWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.08" />
              <stop offset="50%" stopColor="#aef5c5" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.08" />
            </linearGradient>
            <linearGradient id="heroWaveGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#aef5c5" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            fill="url(#heroWaveGrad)"
            d="M0,64 C360,120 720,0 1080,48 C1260,72 1380,56 1440,48 L1440,120 L0,120 Z"
          />
          <path
            fill="url(#heroWaveGrad2)"
            d="M0,80 C320,32 640,112 960,56 C1120,32 1280,40 1440,72 L1440,120 L0,120 Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default BannerSection;
