import { Col, Container, Row } from 'react-bootstrap';
import ListCard from './ListCard';
import * as Icon from 'react-bootstrap-icons';
import useFetch from '../../hooks/useFetch';

const ShopBody = () => {
  const { data, loading, error } = useFetch(
    `${process.env.REACT_APP_API_URL}/listings/get-all-listings`
  );

  return (
    <section className="shop-page">
      <div className="shop-page__hero">
        <Container>
          <p className="shop-page__eyebrow">Listings</p>
          <h1 className="shop-page__title">Properties for sale</h1>
          <p className="shop-page__lead">
            Browse verified inventory. Open a listing for full specs, media, and an enquiry form—or
            reach our desk directly on the right.
          </p>
        </Container>
      </div>

      <Container className="shop-page__body">
        <Row className="g-4">
          <Col lg={8}>
            <div className="shop-page__list">
              {data &&
                data.map((sale) => {
                  return <ListCard key={sale.id} {...sale} />;
                })}
              {loading && <p className="shop-page__state">Loading listings…</p>}
              {error && (
                <p className="shop-page__state shop-page__state--err" role="alert">
                  {error}
                </p>
              )}
            </div>
          </Col>

          <Col lg={4}>
            <aside className="shop-sidebar">
              <h2 className="shop-sidebar__title">Concierge desk</h2>
              <p className="shop-sidebar__text">General contact for all properties on sale.</p>
              <ul className="shop-sidebar__contacts">
                <li>
                  <a href="https://wa.me/+2348023323690">
                    <Icon.Whatsapp className="shop-sidebar__ico" aria-hidden />
                    +234 802 332 3690
                  </a>
                </li>
                <li>
                  <a href="tel:+2348025670850">
                    <Icon.Telephone className="shop-sidebar__ico" aria-hidden />
                    +234 802 567 0850
                  </a>
                </li>
                <li>
                  <a href="tel:+2349030096229">
                    <Icon.PhoneFlip className="shop-sidebar__ico" aria-hidden />
                    +234 903 009 6229
                  </a>
                </li>
              </ul>
            </aside>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ShopBody;
