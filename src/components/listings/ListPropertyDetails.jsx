const looksLikeHtml = (s) => typeof s === 'string' && /<[a-z][\s\S]*>/i.test(s);

const ListPropertyDetails = ({ listingDetails }) => {
  if (listingDetails == null || String(listingDetails).trim() === '') return null;

  const raw = String(listingDetails);
  const html = looksLikeHtml(raw);

  return (
    <section
      className="listing-pdp-section listing-pdp-about"
      aria-labelledby="listing-about-heading"
    >
      <h2 id="listing-about-heading" className="listing-pdp-section__title">
        Description
      </h2>
      {html ? (
        <div
          className="listing-pdp-prose listing-pdp-prose--html"
          dangerouslySetInnerHTML={{ __html: raw }}
        />
      ) : (
        <div className="listing-pdp-prose">
          <p>{raw}</p>
        </div>
      )}
    </section>
  );
};

export default ListPropertyDetails;
