import { useEffect } from 'react';
import CareerMain from '../../components/career/CareerMain';
import FooterContact from '../../components/FooterContact';
import PageHeader from '../../components/general/PageHeader';
import headerImage from '../../assets/img/career.png';
import TopHead from '../../components/general/TopHead';

const Careers = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <TopHead pageTitle="Careers" />
      <PageHeader title="Careers" headerImage={headerImage} />
      <CareerMain />
      <FooterContact />
    </>
  );
};

export default Careers;
