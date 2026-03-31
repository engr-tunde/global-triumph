import { Container, Row, Col } from 'react-bootstrap';
import { GeoAlt, ShieldCheck } from 'react-bootstrap-icons';
import invHeroPhoto from '../../assets/img/landing/why-choose-editorial.jpg';

const InvestmentsHeader = () => {
  return (
    <section className="inv-hero inv-hero--top">
      <Container>
        <Row className="align-items-center g-4 g-lg-5">
          <Col lg={7}>
            <p className="inv-hero__eyebrow">Why invest with us</p>
            <h1 className="inv-hero__title">Programs built for clarity &amp; returns</h1>
            <p className="inv-hero__lead">
              Investors want security and reasonable yield windows. Global Triumph Market Plus
              Multiconcept aligns partner outcomes with disciplined project selection—because your
              success reinforces ours.
            </p>
            <ul className="inv-hero__bullets">
              <li>
                <ShieldCheck aria-hidden />
                Structured documentation and verifiable assets
              </li>
              <li>
                <GeoAlt aria-hidden />
                Corridors with strong growth narratives across Lekki &amp; Epe
              </li>
            </ul>
          </Col>
          <Col lg={5}>
            <div className="inv-hero__figure">
              <div className="inv-hero__figure-inner">
                <img src={invHeroPhoto} alt="" loading="lazy" />
              </div>
              <div className="inv-hero__figure-panel" aria-hidden="true">
                <span className="inv-hero__figure-line" />
                <p className="inv-hero__figure-tag">Growth corridors</p>
              </div>
            </div>
            <div className="inv-hero__panel">
              <p>
                Locations and project characteristics point to prospects where investors can expect
                meaningful returns within defined horizons—from Sangotedo and Ibeju Lekki to Epe and
                surrounding growth zones.
              </p>
              <p>
                Landmarks such as retail anchors, proposed infrastructure, and industrial clusters
                strengthen marketability—supporting both lifestyle demand and long-term appreciation.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default InvestmentsHeader;
