import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  Building,
  CheckCircle,
  GraphUpArrow,
  People,
  ShieldCheck,
} from 'react-bootstrap-icons';
import logo from '../../assets/img/logo.png';
import imgInvestor from '../../assets/img/auth/auth-investor-hero.jpg';
import imgMarketer from '../../assets/img/auth/auth-marketer-hero.jpg';
import imgSecurity from '../../assets/img/auth/auth-security-hero.jpg';

const HERO = {
  investor: {
    src: imgInvestor,
    chips: [
      { Icon: Building, text: 'Verified developments' },
      { Icon: GraphUpArrow, text: 'Structured investments' },
      { Icon: ShieldCheck, text: 'Secure access' },
    ],
  },
  marketer: {
    src: imgMarketer,
    chips: [
      { Icon: People, text: 'Partner network' },
      { Icon: GraphUpArrow, text: 'Track commissions' },
      { Icon: ShieldCheck, text: 'Trusted platform' },
    ],
  },
  security: {
    src: imgSecurity,
    chips: [
      { Icon: ShieldCheck, text: 'Encrypted sessions' },
      { Icon: CheckCircle, text: 'Account protection' },
      { Icon: Building, text: 'Global Triumph' },
    ],
  },
};

/**
 * Full-bleed auth shell: photographic hero (lg+) + glass-style form column.
 * @param {'investor'|'marketer'|'security'} variant — selects hero image & accents
 */
export function AuthLayout({
  variant = 'investor',
  eyebrow,
  heroTitle,
  heroSubtitle,
  formTitle,
  formSubtitle,
  children,
}) {
  const hero = HERO[variant] || HERO.investor;

  return (
    <section className="auth-view">
      <Container fluid className="auth-view__fluid px-0">
        <Row className="g-0 auth-view__row">
          <Col lg={6} xl={7} className="auth-view__visual d-none d-lg-block">
            <div
              className="auth-view__visual-bg"
              style={{ backgroundImage: `url(${hero.src})` }}
              role="img"
              aria-label=""
            />
            <div className="auth-view__visual-scrim" aria-hidden="true" />
            <div className="auth-view__visual-noise" aria-hidden="true" />
            <div className="auth-view__visual-inner">
              <Link to="/" className="auth-view__logo">
                <img src={logo} alt="Global Triumph" />
              </Link>
              {eyebrow ? <p className="auth-view__eyebrow">{eyebrow}</p> : null}
              {heroTitle ? <h1 className="auth-view__title">{heroTitle}</h1> : null}
              {heroSubtitle ? <p className="auth-view__lead">{heroSubtitle}</p> : null}
              <ul className="auth-view__chips" aria-label="Highlights">
                {hero.chips.map((chip) => {
                  const ChipIcon = chip.Icon;
                  return (
                    <li key={chip.text} className="auth-view__chip">
                      <ChipIcon className="auth-view__chip-ico" aria-hidden />
                      <span>{chip.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Col>

          <Col xs={12} lg={6} xl={5} className="auth-view__panel">
            <div className="auth-view__panel-bg" aria-hidden="true" />
            <div className="auth-view__panel-inner">
              <div className="auth-view__mobile-hero d-lg-none">
                <div
                  className="auth-view__mobile-bg"
                  style={{ backgroundImage: `url(${hero.src})` }}
                />
                <div className="auth-view__mobile-scrim" />
                <Link to="/" className="auth-view__mobile-logo">
                  <img src={logo} alt="Global Triumph" />
                </Link>
              </div>

              <div className="auth-card">
                {formTitle ? <h2 className="auth-card__title">{formTitle}</h2> : null}
                {formSubtitle ? <p className="auth-card__subtitle">{formSubtitle}</p> : null}
                {children}
              </div>

              <p className="auth-view__fineprint">
                Protected connection ·{' '}
                <Link to="/privacy-policy">Privacy</Link>
                {' · '}
                <Link to="/contact">Help</Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AuthLayout;
