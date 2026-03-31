import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check2Circle } from 'react-bootstrap-icons';

const CompletedProjectCard = ({
  projectTitle,
  projectDetails,
  projectCoverImage,
  projectID,
  index = 0,
  featured = false,
}) => {
  const excerpt = (projectDetails || '').trim();
  const short = featured
    ? excerpt.length > 140
      ? `${excerpt.slice(0, 140)}…`
      : excerpt
    : excerpt.length > 72
      ? `${excerpt.slice(0, 72)}…`
      : excerpt;

  if (featured) {
    return (
      <Col xs={12}>
        <article
          className="comp-project comp-project--featured"
          style={{ '--comp-i': index }}
        >
          <Link to={`/project-details/${projectID}`} className="comp-project__link comp-project__link--featured">
            <div className="comp-project__featured-media">
              <img
                src={`${process.env.REACT_APP_IMG_BASEURL}/projects/${projectCoverImage}`}
                alt=""
                loading="lazy"
              />
              <div className="comp-project__featured-shade" aria-hidden="true" />
              <span className="comp-project__featured-badge" aria-hidden="true">
                <Check2Circle className="comp-project__featured-badge-ico" />
                Delivered
              </span>
              <span className="comp-project__featured-num" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
            <div className="comp-project__featured-body">
              <p className="comp-project__featured-label">Signature completion</p>
              <h3 className="comp-project__featured-title">{projectTitle}</h3>
              <p className="comp-project__featured-excerpt">{short}</p>
              <span className="comp-project__featured-cta">
                Open case study
                <ArrowUpRight className="comp-project__featured-cta-ico" aria-hidden />
              </span>
            </div>
          </Link>
        </article>
      </Col>
    );
  }

  return (
    <Col xs={12} sm={6} xl={4}>
      <article
        className={`comp-project comp-project--tile comp-project--tilt-${index % 3}`}
        style={{ '--comp-i': index }}
      >
        <Link to={`/project-details/${projectID}`} className="comp-project__link comp-project__link--tile">
          <div className="comp-project__tile-frame">
            <div className="comp-project__media">
              <img
                src={`${process.env.REACT_APP_IMG_BASEURL}/projects/${projectCoverImage}`}
                alt=""
                loading="lazy"
              />
              <div className="comp-project__media-grad" aria-hidden="true" />
              <span className="comp-project__tile-stamp" aria-hidden="true">
                ✓
              </span>
            </div>
            <div className="comp-project__body">
              <span className="comp-project__tile-idx" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="comp-project__title">{projectTitle}</h3>
              <p className="comp-project__excerpt">{short}</p>
              <span className="comp-project__cta">
                Details
                <ArrowUpRight className="comp-project__cta-ico" aria-hidden />
              </span>
            </div>
          </div>
        </Link>
      </article>
    </Col>
  );
};

export default CompletedProjectCard;
