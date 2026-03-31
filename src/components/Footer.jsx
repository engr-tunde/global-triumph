import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube } from 'react-bootstrap-icons';
import logo from '../assets/img/logo.png';

import * as Icon from 'react-bootstrap-icons';

import { FloatingWhatsApp } from 'react-floating-whatsapp';

export const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="site-footer__top">
          <Container>
            <Row className="gy-5 site-footer__grid">
              <Col xs={12} lg={4} className="site-footer__brand">
                <Link to="/" className="site-footer__logo-link">
                  <img src={logo} alt="Global Triumph" className="site-footer__logo" />
                </Link>
                <p className="site-footer__tagline">
                  Real estate, structured investments, and mobility services—with transparency and
                  assets you can verify.
                </p>
              </Col>
              <Col xs={6} md={4} lg={2}>
                <h3 className="site-footer__heading">Company</h3>
                <nav className="site-footer__nav" aria-label="Company">
                  <Link to="/about">About Us</Link>
                  <Link to="/about#team">Our People</Link>
                  <Link to="/services">Services</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/gallery">Gallery</Link>
                  <Link to="/careers">Careers</Link>
                </nav>
              </Col>
              <Col xs={6} md={4} lg={2}>
                <h3 className="site-footer__heading">Invest</h3>
                <nav className="site-footer__nav" aria-label="Investments">
                  <Link to="/investments">Programs</Link>
                  <Link to="/shop">Property shop</Link>
                  <Link to="/visa-processing">Visa processing</Link>
                  <Link to="/visa-opportunities">Visa opportunities</Link>
                  <Link to="/signup">Get started</Link>
                </nav>
              </Col>
              <Col xs={6} md={4} lg={2}>
                <h3 className="site-footer__heading">Explore</h3>
                <nav className="site-footer__nav" aria-label="Explore">
                  <Link to="/industry-news">Industry news</Link>
                  <Link to="/investment-updates">Investment updates</Link>
                  <Link to="/learn">Learn</Link>
                  <Link to="/faq">FAQs</Link>
                  <Link to="/product-updates">Product updates</Link>
                </nav>
              </Col>
              <Col xs={6} md={4} lg={2}>
                <h3 className="site-footer__heading">Legal</h3>
                <nav className="site-footer__nav" aria-label="Legal">
                  <Link to="/privacy-policy">Privacy</Link>
                  <Link to="/terms-and-conditions">Terms</Link>
                  <Link to="/contact">Contact</Link>
                </nav>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="site-footer__bottom">
          <Container>
            <Row className="align-items-center gy-3 site-footer__bottom-inner">
              <Col xs={12} md="auto" className="text-center text-md-start">
                <p className="site-footer__copy">
                  © {new Date().getFullYear()} Global Triumph. All rights reserved.
                </p>
                <p className="site-footer__dev">
                  Crafted by{' '}
                  <a
                    href="https://jaflah.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site-footer__dev-link"
                  >
                    Jaflah Software
                  </a>
                </p>
              </Col>
              <Col xs={12} md="auto" className="ms-md-auto">
                <div className="site-footer__social" aria-label="Social links">
                  <a
                    href="https://www.twitter.com/globaltriumphng"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="site-footer__social-link site-footer__social-link--twitter"
                  >
                    <Twitter className="site-footer__social-ico" size={20} aria-hidden />
                  </a>
                  <a
                    href="https://www.youtube.com/@globaltriumphng"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="site-footer__social-link site-footer__social-link--youtube"
                  >
                    <Youtube className="site-footer__social-ico" size={22} aria-hidden />
                  </a>
                  <a
                    href="https://www.facebook.com/globaltriumphng"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="site-footer__social-link site-footer__social-link--facebook"
                  >
                    <Facebook className="site-footer__social-ico" size={20} aria-hidden />
                  </a>
                  <a
                    href="https://www.instagram.com/globaltriumphng"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="site-footer__social-link site-footer__social-link--instagram"
                  >
                    <Instagram className="site-footer__social-ico" size={20} aria-hidden />
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <button
          type="button"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }}
          className="scroll-top"
          aria-label="Back to top"
        >
          <Icon.ArrowUpCircle size={24} className="scroll-top__ico" aria-hidden />
        </button>

        <FloatingWhatsApp
          phoneNumber="2349030096229"
          accountName="Global Triumph"
          notification={true}
          avatar={logo}
          lowClickAway
          darkMode={false}
          statusMessage="Replies instantly"
          buttonClassName="chat-icon"
        />
      </footer>
    </>
  );
};
