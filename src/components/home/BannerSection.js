import { Col, Row } from 'react-bootstrap';
import appleStore from '../../assets/img/apple-store.svg';
import playStore from '../../assets/img/playstore.svg';
import download from '../../assets/img/download.png';
import vidBg from '../../assets/img/vid-bg.mp4';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const BannerSection = () => {
  return (
    <>
      <section className="home-banner" id="home">
        <video muted autoPlay loop src={vidBg} className="vid-bg" />
        <Row>
          <Col xs={12} className="home-banner-main">
            {/* <video src={vidBg} autoplay loop muted /> */}

            {/* <Container> */}
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn banner-inner' : 'banner-inner'
                  }
                >
                  <span className="tagline">Global Triumph Market Plus Multiconcept</span>
                  <h3>
                    Africa's Leading Real Estate <br />
                    Ownership and Investment Platform
                  </h3>
                  <p>
                    Thinking of engaging in smart real estate investments that yield incredible ROI
                    without being scared of being scammed of your hard earned money? You are at the
                    right place!
                  </p>
                  <Row className="app-buttons">
                    <p>Download Our App</p>
                    <Row className="app-buttons-img">
                      <img
                        src={appleStore}
                        alt="Global Triumph Market Plus Multiconcept - iOS mobile app"
                      />
                      <img
                        src={playStore}
                        alt="Global Triumph Market Plus Multiconcept - Android mobile app"
                      />
                    </Row>
                    <img
                      src={download}
                      alt="Global Triumph Market Plus Multiconcept - iOS mobile app"
                    />
                  </Row>
                </div>
              )}
            </TrackVisibility>
            {/* </Container> */}
          </Col>
        </Row>
      </section>
    </>
  );
};

export default BannerSection;
