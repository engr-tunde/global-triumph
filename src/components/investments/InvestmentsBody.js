import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import boxImage from '../../assets/img/boxes.png';
import * as Icon from 'react-bootstrap-icons';
import useFetch from "../../hooks/useFetch";
import loader from '../../assets/img/loader.gif';

const InvestmentsBody = () => {

    const {data, loading, error} = useFetch(`${process.env.REACT_APP_API_URL}/investments/get-investment-data`);

    return (
        <section className="investments-body">
            <Container>
                <Row className="inner">
                    <h2>Investment Categories</h2>
                    {/* <Row > */}

                    {data && 
                            data.map((invest) => (
                        <Col sm={12} lg={4}>
                            <div className="text">
                                <div className="upperBG"></div>
                                <div className="content">
                                    <Icon.Coin size={100} color='#121212'  className="icon" />
                                    <h3>{invest.title}</h3>
                                    <div className="investment-details">
                                        <div className="price">
                                            <div className="min">
                                                <p>NGN {invest.min}</p>
                                                <span>Starts from</span>
                                            </div>
                                            <div className="max">
                                                <p>NGN {invest.max}</p>
                                                <span>to over</span>
                                            </div>
                                        </div>
                                        <div className="roi">
                                            <p>{invest.roi}</p>
                                            <span>ROI per annum</span>
                                        </div>
                                        <Link to="/signup">Join plan</Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        ))
                    }
                    {loading && <img src={loader} alt="Global Triumph Market Plus Multiconcept" />}
                    {error && <div style={{color:"red !important", fontSize:"25px"}}>{error}</div>}

                    {/* </Row> */}
                </Row>
                <Row className='right-img'>
                    {/* <Col > */}
                        <img src={boxImage} alt={`Global Triumph Market Plus Multiconcept - ${boxImage}`} />
                    {/* </Col> */}
                </Row>
            </Container>
        </section>
    );
}
 
export default InvestmentsBody;