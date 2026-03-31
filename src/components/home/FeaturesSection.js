import { Col, Container, Row } from "react-bootstrap";
import investImage from '../../assets/img/investment.gif';
import * as Icon from 'react-bootstrap-icons';

const FeaturesSection = () => {
    return (
        <section className="home-features">
            <Container>
                <div className="section-header">
                    <span className="title">WHY CHOOSE US?</span>
                    <h3 className="subtitle">Everything you need to power your real estate investments journey</h3>
                </div>

                <Row className="section-inner">
                    <Col sm={12} lg={7} className="inner-content">
                        <p className="title">Investment perfection</p>
                        <h3>Steady returns on investments</h3>
                        <p className="subtitle">
                            Never thought you could put your money in an investment and reek in daily profits without having to get involved whatsoever? Wiith Global Triumph, your money works for you.
                        </p>
                        
                        <div className="list">
                            <span className="icon"><Icon.Check size={20} color='#fff' /></span>
                            <span className="text">Easy investment opt in</span>
                        </div>
                        <div className="list">
                            <span className="icon"><Icon.Check size={20} color='#fff' /></span>
                            <span className="text">Swift accessibility to investment growth</span>
                        </div>
                        <div className="list">
                            <span className="icon"><Icon.Check size={20} color='#fff' /></span>
                            <span className="text">Physical investment projects</span>
                        </div>
                        <div className="list">
                            <span className="icon"><Icon.Check size={20} color='#fff' /></span>
                            <span className="text">Realistic profit making</span>
                        </div>
                        <div className="list">
                            <span className="icon"><Icon.Check size={20} color='#fff' /></span>
                            <span className="text">Guaranteed visa processing</span>
                        </div>
                    </Col>
                    <Col sm={12} lg={5} className="inner-image">
                        <img src={investImage} alt="Global Triumph Market Plus Multiconcept" />
                    </Col>
                </Row>

            </Container>
        </section>
    );
}
 
export default FeaturesSection;