import FooterContact from '../../components/FooterContact';
import TopHead from '../../components/general/TopHead';
import ServicesSection from '../../components/home/ServicesSection';
import { useEffect } from 'react';

const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <TopHead pageTitle="Our Services" />
      <div className="services-header" />
      <ServicesSection />
      <FooterContact />
    </>
  );
};

export default Services;
