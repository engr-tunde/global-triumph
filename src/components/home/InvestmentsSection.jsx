import { useMemo } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import investIcon from '../../assets/img/invest-icon.svg';
import investHeroHouse from '../../assets/img/landing/invest-hero-house.jpg';
import useFetch from '../../hooks/useFetch';
import loader from '../../assets/img/loader.gif';
import { useInViewReveal } from '../../hooks/useInViewReveal';

const TIER_ORDER = ['Silver', 'Premium', 'Gold & Diamond'];

const TIER_SLUG = {
  Silver: 'silver',
  Premium: 'premium',
  'Gold & Diamond': 'gold',
};

const parseRange = (inv) => {
  const minNumber = inv.min.split(' ')[0];
  const minValue = inv.min.split(' ')[1].substring(0, 1);
  const min = `${minNumber}${minValue.toLowerCase()}`;
  const maxNumber = inv.max.split(' ')[0];
  const maxValue = inv.max.split(' ')[1].substring(0, 1);
  const max = `${maxNumber}${maxValue.toLowerCase()}`;
  return { min, max };
};

const InvestmentsSection = () => {
  const { data, loading, error } = useFetch(
    `${process.env.REACT_APP_API_URL}/investments/get-investment-data`
  );
  const [ref, visible] = useInViewReveal({ rootMargin: '0px 0px -6% 0px', threshold: 0.05 });

  const tiers = useMemo(() => {
    if (!data?.length) return [];
    return TIER_ORDER.map((title) => data.find((inv) => inv.title === title)).filter(Boolean);
  }, [data]);

  return (
    <section
      ref={ref}
      className={`invest-landing home-section-fade ${visible ? 'home-section-fade--visible' : ''} ${visible ? 'invest-landing--inview' : ''}`}
      aria-labelledby="invest-landing-heading"
    >
      <div className="invest-landing__deco" aria-hidden="true">
        <span className="invest-landing__blob invest-landing__blob--a" />
        <span className="invest-landing__blob invest-landing__blob--b" />
        <span className="invest-landing__blob invest-landing__blob--c" />
        <span className="invest-landing__grid-faint" />
      </div>

      <Container className="invest-landing__container">
        <header className={`invest-landing__header reveal ${visible ? 'reveal--visible' : ''}`}>
          <p className="invest-landing__eyebrow">Investment programs</p>
          <h2 id="invest-landing-heading" className="invest-landing__title">
            Incredible investments for you
          </h2>
          <p className="invest-landing__lead">
            Curated tiers designed to match your goals—transparent ranges and annual ROI at a glance.
          </p>
        </header>

        <div className={`invest-landing__hero-wrap ${visible ? 'invest-landing__hero-wrap--inview' : ''}`}>
          <div className="invest-landing__hero-ring" aria-hidden="true" />
          <div className="invest-landing__hero-img">
            <img src={investHeroHouse} alt="" />
          </div>
        </div>

        {loading && (
          <div className="invest-landing__state">
            <img src={loader} alt="Loading" />
          </div>
        )}
        {error && (
          <div className="invest-landing__state invest-landing__state--err" role="alert">
            {error}
          </div>
        )}

        {tiers.length > 0 && (
          <Row className="invest-landing__tiers g-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
            {tiers.map((inv, index) => {
              const { min, max } = parseRange(inv);
              const slug = TIER_SLUG[inv.title] || 'premium';
              return (
                <Col key={inv.title}>
                  <article
                    className={`invest-landing__card invest-landing__card--${slug}`}
                    style={{ '--inv-i': index }}
                  >
                    <div className="invest-landing__card-shimmer" aria-hidden="true" />
                    <div className="invest-landing__card-corner" aria-hidden="true" />
                    <p className="invest-landing__card-tier">{inv.title}</p>
                    <div className="invest-landing__card-head">
                      <div className="invest-landing__card-ico-wrap">
                        <img src={investIcon} alt="" className="invest-landing__card-ico" />
                      </div>
                      <h3 className="invest-landing__card-name">{inv.title} investment</h3>
                    </div>
                    <div className="invest-landing__card-range-block">
                      <span className="invest-landing__card-range-label">Entry range</span>
                      <p className="invest-landing__card-range">
                        N{min} — N{max}
                      </p>
                    </div>
                    <div className="invest-landing__card-roi">
                      <span className="invest-landing__card-roi-label">Annual ROI</span>
                      <p className="invest-landing__card-roi-value">{inv.roi}</p>
                    </div>
                    <p className="invest-landing__card-desc">
                      Structured for clarity—capital aligned with {inv.title.toLowerCase()} tier
                      objectives and reporting you can follow.
                    </p>
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

export default InvestmentsSection;
