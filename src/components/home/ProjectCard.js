import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProjectCard = ({ projectTitle, projectDetails, projectCoverImage, projectID }) => {
    return (
        <Col sm={12} lg={4} >
            <div className="propertyCard">
                <img src={`${process.env.REACT_APP_IMG_BASEURL}/projects/${projectCoverImage}`} alt={`Global Triumph - ${projectCoverImage}`} />
                <Link to={`/project-details/${projectID}`}>
                    <div className="content">
                        <h3>{projectTitle}</h3>
                        <p>{projectDetails.substring(0, 50)}...</p>
                    </div>
                </Link>
            </div>
        </Col>
    );
}
 
export default ProjectCard;