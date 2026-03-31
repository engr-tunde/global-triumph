import { Container } from 'react-bootstrap';
import { JournalRichtext, Newspaper } from 'react-bootstrap-icons';

/**
 * Editorial hero for Learn / Industry News listing pages.
 * @param {'learn' | 'industry'} variant
 */
const PostsHubHero = ({ variant = 'learn', eyebrow, title, lead }) => {
  const Icon = variant === 'industry' ? Newspaper : JournalRichtext;
  const mod = variant === 'industry' ? 'posts-hub-hero--industry' : 'posts-hub-hero--learn';

  return (
    <section className={`posts-hub-hero ${mod}`} aria-labelledby="posts-hub-heading">
      <div className="posts-hub-hero__bg" aria-hidden="true">
        <span className="posts-hub-hero__blob posts-hub-hero__blob--a" />
        <span className="posts-hub-hero__blob posts-hub-hero__blob--b" />
        <span className="posts-hub-hero__mesh" />
      </div>
      <Container>
        <div className="posts-hub-hero__inner">
          <p className="posts-hub-hero__eyebrow">
            <Icon className="posts-hub-hero__eyebrow-ico" aria-hidden />
            {eyebrow}
          </p>
          <h1 id="posts-hub-heading" className="posts-hub-hero__title">
            {title}
          </h1>
          <p className="posts-hub-hero__lead">{lead}</p>
        </div>
      </Container>
    </section>
  );
};

export default PostsHubHero;
