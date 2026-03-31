import { Accordion, Container, Nav, Row } from "react-bootstrap";
import useFetch from "../../hooks/useFetch";

const CareerMain = () => {

    const {data, loading, error} = useFetch(`${process.env.REACT_APP_API_URL}/careers/get-careers`);

    return (
        <section className="faq-main">
            <Container>
                <p>Below are the open positions at GTMPM. Feel free to apply</p>
                <Row className="main-container">
                    <Accordion defaultActiveKey="0">
                        {data && 
                            data.map((career) => (
                                <Accordion.Item eventKey={career.id}>
                                    <Accordion.Header>{career.status} Position - {career.title}</Accordion.Header>
                                    <Accordion.Body>{career.content}<div className="career-inner">
                                            <p><span className="inner-span">Status:</span> Currently {career.status}</p>
                                            <Nav.Link href={`/career-details/${career.careerID}`}>Apply</Nav.Link>
                                        </div>
                                    </Accordion.Body>
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
 
export default CareerMain;