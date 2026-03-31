import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'react-bootstrap-icons';

const ProjectCard = ({ projectTitle, projectCoverImage, projectID, status }) => {
  return (
    <Col xs={12} md={6} xl={4}>
      <article className="proj-card">
        <Link to={`/project-details/${projectID}`} className="proj-card__media">
          <img
            src={`${process.env.REACT_APP_IMG_BASEURL}/projects/${projectCoverImage}`}
            alt=""
            loading="lazy"
          />
          <span className="proj-card__shine" aria-hidden="true" />
          {status && <span className="proj-card__badge">{status}</span>}
        </Link>
        <div className="proj-card__body">
          <h2 className="proj-card__title">
            <Link to={`/project-details/${projectID}`}>{projectTitle}</Link>
          </h2>
          <Link to={`/project-details/${projectID}`} className="proj-card__link">
            View project
            <ArrowRight className="proj-card__link-ico" aria-hidden />
          </Link>
        </div>
      </article>
    </Col>
  );
};

export default ProjectCard;
