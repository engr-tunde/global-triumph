import FooterContact from '../../components/FooterContact';
import VisaHead from '../../components/visa/VisaHead';
import VisaForm from '../../components/visa/VisaForm';
import { useEffect } from 'react';
import PastVisas from '../../components/visa/PastVisas';
import TopHead from '../../components/general/TopHead';

const Visa = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <TopHead pageTitle="Visa Services" />
      <VisaHead />

      <PastVisas />

      <VisaForm />
      <FooterContact />
    </>
  );
};

export default Visa;
