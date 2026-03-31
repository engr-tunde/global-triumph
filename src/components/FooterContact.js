import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import supportIcon from '../assets/img/footer-contact.svg';

export const FooterContact = () => {
    return (
        <div className="footer-contact">
            <Container>
                <Row className="footer-contact-inner">
                    <Col sm={12} md={6} className="contact-text">
                        <h3>Support on the go when you need us</h3>
                        <p>We understand how important prompt response to your 
                            inquiries means to you. The support team is here for You!
                        </p>
                        <Link className="contact" to="/contact"><span>Contact Us</span></Link>
                    </Col>
                    <Col sm={12} md={6} className="contact-text">
                    <img src={supportIcon} alt="Global Triumph Market Plus Multiconcept"></img>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default FooterContact;