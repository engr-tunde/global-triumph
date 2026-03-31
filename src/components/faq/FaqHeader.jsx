import { Container, Row, Col } from 'react-bootstrap';
import headerImage from '../../assets/img/faq-icon-1.svg';

const FaqHeader = () => {
  return (
    <section className="faq-hero">
      <Container>
        <Row className="align-items-center g-4">
          <Col lg={7}>
            <p className="faq-hero__eyebrow">
              Resources <span className="faq-hero__slash">/</span> FAQs
            </p>
            <h1 className="faq-hero__title">Frequently asked questions</h1>
            <p className="faq-hero__lead">
              Straight answers on investments, property, accounts, and how we work—so you can move
              forward with confidence.
            </p>
          </Col>
          <Col lg={5} className="text-center">
            <img src={headerImage} alt="" className="faq-hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FaqHeader;
