import { Container, Row, Col } from "react-bootstrap";
import achivementBanner from '../../assets/img/rent-3.png';

const Achivements = () => {
    return (
        <section className="about-achievements">
            <Container>
                <Row className="justify-content-between">
                    <Col sm={12} lg={5} className="text">
                        <h3>
                            Our Achievements
                        </h3>
                        <p>
                            At GTMPM, our consistency is second to none as we have featured in the market, delivered professional services and still delivering, both to local and international clients. For instance, we have sold private buildings, hotels, and business apartments in Dubai, France and Belgium, and locally; handled building projects, sold lands and offered related services in the major cities in Nigeria like Lagos, Abuja, Benin, and Ibadan, etc.
                        </p>
                        <p>
                            We have also rendered services on visa issuances for students, families and workers to countries like USA, UAE, France, Italy, Germany, Belgium, South Africa, etc.
                        </p>
                    </Col>
                    <Col sm={12} lg={6} className="img">
                        <img src={achivementBanner} alt="" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
 
export default Achivements;