import { Container, Col } from "react-bootstrap";

const PageHeader = ({title, icon, subtitle, headerImage}) => {
    return (
        <section className="page-header">
            <Container>
                <Col sm={12} className='page-header-container' >
                    <h3>{title} </h3>
                    <p>{subtitle}</p>
                </Col>
                <img src={headerImage} alt="Global Triumph Market Plus Multiconcept - Real estate firm in Nigeria" />
            </Container>
        </section>
    );
}
 
export default PageHeader;