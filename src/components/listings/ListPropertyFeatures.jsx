import * as Icon from 'react-bootstrap-icons';

const ListPropertyFeatures = ({ features }) => {
  const list = (features || []).map((f) => String(f).trim()).filter(Boolean);
  if (!list.length) return null;

  return (
    <section
      className="listing-pdp-section listing-pdp-features"
      aria-labelledby="listing-features-heading"
    >
      <h2 id="listing-features-heading" className="listing-pdp-section__title">
        Features &amp; amenities
      </h2>
      <ul className="listing-pdp-features__list">
        {list.map((feature) => (
          <li key={feature} className="listing-pdp-features__item">
            <Icon.CheckCircleFill className="listing-pdp-features__check" size={18} aria-hidden />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ListPropertyFeatures;
