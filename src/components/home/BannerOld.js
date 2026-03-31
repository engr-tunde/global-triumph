import { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
// import homeHouse from '../../assets/img/home-house-banner.png';
import homeHouse from '../../assets/img/home.gif';
import appleStore from '../../assets/img/apple-store.svg';
import playStore from '../../assets/img/playstore.svg';
import download from '../../assets/img/download.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const OldBannerSection = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ['Investment Arena & More...'];
  const [text, setText] = useState('');
  const period = 700;
  // const [index, setIndex] = useState(1);
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <>
      <section className="home-banner" id="home">
        <Row>
          <Col xs={12} lg={6} xl={6} className="home-banner-left">
            {/* <Container> */}
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <span className="tagline">Global Triumph Market Plus Multiconcept</span>
                  <h3>
                    {`Your Smart Real Estate `}
                    <br />
                    <span className="wrap">{text}</span>
                  </h3>
                  <p>
                    Thinking of engaging in smart real estate investments that yield incredible ROI
                    legitimately without being scared of being scammed of your hard earned money?
                    You are at the right place!
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
          <Col xs={12} lg={6} xl={6} className="home-banner-right">
            <img src={homeHouse} alt="Global Triumph Market Plus Multiconcept - banner" />
          </Col>
        </Row>
      </section>
    </>
  );
};

export default OldBannerSection;
