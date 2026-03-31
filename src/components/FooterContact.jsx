import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ArrowRight, Headset } from 'react-bootstrap-icons';
import supportIcon from '../assets/img/footer-contact.svg';
import { useInViewReveal } from '../hooks/useInViewReveal';

export const FooterContact = () => {
  const [ref, visible] = useInViewReveal({ rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

  return (
    <div
      ref={ref}
      className={`footer-cta footer-contact home-section-fade ${visible ? 'home-section-fade--visible' : ''} ${visible ? 'footer-cta--inview' : ''}`}
    >
      <Container>
        <Row className="footer-cta__inner footer-contact-inner align-items-center g-4">
          <Col lg={7}>
            <p className="footer-cta__eyebrow">We are here for you</p>
            <h3 className="footer-cta__title">Support when you need it</h3>
            <p className="footer-cta__text">
              Prompt answers matter. Our team is ready to help with listings, investments, and
              general enquiries.
            </p>
            <Link to="/contact" className="footer-cta__btn">
              <Headset className="footer-cta__btn-ico" aria-hidden />
              <span>Contact us</span>
              <ArrowRight className="footer-cta__arrow" aria-hidden />
            </Link>
          </Col>
          <Col lg={5} className="text-center text-lg-end">
            <div className={`footer-cta__art reveal ${visible ? 'reveal--visible' : ''}`}>
              <img src={supportIcon} alt="" className="footer-cta__img" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterContact;
