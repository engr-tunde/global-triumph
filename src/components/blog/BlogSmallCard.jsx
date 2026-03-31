import { Link } from 'react-router-dom';

const BlogSmallCard = ({ postTitle, coverImage, postUrl }) => {
  return (
    <article className="hub-tile">
      <Link to={`/post-details/${postUrl}`} className="hub-tile__media-link" tabIndex={-1}>
        <div className="hub-tile__media">
          <img
            src={`${process.env.REACT_APP_IMG_BASEURL}/posts/${coverImage}`}
            alt=""
            loading="lazy"
          />
        </div>
      </Link>
      <div className="hub-tile__body">
        <h3 className="hub-tile__title">
          <Link to={`/post-details/${postUrl}`}>{postTitle}</Link>
        </h3>
        <Link to={`/post-details/${postUrl}`} className="hub-tile__cta">
          Read more
        </Link>
      </div>
    </article>
  );
};

export default BlogSmallCard;
