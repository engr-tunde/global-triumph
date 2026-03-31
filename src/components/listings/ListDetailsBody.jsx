import { Col, Container, Row } from 'react-bootstrap';
import ListDetailsGallery from './ListDetailsGallery';
import * as Icon from 'react-bootstrap-icons';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useMemo } from 'react';
import PageSeo from '../seo/PageSeo';
import SocialShareBar from '../seo/SocialShareBar';
import { buildListingSchema, getSiteOrigin, stripHtml, truncate } from '../../utils/seo';
import * as yup from 'yup';
import axios from 'axios';
import ListPropertyDetails from './ListPropertyDetails';
import ListPropertyFeatures from './ListPropertyFeatures';
import ListPropertySpec from './ListPropertySpec';
import useFetch from '../../hooks/useFetch';
import useFetchWithCred from '../../hooks/useFetcheWithCredentials';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { formatter } from '../../utils';
import ListingEnquiryForm from './ListingEnquiryForm';

const ListDetailsBody = () => {
  const history = useNavigate();
  const { listingID } = useParams();
  const { data, loading, error } = useFetch(
    `${process.env.REACT_APP_API_URL}/listings/listing/${listingID}`
  );
  const { data: userData, loading: userLoading } = useFetchWithCred(
    `${process.env.REACT_APP_API_URL}/users/dashboard`
  );

  let featureArray;
  let imagesArray;
  let listingTitle;

  if (data) {
    featureArray = data.features ? data.features.split(', ').map((f) => f.trim()).filter(Boolean) : [];
    imagesArray = data.images ? data.images.split(', ').map((i) => i.trim()).filter(Boolean) : [];
  } else {
    featureArray = undefined;
    imagesArray = undefined;
  }

  listingTitle = data ? data.listingTitle : undefined;

  const shareUrl = useMemo(
    () => `${getSiteOrigin()}/list-details/${listingID}`,
    [listingID]
  );

  const listingCover = useMemo(() => {
    if (!data?.images) return undefined;
    const first = data.images.split(', ')[0];
    return first ? `${process.env.REACT_APP_IMG_BASEURL}/shop/${first.trim()}` : undefined;
  }, [data]);

  const listingDescription = useMemo(() => {
    if (!data?.listingDetails) return 'Property listing — Global Triumph, Nigeria.';
    return truncate(stripHtml(data.listingDetails), 160);
  }, [data]);

  const listingSchema = useMemo(() => {
    if (!data) return undefined;
    return buildListingSchema({
      name: `${data.listingTitle} ${data.offerType || ''}`.trim(),
      description: data.listingDetails,
      url: shareUrl,
      imageUrl: listingCover,
      price: data.price,
    });
  }, [data, shareUrl, listingCover]);

  const mapsUrl = useMemo(() => {
    if (!data) return 'https://www.google.com/maps/search/?api=1&query=Lagos%2C+Nigeria';
    const q = [data.neighborhood, data.city, data.country].filter(Boolean).join(', ');
    return q
      ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`
      : 'https://www.google.com/maps/search/?api=1&query=Lagos%2C+Nigeria';
  }, [data]);

  const initialValues = userData
    ? {
        fullName: `${userData.data.fName} ${userData.data.lName}`,
        email: userData.data.email,
        phone: userData.data.phone,
        source: 'member',
        country: '',
        message: '',
      }
    : {
        fullName: '',
        email: '',
        phone: '',
        source: '',
        country: '',
        message: '',
      };

  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
  const validationSchema = yup.object().shape({
    fullName: yup.string().required('This field is required'),
    email: yup.string().email('invalid email').required('Email is required'),
    phone: yup
      .string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .required('Your contact phone is required'),
    source: yup.string().required('The source field is required'),
    country: yup.string().required('The country field is required'),
    message: yup.string().required('This field is required'),
  });

  const successNotification = (message) => toast.success(message);
  const errorNotification = (message) => toast.error(message);

  const handleSubmit = (values) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/listings/enquire`, {
        listingID: listingID,
        title: listingTitle,
        fullName: values.fullName,
        email: values.email,
        phone: values.phone,
        source: values.source,
        country: values.country,
        message: values.message,
      })
      .then((res) => {
        if (res.status === 200) {
          successNotification('Your enquiry has been successfully received');
          setTimeout(() => history('/shop'), 3000);
        } else {
          errorNotification('Failed to send your message');
        }
      })
      .catch(() => {
        errorNotification('Failed to send your message');
      });
  };

  return (
    <div className="listing-pdp">
      <PageSeo
        title={
          data
            ? `${data.listingTitle} ${data.offerType || ''}`.trim()
            : 'Property listing'
        }
        description={listingDescription}
        canonicalPath={`/list-details/${listingID}`}
        imageUrl={listingCover}
        structuredData={listingSchema}
        keywords={
          data
            ? `${data.listingTitle}, property for sale, Lagos, Global Triumph, ${data.offerType || ''}`
            : 'property listing, Lagos, Global Triumph'
        }
      />

      <Container className="listing-pdp__container">
        <nav className="listing-pdp__breadcrumb" aria-label="Breadcrumb">
          <Link to="/shop" className="listing-pdp__crumb-link">
            Property shop
          </Link>
          <span className="listing-pdp__crumb-sep" aria-hidden>
            /
          </span>
          <span className="listing-pdp__crumb-current">
            {data ? data.listingTitle : 'Listing'}
          </span>
        </nav>

        {loading && (
          <div className="listing-pdp__state listing-pdp__state--loading" role="status">
            Loading listing…
          </div>
        )}

        {error && (
          <div className="listing-pdp__state listing-pdp__state--error" role="alert">
            {String(error)}
          </div>
        )}

        {data && (
          <>
            <header className="listing-pdp__header">
              <div className="listing-pdp__header-main">
                {data.offerType && (
                  <span className="listing-pdp__badge">{data.offerType}</span>
                )}
                <h1 className="listing-pdp__title">
                  {data.listingTitle}
                </h1>
                <p className="listing-pdp__location">
                  {[data.neighborhood, data.city, data.country].filter(Boolean).join(' · ') ||
                    'Location on request'}
                </p>
                <ul className="listing-pdp__meta-pills" aria-label="Key facts">
                  {data.bedrooms != null && String(data.bedrooms).trim() !== '' && (
                    <li>
                      <Icon.DoorOpen size={16} aria-hidden /> {data.bedrooms} beds
                    </li>
                  )}
                  {data.bathrooms != null && String(data.bathrooms).trim() !== '' && (
                    <li>
                      <Icon.Droplet size={16} aria-hidden /> {data.bathrooms} baths
                    </li>
                  )}
                  {data.propertySize != null && String(data.propertySize).trim() !== '' && (
                    <li>
                      <Icon.BoundingBox size={16} aria-hidden /> {data.propertySize}
                    </li>
                  )}
                  {data.propertyType != null && String(data.propertyType).trim() !== '' && (
                    <li>
                      <Icon.House size={16} aria-hidden /> {data.propertyType}
                    </li>
                  )}
                </ul>
              </div>
              <SocialShareBar
                url={shareUrl}
                title={`${data.listingTitle} — Global Triumph`}
                description={listingDescription}
                className="listing-pdp__share"
              />
            </header>

            <ListDetailsGallery
              galleryImages={imagesArray}
              listingTitle={data.listingTitle}
            />

            <Row className="listing-pdp__grid g-4 g-lg-5">
              <Col lg={7} xl={8}>
                <ListPropertySpec {...data} />
                <ListPropertyFeatures features={featureArray} />
                <ListPropertyDetails listingDetails={data.listingDetails} />
              </Col>

              <Col lg={5} xl={4}>
                <aside className="listing-pdp-sidebar" aria-label="Pricing and enquiry">
                  <div className="listing-pdp-card listing-pdp-card--price">
                    <p className="listing-pdp-card__eyebrow">Listing price</p>
                    <p className="listing-pdp-card__price">{formatter.format(data.price)}</p>
                    <p className="listing-pdp-card__note">
                      Speak with our team for viewings, financing options, and due diligence.
                    </p>
                    <div className="listing-pdp-card__cta-row">
                      <a className="listing-pdp-btn listing-pdp-btn--primary" href="tel:+2348025670850">
                        <Icon.TelephoneFill size={18} aria-hidden />
                        Call
                      </a>
                      <a
                        className="listing-pdp-btn listing-pdp-btn--ghost"
                        href="https://wa.me/2348023323690"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <Icon.Whatsapp size={18} aria-hidden />
                        WhatsApp
                      </a>
                    </div>
                    <a href={mapsUrl} className="listing-pdp-card__map-link" target="_blank" rel="noreferrer noopener">
                      <Icon.GeoAlt size={18} aria-hidden />
                      Open in Google Maps
                    </a>
                  </div>

                  <div className="listing-pdp-card listing-pdp-card--form">
                    <h2 className="listing-pdp-card__form-title">Request a viewing</h2>
                    <p className="listing-pdp-card__form-lead">
                      Registered members: use your account email to unlock applicable benefits.
                    </p>
                    <ListingEnquiryForm
                      onSubmit={handleSubmit}
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                      userData={userData}
                      userLoading={userLoading}
                      listingTitle={data.listingTitle}
                    />
                  </div>
                </aside>
              </Col>
            </Row>
          </>
        )}
      </Container>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default ListDetailsBody;
