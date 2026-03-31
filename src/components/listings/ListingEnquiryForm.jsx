import { Col, Row } from 'react-bootstrap';
import { ErrorMessage, Formik } from 'formik';
import { COUNTRY_OPTIONS } from '../../data/countries';

const ListingEnquiryForm = ({
  onSubmit,
  initialValues,
  validationSchema,
  userData,
  userLoading,
  listingTitle,
}) => {
  if (userLoading) {
    return (
      <div className="listing-pdp-form-skeleton" aria-hidden>
        <div className="listing-pdp-form-skeleton__line" />
        <div className="listing-pdp-form-skeleton__line" />
        <div className="listing-pdp-form-skeleton__line listing-pdp-form-skeleton__line--short" />
      </div>
    );
  }

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
      enableReinitialize
    >
      {({ values, handleBlur, handleChange, handleSubmit }) => (
        <form className="listing-pdp-form" onSubmit={handleSubmit} noValidate>
          <Row className="g-3">
            <Col xs={12}>
              <label htmlFor="listing-enquiry-fullName">Full name</label>
              <input
                type="text"
                id="listing-enquiry-fullName"
                name="fullName"
                value={values.fullName}
                disabled={!!userData}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your full name"
                autoComplete="name"
              />
              <ErrorMessage name="fullName" component="span" className="error" />
            </Col>
            <Col xs={12}>
              <label htmlFor="listing-enquiry-email">Email</label>
              <input
                type="email"
                id="listing-enquiry-email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={!!userData}
                placeholder="you@example.com"
                autoComplete="email"
              />
              <ErrorMessage name="email" component="span" className="error" />
            </Col>
            <Col xs={12}>
              <label htmlFor="listing-enquiry-phone">Phone</label>
              <input
                type="tel"
                id="listing-enquiry-phone"
                name="phone"
                value={values.phone}
                disabled={!!userData}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="+234 …"
                autoComplete="tel"
              />
              <ErrorMessage name="phone" component="span" className="error" />
            </Col>
            <Col xs={12}>
              <label htmlFor="listing-enquiry-source">How did you hear about us?</label>
              <select
                name="source"
                id="listing-enquiry-source"
                value={values.source}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                {userData ? (
                  <option value="member">Member</option>
                ) : (
                  <>
                    <option value="">Select an option</option>
                    <option value="Website">Website</option>
                    <option value="Property Investment Show">Property Investment Show</option>
                    <option value="Twitter">Twitter</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Instagram">Instagram</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Email">Email</option>
                  </>
                )}
              </select>
              <ErrorMessage name="source" component="span" className="error" />
            </Col>
            <Col xs={12}>
              <label htmlFor="listing-enquiry-country">Country</label>
              <select
                name="country"
                id="listing-enquiry-country"
                value={values.country}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                {COUNTRY_OPTIONS.map((c, i) => (
                  <option key={`country-opt-${i}`} value={c}>
                    {c || 'Select country'}
                  </option>
                ))}
              </select>
              <ErrorMessage name="country" component="span" className="error" />
            </Col>
            <Col xs={12}>
              <label htmlFor="listing-enquiry-message">Your message</label>
              <div className="listing-pdp-form__listing-ref" id="listing-enquiry-ref">
                {listingTitle}
              </div>
              <textarea
                id="listing-enquiry-message"
                name="message"
                rows={5}
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Ask a question or request a viewing…"
              />
              <ErrorMessage name="message" component="span" className="error" />
            </Col>
          </Row>
          <button type="submit" className="listing-pdp-form__submit">
            Send enquiry
          </button>
        </form>
      )}
    </Formik>
  );
};

export default ListingEnquiryForm;
