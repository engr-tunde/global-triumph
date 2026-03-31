import { Col, Container, Row } from "react-bootstrap";
import boxImage from '../../assets/img/boxes.png';
import consultant from '../../assets/img/consultant.svg';
import client from '../../assets/img/client.svg';
import prop from '../../assets/img/prop.svg';
import development from '../../assets/img/development.svg';
import surveilant from '../../assets/img/surveilant.svg';
import airplane from '../../assets/img/airplane.svg';
import TrackVisibility from 'react-on-screen';

const ServicesSection = () => {
    return (
        <section className="home-services" id="services">
            <Container>
                <Row>
                    <h3>More Than Just Real Estate...</h3>
                    <p>Here are some of the services we offer at GTMPM</p>
                    <Col sm={12} lg={6} className="left-img">
                        <img src={boxImage} alt="Global Triumph Market Plus Multiconcept" />
                    </Col>
                    <Col sm={12} lg={6} className="main-bx">
                        <TrackVisibility>
                            {({ isVisible}) =>
                                <div className={isVisible ? "serviceSlideIn" : "" }>
                                    <div className="service-bx">
                                        <img src={prop} alt="Global Triumph - services" />
                                        <span>Buying and selling of properties</span>
                                    </div>
                                </div>
                            }
                        </TrackVisibility>
                        <TrackVisibility>
                            {({ isVisible}) =>
                                <div className={isVisible ? "serviceSlideIn" : "" }>
                                    <div className="service-bx">
                                        <img src={consultant} alt="Global Triumph - services" />
                                        <span>Property Consultant</span>
                                    </div>
                                </div>
                            }
                        </TrackVisibility>
                        <TrackVisibility>
                            {({ isVisible}) =>
                                <div className={isVisible ? "serviceSlideIn" : "" }>
                                    <div className="service-bx">
                                        <img src={development} alt="Global Triumph - services" />
                                        <span>Real Estate Development</span>
                                    </div>
                                </div>
                            }
                        </TrackVisibility>
                        <TrackVisibility>
                            {({ isVisible}) =>
                                <div className={isVisible ? "serviceSlideIn" : "" }>
                                    <div className="service-bx">
                                        <img src={client} alt="Global Triumph - services" />
                                        <span>Professional Management of Properties for Clients</span>
                                    </div>
                                </div>
                            }
                        </TrackVisibility>
                        <TrackVisibility>
                            {({ isVisible}) =>
                                <div className={isVisible ? "serviceSlideIn" : "" }>
                                    <div className="service-bx">
                                        <img src={surveilant} alt="Global Triumph - services" />
                                        <span>CCTV Camera Installation and Interior Decor</span>
                                    </div>
                                </div>
                            }
                        </TrackVisibility>
                        <TrackVisibility>
                            {({ isVisible}) =>
                                <div className={isVisible ? "serviceSlideIn" : "" }>
                                    <div className="service-bx">
                                        <img src={consultant} alt="Global Triumph - services" />
                                        <span>Marketing of Companies Products</span>
                                    </div>
                                </div>
                            }
                        </TrackVisibility>
                        <TrackVisibility>
                            {({ isVisible}) =>
                                <div className={isVisible ? "serviceSlideIn" : "" }>
                                    <div className="service-bx">
                                        <img src={airplane} alt="Global Triumph - services" />
                                        <span>Visa Services</span>
                                    </div>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container> 
        </section>
    );
}
 
export default ServicesSection;