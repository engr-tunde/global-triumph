import { Col, Container, Row } from 'react-bootstrap';
import aboutHero from '../../assets/img/landing/invest-hero-house.jpg';

const Main = () => {
  return (
    <section className="about-main">
      <Container>
        <header className="about-main__header">
          <p className="about-main__eyebrow">Who we are</p>
          <h1 className="about-main__title">About Global Triumph</h1>
        </header>
        <Row className="g-4 g-lg-5 align-items-center about-main__grid">
          <Col lg={6}>
            <div className="about-main__copy">
              <p>
                Global Triumph Market Plus Multiconcept (G.T.M.P.M) Reg. Num: RC: 1665631 is a highly
                reputable real estate company in Nigeria. Our office is at 26, Omolara Olusi Street,
                Hopville Estate, opposite SBI Hotel, Sangotedo Road, Ajah, Lagos.
              </p>
              <p>
                Incorporated in Nigeria in 2014, we hold a certificate from SCRUM Academy for Realtors.
              </p>
              <p>
                Since registration, we have attracted distinguished clients locally and internationally—a
                testament to consistency and service delivery.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="about-main__visual">
              <div className="about-main__visual-frame">
                <img
                  src={aboutHero}
                  alt="Modern residential development and landscaping"
                  loading="lazy"
                />
              </div>
              <span className="about-main__visual-accent" aria-hidden="true" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Main;
