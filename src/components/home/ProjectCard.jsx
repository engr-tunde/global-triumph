import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'react-bootstrap-icons';

const ProjectCard = ({ projectTitle, projectDetails, projectCoverImage, projectID, index = 0 }) => {
  const excerpt = (projectDetails || '').trim();
  const short =
    excerpt.length > 72 ? `${excerpt.slice(0, 72)}…` : excerpt;
  const variant = index % 3;

  return (
    <Col xs={12} md={6} xl={4}>
      <article
        className={`feat-project feat-project--v${variant}`}
        style={{ '--feat-i': index }}
      >
        <Link to={`/project-details/${projectID}`} className="feat-project__link">
          <div className="feat-project__shell">
            <span className="feat-project__num" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="feat-project__media">
              <img
                src={`${process.env.REACT_APP_IMG_BASEURL}/projects/${projectCoverImage}`}
                alt=""
              />
              <div className="feat-project__overlay" />
              <span className="feat-project__shine" aria-hidden="true" />
            </div>
            <span className="feat-project__ribbon" aria-hidden="true" />
          </div>
          <div className="feat-project__body">
            <span className="feat-project__label">Portfolio</span>
            <h3 className="feat-project__title">{projectTitle}</h3>
            <p className="feat-project__excerpt">{short}</p>
            <span className="feat-project__cta">
              <span className="feat-project__cta-text">Explore</span>
              <span className="feat-project__cta-circle" aria-hidden="true">
                <ArrowUpRight className="feat-project__cta-ico" />
              </span>
            </span>
          </div>
        </Link>
      </article>
    </Col>
  );
};

export default ProjectCard;
