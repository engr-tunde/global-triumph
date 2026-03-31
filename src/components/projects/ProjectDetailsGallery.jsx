import ProjectGallery from './ProjectGallery';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useMemo } from 'react';
import useFetch from '../../hooks/useFetch';
import { ArrowLeft, Grid3x3Gap } from 'react-bootstrap-icons';
import PageSeo from '../seo/PageSeo';
import SocialShareBar from '../seo/SocialShareBar';
import { buildProjectSchema, getSiteOrigin, stripHtml, truncate } from '../../utils/seo';

const ProjectDetailsGallery = () => {
  const { projectID } = useParams();
  const { data, loading, error } = useFetch(
    `${process.env.REACT_APP_API_URL}/projects/project/${projectID}`
  );

  let imagesArray;
  if (data) {
    const array2 = data.images;
    imagesArray = array2.split(', ');
  } else {
    imagesArray = undefined;
  }

  const shareUrl = useMemo(
    () => `${getSiteOrigin()}/project-details/${projectID}`,
    [projectID]
  );

  const coverImage = useMemo(() => {
    if (!imagesArray?.length) return undefined;
    return `${process.env.REACT_APP_IMG_BASEURL}/projects/${imagesArray[0]}`;
  }, [imagesArray]);

  const description = useMemo(() => {
    if (!data?.projectDetails) return 'Real estate project — Global Triumph, Nigeria.';
    return truncate(stripHtml(data.projectDetails), 160);
  }, [data]);

  const structuredData = useMemo(() => {
    if (!data) return undefined;
    return buildProjectSchema({
      name: data.projectTitle,
      description: data.projectDetails,
      url: shareUrl,
      imageUrl: coverImage,
    });
  }, [data, shareUrl, coverImage]);

  return (
    <div className="project-detail">
      <PageSeo
        title={data?.projectTitle ?? 'Project'}
        description={description}
        canonicalPath={`/project-details/${projectID}`}
        imageUrl={coverImage}
        structuredData={structuredData}
        keywords={
          data
            ? `${data.projectTitle}, ${data.status}, real estate, Global Triumph, Nigeria`
            : 'real estate project, Global Triumph, Nigeria'
        }
      />

      <div className="project-detail__hero">
        <Container>
          <Link to="/projects" className="project-detail__back">
            <ArrowLeft aria-hidden />
            All projects
          </Link>
          {data && (
            <>
              <SocialShareBar
                url={shareUrl}
                title={data.projectTitle}
                description={description}
                className="project-detail__share"
              />
              <p className="project-detail__eyebrow">{data.status}</p>
              <h1 className="project-detail__title">{data.projectTitle}</h1>
            </>
          )}
          {loading && <p className="project-detail__state">Loading…</p>}
          {error && (
            <p className="project-detail__state project-detail__state--err" role="alert">
              {error}
            </p>
          )}
        </Container>
      </div>

      <Container className="project-detail__main">
        {data && (
          <Row className="g-4">
            <Col lg={5} xl={4}>
              <aside className="project-detail__aside">
                <div className="project-detail__aside-card">
                  <h2 className="project-detail__aside-heading">
                    <Grid3x3Gap aria-hidden />
                    Gallery
                  </h2>
                  <p className="project-detail__aside-text">
                    Tap any image for a full-screen view. Swipe or use arrows to browse.
                  </p>
                </div>
              </aside>
            </Col>
            <Col lg={7} xl={8}>
              <div className="project-detail__prose">
                <p>{data.projectDetails}</p>
              </div>
              <ProjectGallery galleryImages={imagesArray} />
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default ProjectDetailsGallery;
