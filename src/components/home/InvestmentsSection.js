import { Col, Container, Row } from 'react-bootstrap';
import rotatingBG from '../../assets/img/rotating-bg.svg';
import investIcon from '../../assets/img/invest-icon.svg';
import house from '../../assets/img/hs.png';
import useFetch from '../../hooks/useFetch';
import loader from '../../assets/img/loader.gif';

const InvestmentsSection = () => {
  const { data, loading, error } = useFetch(
    `${process.env.REACT_APP_API_URL}/investments/get-investment-data`
  );

  return (
    <section className="home-investment">
      <Container>
        <Row>
          <h3>Incredible Investments For You...</h3>
          <p>We have the best real investments packages for you </p>
          <Col sm={12} className="center-img">
            <img src={house} alt="" />
          </Col>

          {data && (
            <>
              {data
                .filter((invest) => invest.title === 'Silver')
                .slice(0, 1)
                .map((inv, index) => {
                  const minNumber = inv.min.split(' ')[0];
                  const minValue = inv.min.split(' ')[1].substring(0, 1);
                  const min = `${minNumber}${minValue.toLowerCase()}`;

                  const maxNumber = inv.max.split(' ')[0];
                  const maxValue = inv.max.split(' ')[1].substring(0, 1);
                  const max = `${maxNumber}${maxValue.toLowerCase()}`;

                  return (
                    <div className="left-bx bx" key={index}>
                      <div className="bx-inner">
                        <div className="head">
                          <img src={investIcon} alt="Global Triumph Market Plus Multiconcept" />
                          <span>{inv.title} Investment</span>
                        </div>
                        <p className="price">
                          Between N{min} to N{max}
                        </p>
                        <p className="content">
                          The {inv.title} investment plan gives you a ROI of {inv.roi} per annum.
                        </p>
                      </div>
                    </div>
                  );
                })}

              {data
                .filter((invest) => invest.title === 'Premium')
                .slice(0, 1)
                .map((inv, index) => {
                  const minNumber = inv.min.split(' ')[0];
                  const minValue = inv.min.split(' ')[1].substring(0, 1);
                  const min = `${minNumber}${minValue.toLowerCase()}`;

                  const maxNumber = inv.max.split(' ')[0];
                  const maxValue = inv.max.split(' ')[1].substring(0, 1);
                  const max = `${maxNumber}${maxValue.toLowerCase()}`;

                  return (
                    <div className="right-bx bx" key={index}>
                      <div className="bx-inner">
                        <div className="head">
                          <img src={investIcon} alt="Global Triumph Market Plus Multiconcept" />
                          <span>{inv.title} Investment</span>
                        </div>
                        <p className="price">
                          Between N{min} to N{max}
                        </p>
                        <p className="content">
                          The {inv.title} investment plan gives you a ROI of {inv.roi} per annum.
                        </p>
                      </div>
                    </div>
                  );
                })}

              {data
                .filter((invest) => invest.title === 'Gold & Diamond')
                .slice(0, 1)
                .map((inv, index) => {
                  const minNumber = inv.min.split(' ')[0];
                  const minValue = inv.min.split(' ')[1].substring(0, 1);
                  const min = `${minNumber}${minValue.toLowerCase()}`;

                  const maxNumber = inv.max.split(' ')[0];
                  const maxValue = inv.max.split(' ')[1].substring(0, 1);
                  const max = `${maxNumber}${maxValue.toLowerCase()}`;

                  return (
                    <div className="bottom-bx bx" key={index}>
                      <div className="bx-inner">
                        <div className="head">
                          <img src={investIcon} alt="Global Triumph Market Plus Multiconcept" />
                          <span>{inv.title} Investment</span>
                        </div>
                        <p className="price">
                          Between N{min} to N{max}
                        </p>
                        <p className="content">
                          The {inv.title} investment plan gives you a ROI of {inv.roi} per annum.
                        </p>
                      </div>
                    </div>
                  );
                })}
            </>
          )}
          {loading && <img src={loader} alt="Global Triumph Market Plus Multiconcept" />}
          {error && <div style={{ color: 'red !important', fontSize: '22px' }}>{error}</div>}
        </Row>
        <img
          className="rotating-bg-outter"
          src={rotatingBG}
          alt="Global Triumph Market Plus Multiconcept"
        />
        <img
          className="rotating-bg-inner"
          src={rotatingBG}
          alt="Global Triumph Market Plus Multiconcept"
        />
      </Container>
    </section>
  );
};

export default InvestmentsSection;
