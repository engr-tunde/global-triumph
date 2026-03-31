import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Building,
  Compass,
  Globe2,
  PatchCheck,
} from 'react-bootstrap-icons';
import servicesArtHero from '../../assets/img/landing/services-art-hero.jpg';
import svc01 from '../../assets/img/landing/services/svc-01-buy-sell.jpg';
import svc02 from '../../assets/img/landing/services/svc-02-consultant.jpg';
import svc03 from '../../assets/img/landing/services/svc-03-development.jpg';
import svc04 from '../../assets/img/landing/services/svc-04-management.jpg';
import svc05 from '../../assets/img/landing/services/svc-05-cctv-decor.jpg';
import svc06 from '../../assets/img/landing/services/svc-06-marketing.jpg';
import svc07 from '../../assets/img/landing/services/svc-07-visa.jpg';
import { useInViewReveal } from '../../hooks/useInViewReveal';

const SERVICES = [
  { img: svc01, label: 'Buying and selling of properties', tag: 'Transactions', accent: 'hero' },
  { img: svc02, label: 'Property consultant', tag: 'Advisory', accent: '' },
  { img: svc03, label: 'Real estate development', tag: 'Build', accent: '' },
  { img: svc04, label: 'Professional management of properties for clients', tag: 'Operations', accent: 'tall' },
  { img: svc05, label: 'CCTV installation & interior décor', tag: 'Lifestyle', accent: '' },
  { img: svc06, label: 'Marketing of company products', tag: 'Growth', accent: 'wide' },
  { img: svc07, label: 'Visa services', tag: 'Mobility', accent: '' },
];

const ServicesSection = () => {
  const [ref, visible] = useInViewReveal({ rootMargin: '0px 0px -8% 0px', threshold: 0.06 });

  return (
    <section
      ref={ref}
      className={`svc-showcase home-section-fade ${visible ? 'home-section-fade--visible' : ''} ${visible ? 'svc-showcase--inview' : ''}`}
      id="services"
      aria-labelledby="svc-heading"
    >
      <div className="svc-showcase__bg" aria-hidden="true">
        <span className="svc-showcase__mesh" />
        <span className="svc-showcase__blob svc-showcase__blob--a" />
        <span className="svc-showcase__blob svc-showcase__blob--b" />
        <span className="svc-showcase__arc" />
      </div>
      <Container>
        <header className={`svc-showcase__header reveal ${visible ? 'reveal--visible' : ''}`}>
          <p className="svc-showcase__eyebrow">
            <Building className="svc-showcase__eyebrow-ico" aria-hidden />
            What we do
          </p>
          <h2 id="svc-heading" className="svc-showcase__title">
            One partner across property, capital, and mobility
          </h2>
          <p className="svc-showcase__lead">
            From acquisitions and development to décor, marketing, and visa support—we align every
            service under one disciplined team so you are never handed off into the unknown.
          </p>
        </header>

        <div className={`svc-showcase__metrics ${visible ? 'svc-showcase__metrics--inview' : ''}`}>
          <div className="svc-showcase__metric">
            <PatchCheck className="svc-showcase__metric-ico" aria-hidden />
            <div>
              <strong>7</strong>
              <span>Integrated capabilities</span>
            </div>
          </div>
          <div className="svc-showcase__metric">
            <Compass className="svc-showcase__metric-ico" aria-hidden />
            <div>
              <strong>360°</strong>
              <span>Guidance end to end</span>
            </div>
          </div>
          <div className="svc-showcase__metric">
            <Globe2 className="svc-showcase__metric-ico" aria-hidden />
            <div>
              <strong>Local &amp; global</strong>
              <span>Execution you can verify</span>
            </div>
          </div>
        </div>

        <Row className="svc-showcase__row align-items-stretch g-4 g-xl-5">
          <Col lg={5} xl={4}>
            <div className={`svc-showcase__art ${visible ? 'svc-showcase__art--inview' : ''}`}>
              <img
                src={servicesArtHero}
                alt="Contemporary architecture and planning"
                className="svc-showcase__art-img"
              />
              <div className="svc-showcase__art-ring" aria-hidden="true" />
              <div className="svc-showcase__art-quote" aria-hidden="true">
                <span className="svc-showcase__art-quote-mark">“</span>
                <p>
                  We build relationships, not just spreadsheets—every mandate gets clear ownership
                  and follow-through.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={7} xl={8}>
            <ul className="svc-bento">
              {SERVICES.map((s, i) => (
                <li
                  key={`svc-${s.label}`}
                  className={`svc-bento__cell${s.accent ? ` svc-bento__cell--${s.accent}` : ''}`}
                  style={{ '--svc-i': i }}
                >
                  <span className="svc-bento__media" aria-hidden="true">
                    <img src={s.img} alt="" loading="lazy" />
                    <span className="svc-bento__media-shade" />
                  </span>
                  <span className="svc-bento__tag">{s.tag}</span>
                  <span className="svc-bento__idx" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="svc-bento__text">{s.label}</span>
                </li>
              ))}
            </ul>
            <div className="svc-showcase__cta">
              <Link to="/services" className="svc-showcase__link">
                <span>Explore every service in detail</span>
                <ArrowRight className="svc-showcase__link-ico" aria-hidden />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServicesSection;
