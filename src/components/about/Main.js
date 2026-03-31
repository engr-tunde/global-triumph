import { Col, Container, Row } from "react-bootstrap";
import bannerImage from '../../assets/img/rent-2.png'

const Main = () => {
    return (
        <section className="about-main">
            <Container>
                <Row>
                    <h3>About Global Triumph</h3>
                    <Col>
                        <div className="main">
                            <p>
                            Global Triumph Market Plus Multiconcept (G.T.M.P.M) Reg. Num: RC: 1665631 is a highly reputable Real Estate Company in Nigeria. The company office is located at 26, Omolara Olusi Street, Hopville Estate, Opposite SBI Hotel, Sangotedo Road, Ajah, Lagos. </p>

                            <p>
                                Global Triumph Market Plus Multiconcept Company (G.T.M.P.M) was incorporated in Nigeria in the year 2014 and also was awarded certificate from SCRUM Academy for Realtors.
                            </p>
                            
                            <p>
                                From the time of its registration, the company has attracted highly distinguished customers both within and outside Nigeria thus this could be said to be a testimonial of its genuineness and consistency in service delivery.
                            </p>
                        </div>
                        <div className="img">
                            <img src={bannerImage} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
 
export default Main;