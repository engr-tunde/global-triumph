import { Container, Row, Tab, Nav, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import useFetch from '../../hooks/useFetch';
import { FolderSymlink, HourglassSplit, PatchCheck } from 'react-bootstrap-icons';

const ProjectsBody = () => {
  const { data, loading, error } = useFetch(
    `${process.env.REACT_APP_API_URL}/projects/get-all-projects`
  );

  return (
    <section className="projects-page">
      <div className="projects-page__hero">
        <Container>
          <p className="projects-page__eyebrow">Portfolio</p>
          <h1 className="projects-page__title">Our projects</h1>
          <p className="projects-page__lead">
            Explore developments we have built, managed, and delivered—ongoing, completed, and
            upcoming.
          </p>
        </Container>
      </div>

      <Container className="projects-page__body">
        <Tab.Container id="projects-tab" defaultActiveKey="second">
          <Nav variant="pills" className="projects-page__tabs" id="pills-tab">
            <Nav.Item className="projects-page__tab-item">
              <Nav.Link eventKey="first" className="projects-page__tab">
                <HourglassSplit className="projects-page__tab-ico" aria-hidden />
                Ongoing
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="projects-page__tab-item">
              <Nav.Link eventKey="second" className="projects-page__tab">
                <PatchCheck className="projects-page__tab-ico" aria-hidden />
                Completed
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="projects-page__tab-item">
              <Nav.Link eventKey="third" className="projects-page__tab">
                <FolderSymlink className="projects-page__tab-ico" aria-hidden />
                Pending
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content className="projects-page__panes">
            <Tab.Pane eventKey="first">
              <Row className="g-4 projects-page__grid">
                {loading && (
                  <Col xs={12}>
                    <p className="projects-page__state">Loading projects…</p>
                  </Col>
                )}
                {error && (
                  <Col xs={12}>
                    <p className="projects-page__state projects-page__state--err" role="alert">
                      {error}
                    </p>
                  </Col>
                )}
                {data &&
                  data
                    .filter((proj) => proj.status === 'Ongoing')
                    .map((project) => (
                      <ProjectCard key={project.id} {...project} />
                    ))}
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <Row className="g-4 projects-page__grid">
                {loading && (
                  <Col xs={12}>
                    <p className="projects-page__state">Loading projects…</p>
                  </Col>
                )}
                {error && (
                  <Col xs={12}>
                    <p className="projects-page__state projects-page__state--err" role="alert">
                      {error}
                    </p>
                  </Col>
                )}
                {data &&
                  data
                    .filter((proj) => proj.status === 'Completed')
                    .map((project) => (
                      <ProjectCard key={project.id} {...project} />
                    ))}
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <Row className="g-4 projects-page__grid">
                {loading && (
                  <Col xs={12}>
                    <p className="projects-page__state">Loading projects…</p>
                  </Col>
                )}
                {error && (
                  <Col xs={12}>
                    <p className="projects-page__state projects-page__state--err" role="alert">
                      {error}
                    </p>
                  </Col>
                )}
                {data &&
                  data
                    .filter((proj) => proj.status === 'Pending')
                    .map((project) => (
                      <ProjectCard key={project.id} {...project} />
                    ))}
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </section>
  );
};

export default ProjectsBody;
