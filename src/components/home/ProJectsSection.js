import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import loader from '../../assets/img/loader.gif';
import ProjectCard from "./ProjectCard";
import {ArrowRightCircle} from "react-bootstrap-icons";
import useFetch from "../../hooks/useFetch";

const ProJectsSection = () => {

    const {data, loading, error} = useFetch(`${process.env.REACT_APP_API_URL}/projects/get-all-projects`);

    return (
        <section className="home-properties">
            <Container>
                <Row>
                    <h3>Our Featured Projects</h3>
                    <p>From the various properties projects we are running, here are some of the hot ones</p>
                    {data &&
                        data.slice(0,3).map((project, index) => {
                            return (
                                <ProjectCard key={index} {...project} />
                            )
                        })
                    }
                    {loading && <img src={loader} alt="Global Triumph Market Plus Multiconcept" />}
                    {error && <div style={{color:"red !important", fontSize:"25px"}}>{error}</div>}
                    <div className="bt align-items-center justify-content-center">
                        <Link to="/projects" className="button">View All Projects <ArrowRightCircle size={25}/></Link>
                    </div>
                </Row>
            </Container>
        </section>
    );
}
 
export default ProJectsSection;