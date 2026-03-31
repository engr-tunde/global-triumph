import { Container } from 'react-bootstrap';
import SocialShareBar from '../seo/SocialShareBar';

const BlogContent = ({ data, shareUrl, shareTitle, shareDescription }) => {
  const title = shareTitle || data.postTitle;
  const desc = shareDescription || '';
  const cover = `${process.env.REACT_APP_IMG_BASEURL}/posts/${data.coverImage}`;

  return (
    <article className="post-article">
      <Container>
        <div className="post-article__inner">
          <SocialShareBar
            url={shareUrl}
            title={title}
            description={desc}
            className="post-article__share"
          />
          <header className="post-article__head">
            <h1 className="post-article__title">{data.postTitle}</h1>
          </header>
          <figure className="post-article__figure">
            <img
              src={cover}
              alt=""
              loading="eager"
              decoding="async"
              width="1200"
              height="630"
            />
          </figure>
          <div
            className="post-article__body content"
            dangerouslySetInnerHTML={{ __html: data.post }}
          />
        </div>
      </Container>
    </article>
  );
};

export default BlogContent;
