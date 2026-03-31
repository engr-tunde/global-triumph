import { Container, Row, Col } from 'react-bootstrap';
import achievementsImg from '../../assets/img/landing/why-choose-editorial.jpg';

const Achivements = () => {
  return (
    <section className="about-achievements">
      <Container>
        <Row className="g-4 g-lg-5 align-items-center about-achievements__row">
          <Col xs={12} lg={5}>
            <div className="about-achievements__copy">
              <h2 className="about-achievements__title">Our achievements</h2>
              <p>
                At GTMPM, our consistency is second to none as we have featured in the market,
                delivered professional services and still delivering, both to local and international
                clients. For instance, we have sold private buildings, hotels, and business apartments
                in Dubai, France and Belgium, and locally; handled building projects, sold lands and
                offered related services in the major cities in Nigeria like Lagos, Abuja, Benin, and
                Ibadan, etc.
              </p>
              <p>
                We have also rendered services on visa issuances for students, families and workers to
                countries like USA, UAE, France, Italy, Germany, Belgium, South Africa, etc.
              </p>
            </div>
          </Col>
          <Col xs={12} lg={7}>
            <div className="about-achievements__media">
              <img
                src={achievementsImg}
                alt="City skyline representing global reach"
                loading="lazy"
              />
              <div className="about-achievements__media-caption" aria-hidden="true">
                <span>Global reach</span>
                <span>Local execution</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Achivements;
