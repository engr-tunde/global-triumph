import { Link } from 'react-router-dom';
import { stripHtml, truncate } from '../../utils/seo';

const BlogArchiveCard = ({ postTitle, post, coverImage, postUrl }) => {
  const plain = stripHtml(post || '');
  const excerpt = truncate(plain, 120);

  return (
    <article className="hub-archive-card">
      <Link to={`/post-details/${postUrl}`} className="hub-archive-card__media-link" tabIndex={-1}>
        <div className="hub-archive-card__media">
          <img
            src={`${process.env.REACT_APP_IMG_BASEURL}/posts/${coverImage}`}
            alt=""
            loading="lazy"
          />
        </div>
      </Link>
      <div className="hub-archive-card__body">
        <h3 className="hub-archive-card__title">
          <Link to={`/post-details/${postUrl}`}>{postTitle}</Link>
        </h3>
        {excerpt ? <p className="hub-archive-card__excerpt">{excerpt}</p> : null}
        <Link to={`/post-details/${postUrl}`} className="hub-archive-card__cta">
          Read article
        </Link>
      </div>
    </article>
  );
};

export default BlogArchiveCard;
