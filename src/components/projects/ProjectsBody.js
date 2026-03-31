import { Container, Row, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import useFetch from "../../hooks/useFetch";


const ProjectsBody = () => {

    const {data, loading, error} = useFetch(`${process.env.REACT_APP_API_URL}/projects/get-all-projects`);

    return (
        <section className="project-body">
            <Container>
                <Row className="inner">
                    <h3>Our Projects</h3>
                    <p> 
                        Welcome to Our Projects page. Kindly take your time to explore the various projects that we have built, managed and handled at Global Triumph Market Plus Multiconcept over our years of existence. Click on the project title button to view full descriptions and explore media files of the project.
                    </p>
                    <Tab.Container id="projects-tab" defaultActiveKey="second">
                        <Nav variant="pills" className="nav-pills mb-4 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Currently Ongoing</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Completed Projects</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Pending Projects</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {data &&
                                        data.filter(proj => proj.status === "Ongoing").map((project) => {
                                            return (
                                                <ProjectCard key={project.id} {...project} />
                                            )
                                        })
                                    }
                                    {loading && <div style={{color:"red !important", fontSize:"30px"}}>Loading...</div>}
                                    {error && <div style={{color:"red !important", fontSize:"30px"}}>{error}</div>}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Row>
                                    {data &&
                                        data.filter(proj => proj.status === "Completed").map((project) => {
                                            return (
                                                <ProjectCard key={project.id} {...project} />
                                            )
                                        })
                                    }
                                    {loading && <div style={{color:"red !important", fontSize:"30px"}}>Loading...</div>}
                                    {error && <div style={{color:"red !important", fontSize:"30px"}}>{error}</div>}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <Row>
                                    {data &&
                                        data.filter(proj => proj.status === "Pending").map((project) => {
                                            return (
                                                <ProjectCard key={project.id} {...project} />
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
 
export default ProjectsBody;