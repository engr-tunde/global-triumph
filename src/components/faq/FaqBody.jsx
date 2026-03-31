import { Accordion, Container, Row } from 'react-bootstrap';
import useFetch from '../../hooks/useFetch';

const FaqBody = () => {
  const { data, loading, error } = useFetch(`${process.env.REACT_APP_API_URL}/faqs/get-faqs`);

  return (
    <section className="faq-main">
      <Container>
        <Row className="faq-main__inner">
          {loading && <p className="faq-main__state">Loading…</p>}
          {error && (
            <p className="faq-main__state faq-main__state--err" role="alert">
              {error}
            </p>
          )}
          {data && data.length > 0 && (
            <Accordion defaultActiveKey="0" flush className="faq-accordion">
              {data.map((faq, index) => (
                <Accordion.Item
                  eventKey={String(index)}
                  key={faq.id ?? index}
                  className="faq-accordion__item"
                >
                  <Accordion.Header className="faq-accordion__header">
                    {faq.question}
                  </Accordion.Header>
                  <Accordion.Body className="faq-accordion__body">{faq.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default FaqBody;
