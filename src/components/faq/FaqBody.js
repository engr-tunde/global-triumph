import { Accordion , Container, Row } from "react-bootstrap";
import useFetch from "../../hooks/useFetch";

const FaqBody = () => {

    const {data, loading, error} = useFetch(`${process.env.REACT_APP_API_URL}/faqs/get-faqs`);

    return (
        <section className="faq-main">
            <Container>
                <Row className="main-container">
                    <Accordion defaultActiveKey="1">
                        {data && 
                            data.map((faq) => (

                                <Accordion.Item eventKey={faq.id} >
                                    <Accordion.Header>{faq.question}</Accordion.Header>
                                    <Accordion.Body>{faq.answer}</Accordion.Body>
                                </Accordion.Item>
                            ))
                        }
                        {loading && <div style={{color:"red !important", fontSize:"30px"}}>Loading...</div>}
                        {error && <div style={{color:"red !important", fontSize:"30px"}}>{error}</div>}
                    </Accordion>
                </Row>
            </Container>
        </section>
    );
}
 
export default FaqBody
