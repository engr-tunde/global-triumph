import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';
import useFetch from '../../hooks/useFetch';
import loader from '../../assets/img/loader.gif';
import imgSilver from '../../assets/img/landing/invest-hero-house.jpg';
import imgPremium from '../../assets/img/landing/services-art-hero.jpg';
import imgGold from '../../assets/img/landing/why-choose-editorial.jpg';

const TIER_BG = {
  Silver: imgSilver,
  Premium: imgPremium,
  'Gold & Diamond': imgGold,
};

const InvestmentsBody = () => {
  const { data, loading, error } = useFetch(
    `${process.env.REACT_APP_API_URL}/investments/get-investment-data`
  );

  return (
    <section className="inv-catalog">
      <Container>
        <h2 className="inv-catalog__title">Investment categories</h2>
        <p className="inv-catalog__subtitle">
          Compare entry ranges, ceilings, and stated returns—then choose a plan that fits your goals.
        </p>

        <Row className="g-4 inv-catalog__grid">
          {data &&
            data.map((invest) => {
              const bg = TIER_BG[invest.title] || imgSilver;
              const bgStyle = {
                backgroundImage: `linear-gradient(165deg, rgba(4, 18, 12, 0.72) 0%, rgba(4, 18, 12, 0.35) 45%, rgba(4, 18, 12, 0.15) 100%), url(${bg})`,
              };
              return (
                <Col sm={12} lg={4} key={invest.id ?? invest.title}>
                  <article className="inv-card">
                    <div className="inv-card__visual" style={bgStyle} />
                    <div className="inv-card__body">
                      <div className="inv-card__icon-wrap">
                        <Icon.Coin className="inv-card__icon" aria-hidden />
                      </div>
                      <h3 className="inv-card__name">{invest.title}</h3>
                      <div className="inv-card__stats">
                        <div className="inv-card__stat">
                          <span className="inv-card__stat-label">From</span>
                          <p className="inv-card__stat-value">₦ {invest.min}</p>
                        </div>
                        <div className="inv-card__stat">
                          <span className="inv-card__stat-label">Up to</span>
                          <p className="inv-card__stat-value">₦ {invest.max}</p>
                        </div>
                        <div className="inv-card__stat inv-card__stat--full">
                          <span className="inv-card__stat-label">ROI / annum</span>
                          <p className="inv-card__roi">{invest.roi}</p>
                        </div>
                      </div>
                      <Link to="/signup" className="inv-card__cta">
                        Join plan
                      </Link>
                    </div>
                  </article>
                </Col>
              );
            })}
        </Row>

        {loading && (
          <div className="inv-catalog__state">
            <img src={loader} alt="" />
          </div>
        )}
        {error && (
          <p className="inv-catalog__state inv-catalog__state--err" role="alert">
            {error}
          </p>
        )}

        <div className="inv-catalog__finale" aria-hidden="true" />
      </Container>
    </section>
  );
};

export default InvestmentsBody;
