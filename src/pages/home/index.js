import FooterContact from '../../components/FooterContact';
import TopHead from '../../components/general/TopHead';
import BannerSection from '../../components/home/BannerSection';
import FeaturesSection from '../../components/home/FeaturesSection';
import InvestmentsSection from '../../components/home/InvestmentsSection';
import ProJectsSection from '../../components/home/ProJectsSection';
import ServicesSection from '../../components/home/ServicesSection';
import TeamSection from '../../components/home/TeamSection';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <TopHead pageTitle="Welcome to Global Triumph Market Plus Multiconcept" />
      <BannerSection />
      <FeaturesSection />
      <ServicesSection />
      <InvestmentsSection />
      <ProJectsSection />
      <TeamSection />
      <FooterContact />
    </>
  );
};

export default Home;
