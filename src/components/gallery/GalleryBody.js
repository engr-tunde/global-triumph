import { Container, Row, Tab } from "react-bootstrap";
import useFetch from "../../hooks/useFetch";
import GalleryCard from "./GalleryCard";


const GalleryBody = () => {

    const {data, loading, error} = useFetch(`${process.env.REACT_APP_API_URL}/gallery/get-all-gallery`);

    return (
        <section className="project-body">
            <Container>
                <Row className="inner">
                    <h3>Our Event Gallery</h3>
                    <p> 
                        Welcome to Our Gallery page. Kindly take your time to explore the various projects that we have built, managed and handled at Global Triumph Market Plus Multiconcept over our years of existence. Click on the project title button to view full descriptions and explore media files of the project.
                    </p>
                    <Tab.Container id="projects-tab" defaultActiveKey="first">
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {data &&
                                        data.map((project) => {
                                            return (
                                                <GalleryCard key={project.id} {...project} />
                                            )
                                        })
                                    }
                                    {loading && <div style={{color:"red !important", fontSize:"30px"}}>Loading...</div>}
                                    {error && <div style={{color:"red !important", fontSize:"30px"}}>{error}</div>}
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Row>
            </Container>
        </section>
    );
}
 
export default GalleryBody;