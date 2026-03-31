import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import twitter from '../assets/img/twitter.png';
import facebook from '../assets/img/nav-icon2.svg';
import instagram from '../assets/img/nav-icon3.svg';
import youtube from '../assets/img/yt.png';

import * as Icon from 'react-bootstrap-icons';
import { useEffect } from 'react';

import { FloatingWhatsApp } from 'react-floating-whatsapp';

export const Footer = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <footer className="footer">
        <Container>
          <Row className="">
            <Col xs={6} lg={3}>
              <h3>Company</h3>
              <div className="company-links">
                <Link to="/about">About Us</Link>
                <Link to="/about#team">Our People</Link>
                <Link to="/services">Our Services</Link>
                <Link to="/projects">Our Projects</Link>
                <Link to="/gallery">Our Gallery</Link>
                <Link to="/careers">Careers</Link>
              </div>
            </Col>
            <Col xs={6} lg={3}>
              <h3>Investments & More</h3>
              <div className="company-links">
                <Link to="/investments">Investment Packages</Link>
                <Link to="/shop">Our Shop</Link>
                <Link to="/visa-processing">Visa Processing</Link>
                <Link to="/visa-opportunities">Visa Opportunities</Link>
                <Link to="/signup">Get Started</Link>
              </div>
            </Col>
            <Col xs={6} lg={3}>
              <h3 className="link-header">Explore</h3>
              <div className="company-links">
                <Link to="/industry-news">Real Estate News</Link>
                <Link to="/investment-updates">Investment Updates</Link>
                <Link to="/learn">Learn</Link>
                <Link to="/faq">FAQs</Link>
                <Link to="/product-updates">Product Updates</Link>
              </div>
            </Col>
            <Col xs={6} lg={3}>
              <h3 className="link-header">Legal & Help</h3>
              <div className="company-links">
                <Link to="/privacy-policy">Privacy Policy</Link>
                <Link to="/terms-and-conditions">Terms & Conditions</Link>
                <Link to="/terms-and-conditions">Investment Terms</Link>
                <Link to="/contact">Help Center</Link>
                <Link to="/contact">Contact Us</Link>
              </div>
            </Col>
          </Row>
          <Row className="text-center">
            <center>
              <div className="footer-line" />
            </center>
            <div className="company-name">
              <Link to="/">
                <img src={logo} alt=""></img>
              </Link>
              <h3>GLOBAL TRIUMPH</h3>
            </div>
            <p>Copyright &copy; 2023, Global Triumph. All rights reserved</p>
            <div className="social-icon">
              <Link to="https://www.twitter.com/globaltriumphng">
                <img src={twitter} alt=""></img>
              </Link>
              <Link to="https://www.youtube.com/@globaltriumphng">
                <img src={youtube} alt=""></img>
              </Link>
              <Link to="https://www.facebook.com/globaltriumphng">
                <img src={facebook} alt=""></img>
              </Link>
              <Link to="https://www.instagram.com/globaltriumphng">
                <img src={instagram} alt=""></img>
              </Link>
            </div>
          </Row>
        </Container>

        <button
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }}
          style={{}}
          className="scroll-top"
        >
          <Icon.ArrowUpCircle size={24} color="#000" />
        </button>

        <FloatingWhatsApp
          phoneNumber="2349030096229"
          accountName="Global Triumph"
          notification={true}
          avatar={logo}
          lowClickAway
          darkMode
          statusMessage="Replies instantly"
          buttonClassName="chat-icon"
        />
      </footer>
    </>
  );
};
