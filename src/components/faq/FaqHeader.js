import { Container, Row, Col, Form, Button } from "react-bootstrap";
import headerImage from '../../assets/img/faq-icon-1.svg';

const FaqHeader = () => {
    return (
        <section className="faq-header">
            <Container>
                <Row>
                    <Col sm={12} className='faq-header-container' >
                        <Row>
                            <p>Resources <span>FAQs</span></p>
                            <h3>Frequently Asked Questions</h3>
                            <p className="text-decoration-none">Get answers and explore everything you need to know about your 
                                question at your fingertips.
                            </p>
                            <Form className="faq-form">
                                <input type="text" />
                                <Button>Search</Button>
                            </Form>
                        </Row>
                    </Col>
                    <img src={headerImage} alt="" />
                </Row>
            </Container>
        </section>
    );
}
 
export default FaqHeader;