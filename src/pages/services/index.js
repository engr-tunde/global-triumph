import FooterContact from '../../components/FooterContact';
import TopHead from '../../components/general/TopHead';
import ServicesSection from '../../components/home/ServicesSection';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Our Services - Global Triumph Market Plus Multiconcept</title>
        <meta
          name="description"
          content="The services we offer on Global Triumph Market Plus Multiconcept - Real estate investments and properties, properties for sales"
        />
      </Helmet>
      <TopHead pageTitle="Our Services" />
      <div className="services-header"></div>
      <ServicesSection />
      <FooterContact />
    </>
  );
};

export default Services;
