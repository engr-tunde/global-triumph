import { Container, Row, Col } from 'react-bootstrap';

const InvestmentsFooter = () => {
  return (
    <section className="inv-footer-note">
      <Container>
        <Row>
          <Col lg={10} className="mx-auto">
            <div className="inv-footer-note__card">
              <p>
                We also offer a special allocation where investors providing{' '}
                <span className="inv-footer-note__hl">
                  One Billion, Three Hundred Million Naira (₦1,300,000,000)
                </span>{' '}
                may receive{' '}
                <span className="inv-footer-note__hl">fifty (50) plots</span> in a choice, fast-growing
                part of Lekki. Comparable plots in the corridor can trade between{' '}
                <span className="inv-footer-note__hl">₦25 million</span> and{' '}
                <span className="inv-footer-note__hl">over ₦50 million</span> depending on factors our
                land satisfies.
              </p>
              <p>
                That implies entry near <span className="inv-footer-note__hl">₦18 million</span> per plot
                with significant upside potential—subject to diligence, documentation, and agreed
                terms.
              </p>
              <p>
                We welcome detailed conversations, inspections, and verification of documents. Thank you
                for considering an investment in our projects.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default InvestmentsFooter;
