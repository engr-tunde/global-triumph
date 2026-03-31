import { Container, Row, Col } from 'react-bootstrap';
import { Linkedin } from 'react-bootstrap-icons';
import useFetch from '../../hooks/useFetch';
import loader from '../../assets/img/loader.gif';

const Team = () => {
  const { data, loading, error } = useFetch(
    `${process.env.REACT_APP_API_URL}/team/get-website-team-members`
  );

  return (
    <section className="about-team" id="team">
      <Container>
        <header className="about-team__header">
          <p className="about-team__eyebrow">People</p>
          <h2 className="about-team__title">Our team</h2>
          <p className="about-team__lead">
            Experienced professionals bringing depth, discipline, and care to every mandate at Global
            Triumph Market Plus Multiconcept.
          </p>
        </header>

        {loading && (
          <p className="about-team__state">
            <img src={loader} alt="" />
          </p>
        )}
        {error && (
          <p className="about-team__state about-team__state--err" role="alert">
            {error}
          </p>
        )}

        {data && data.length > 0 && (
          <Row className="g-4 about-team__grid justify-content-center">
            {data.map((member) => {
              const linkedin =
                member.linkedinUrl ||
                member.linkedInUrl ||
                member.linkedin ||
                member.linkedIn ||
                '';
              return (
                <Col key={member.id ?? member.fullName} xs={12} sm={6} lg={4} xl={3}>
                  <article className="team-card">
                    <div className="team-card__frame">
                      <div className="team-card__photo">
                        <img
                          src={`${process.env.REACT_APP_IMG_BASEURL}/team/${member.coverImage}`}
                          alt=""
                          loading="lazy"
                        />
                      </div>
                      <span className="team-card__accent" aria-hidden="true" />
                    </div>
                    <div className="team-card__body">
                      <h3 className="team-card__name">{member.fullName}</h3>
                      <p className="team-card__role">{member.post}</p>
                      {linkedin ? (
                        <a
                          href={linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="team-card__social"
                          aria-label={`${member.fullName} on LinkedIn`}
                        >
                          <Linkedin aria-hidden />
                          <span>LinkedIn</span>
                        </a>
                      ) : null}
                    </div>
                  </article>
                </Col>
              );
            })}
          </Row>
        )}
      </Container>
    </section>
  );
};

export default Team;
