import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { stripHtml, truncate } from '../../utils/seo';

const BlogBigCard = ({ postTitle, post, coverImage, postUrl }) => {
  const plain = stripHtml(post || '');
  const excerpt = truncate(plain, 160);

  return (
    <article className="hub-feature-card">
      <Row className="hub-feature-card__row g-4 g-lg-5 align-items-stretch">
        <Col xs={12} lg={7}>
          <Link to={`/post-details/${postUrl}`} className="hub-feature-card__media-link" tabIndex={-1}>
            <div className="hub-feature-card__media">
              <img
                src={`${process.env.REACT_APP_IMG_BASEURL}/posts/${coverImage}`}
                alt=""
                loading="eager"
              />
            </div>
          </Link>
        </Col>
        <Col xs={12} lg={5}>
          <div className="hub-feature-card__content">
            <p className="hub-feature-card__label">Featured</p>
            <h2 className="hub-feature-card__title">
              <Link to={`/post-details/${postUrl}`}>{postTitle}</Link>
            </h2>
            {excerpt ? <p className="hub-feature-card__excerpt">{excerpt}</p> : null}
            <Link to={`/post-details/${postUrl}`} className="hub-feature-card__cta">
              Read full article
            </Link>
          </div>
        </Col>
      </Row>
    </article>
  );
};

export default BlogBigCard;
