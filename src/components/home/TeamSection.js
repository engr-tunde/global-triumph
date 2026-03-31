import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TeamCard from './TeamCard';

const TeamSection = () => {
  return (
    <section className="home-team">
      <Container>
        <Row>
          <Col>
            <div className="team-bx">
              <h3>The Team</h3>
              <p>
                From the various properties projects we are running, here are some of the hot ones
              </p>
              <TeamCard />
              <div className="bt align-items-center justify-content-center">
                <Link to="/about#team" className="button">
                  View Full Team <ArrowRightCircle size={25} />
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TeamSection;
