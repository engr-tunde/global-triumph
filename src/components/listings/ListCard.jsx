import { Link } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';

const ListCard = ({ listingTitle, listingDetails, coverImage, price, features, listingID }) => {
  let featureArray;
  if (features) {
    const array = features;
    const originalArray = array.split(', ');
    featureArray = originalArray.slice(0, 3);
  } else {
    featureArray = undefined;
  }

  const formatter = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  });

  const propertyFeatures =
    featureArray &&
    featureArray.map((feat, index) => (
      <li key={index}>
        <Icon.Check2Circle className="list-card__check" aria-hidden />
        {feat}
      </li>
    ));

  const excerpt =
    listingDetails && listingDetails.length > 140
      ? `${listingDetails.substring(0, 140)}…`
      : listingDetails;

  return (
    <article className="listing-card">
      <Link to={`/list-details/${listingID}`} className="listing-card__media">
        <img
          src={`${process.env.REACT_APP_IMG_BASEURL}/shop/${coverImage}`}
          alt=""
          loading="lazy"
        />
        <span className="listing-card__shine" aria-hidden="true" />
      </Link>
      <div className="listing-card__body">
        <div className="listing-card__top">
          <h2 className="listing-card__title">
            <Link to={`/list-details/${listingID}`}>{listingTitle}</Link>
          </h2>
          <p className="listing-card__price">{formatter.format(price)}</p>
        </div>
        {propertyFeatures && <ul className="listing-card__features">{propertyFeatures}</ul>}
        <p className="listing-card__excerpt">{excerpt}</p>
        <div className="listing-card__actions">
          <Link to={`/list-details/${listingID}`} className="listing-card__btn listing-card__btn--primary">
            View details
          </Link>
          <Link to={`/list-details/${listingID}`} className="listing-card__btn listing-card__btn--ghost">
            Enquire
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ListCard;
