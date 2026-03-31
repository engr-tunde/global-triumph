import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProjectCard = ({ projectTitle, projectCoverImage, projectID }) => {
    return (
        <Col sm={12} lg={4} >
            <div className="propertyCard">
                <img 
                    src={`${process.env.REACT_APP_IMG_BASEURL}/projects/${projectCoverImage}`} 
                    alt={`Global Triumph Market Plus Multiconcept - ${projectCoverImage}`}
                />
                <Link to={`/project-details/${projectID}`} className="content">
                    {projectTitle}
                </Link>
            </div>
        </Col>
    );
}
 
export default ProjectCard;