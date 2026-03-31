import { Container, Col, Row } from 'react-bootstrap';

const PageHeader = ({ title, subtitle, headerImage }) => {
  return (
    <section className="page-header">
      <Container fluid className="page-header__fluid">
        <Row className="page-header__grid align-items-center">
          <Col xs={12} lg={7} className="page-header__copy">
            <p className="page-header__eyebrow">Global Triumph</p>
            <h1 className="page-header__title">{title}</h1>
            {subtitle ? <p className="page-header__subtitle">{subtitle}</p> : null}
          </Col>
          <Col xs={12} lg={5} className="page-header__visual-wrap">
            <div className="page-header__visual">
              <img
                src={headerImage}
                alt=""
                className="page-header__img"
                loading="eager"
              />
              <span className="page-header__blob" aria-hidden="true" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PageHeader;
