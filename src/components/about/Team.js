import { Container, Row, Nav } from "react-bootstrap";
import linkedin from '../../assets/img/nav-icon1.svg';
import useFetch from "../../hooks/useFetch";
import loader from '../../assets/img/loader.gif';

const Team = () => {

    const {data, loading, error} = useFetch(`${process.env.REACT_APP_API_URL}/team/get-website-team-members`);

    return (
        <section className="about-team" id="team">
            <Container>
                <Row className="align-center" >
                    <div className="section-header">
                        <h3>
                            Our Team
                        </h3>
                        <p>
                            Meet the highly experienced individuals utilizing their vas experience level and expertise to bring the best at Global Triumph Market Plus Multiconcept
                        </p>
                    </div>

                    <Row className="main">

                        {data &&
                            data.map((team) => {
                                return (
                                    <div className="team-bx">
                                        <img src={`${process.env.REACT_APP_IMG_BASEURL}/team/${team.coverImage}`} alt={team.coverImage} />
                                        <p className="name">{team.fullName}</p>
                                        <p className="title">{team.post}</p>
                                        <div className="social-icon">
                                            <Nav.Link href="#"><img src={linkedin} alt="" />
                                            </Nav.Link> 
                                        </div>
                                    </div>
                                )
                            })
                        }
                        {loading && <img src={loader} alt="Global Triumph Market Plus Multiconcept" />}
                        {error && <div style={{color:"red !important", fontSize:"25px"}}>{error}</div>}
                        

                    </Row>
                </Row>
            </Container>
        </section>
    );
}
 
export default Team;