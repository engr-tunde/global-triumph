import * as Icon from 'react-bootstrap-icons';

const ListPropertySpec = ({
  propertyType,
  propertyClass,
  offerType,
  bedrooms,
  bathrooms,
  propertySize,
  neighborhood,
  city,
  country,
}) => {
  const rows = [
    { icon: Icon.HouseAdd, label: 'Property type', value: propertyType },
    { icon: Icon.BuildingCheck, label: 'Class', value: propertyClass },
    { icon: Icon.BadgeAd, label: 'Offer', value: offerType },
    { icon: Icon.HouseDoor, label: 'Bedrooms', value: bedrooms },
    { icon: Icon.Droplet, label: 'Bathrooms', value: bathrooms },
    { icon: Icon.BoundingBox, label: 'Size', value: propertySize },
    { icon: Icon.Geo, label: 'Neighborhood', value: neighborhood },
    { icon: Icon.GeoAlt, label: 'City', value: city },
    { icon: Icon.Globe, label: 'Country', value: country },
  ];

  const visible = rows.filter((r) => r.value != null && String(r.value).trim() !== '');

  if (!visible.length) return null;

  return (
    <section className="listing-pdp-section listing-pdp-spec" aria-labelledby="listing-spec-heading">
      <h2 id="listing-spec-heading" className="listing-pdp-section__title">
        Facts &amp; figures
      </h2>
      <ul className="listing-pdp-spec__grid">
        {visible.map((row) => {
          const Ico = row.icon;
          return (
            <li key={row.label} className="listing-pdp-spec__item">
              <span className="listing-pdp-spec__icon" aria-hidden>
                <Ico size={20} />
              </span>
              <div className="listing-pdp-spec__text">
                <span className="listing-pdp-spec__label">{row.label}</span>
                <span className="listing-pdp-spec__value">{row.value}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ListPropertySpec;
