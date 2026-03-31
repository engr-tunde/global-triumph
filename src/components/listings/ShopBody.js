import { Col, Container, Row } from "react-bootstrap";
import ListCard from "./ListCard";
import * as Icon from 'react-bootstrap-icons';
import useFetch from "../../hooks/useFetch";

const ShopBody = () => {

    const {data, loading, error} = useFetch(`${process.env.REACT_APP_API_URL}/listings/get-all-listings`);

    return (
        <section className="listings-body">
            <Container>
                <Row className="store-wrapper">
                    <h3 className="title">Shop for Properties</h3>
                    <p className="subtitle"> 
                        Welcome to Our Shop. Here, you will find the available properties for sales. You can as well find full prpperty details by clicking on the <b>Details</b> button, and start a purchase process by clicking the <b>Contact</b> button.
                    </p>
                    <Row className="list-wrapper justify-content-between">
                        <Col sm={12} lg={8} >
                            {data &&
                                data.map((sale) => {
                                    return (
                                        <ListCard key={sale.id} {...sale} />
                                    )
                                })
                            }
                            {loading && <div style={{color:"red !important", fontSize:"30px"}}>Loading...</div>}
                            {error && <div style={{color:"red !important", fontSize:"30px"}}>{error}</div>}
                        </Col>

                        <Col sm={12} lg={4} >
                            <div className='overview'> 

                                <h3>
                                    General Contact for all properties on sale
                                </h3>

                                <p>
                                    <a href="https://wa.me/+2348023323690"><Icon.Whatsapp size={16} color='#26683C' /> &nbsp;+23480 2332 3690 </a>
                                </p>

                                <p>
                                    <a href="tel:+2348025670850"><Icon.PhoneFlip size={16} color='#26683C' /> &nbsp;+23480 2567 0850</a>
                                </p>

                                <p>
                                    <a href="tel:+2349030096229"><Icon.PhoneVibrate size={16} color='#26683C' /> &nbsp;+23490 3009 6229 </a>
                                </p>
                            </div> 
                        </Col>
                    </Row>


                </Row>
            </Container>
        </section>
    );
}
 
export default ShopBody;