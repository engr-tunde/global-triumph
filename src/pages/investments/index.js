import FooterContact from '../../components/FooterContact';
import InvestmentsBody from '../../components/investments/InvestmentsBody';
import InvestmentsHeader from '../../components/investments/InvestmentsHeader';
import InvestmentsFooter from '../../components/investments/InvestmentsFooter';
import { useEffect } from 'react';
import TopHead from '../../components/general/TopHead';

const Investments = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <TopHead pageTitle="Real Estate Investments " />
      {/* <PageHeader title='Our Investment Programs' headerImage={boxImage} /> */}
      <InvestmentsHeader />
      <InvestmentsBody />
      <InvestmentsFooter />
      <FooterContact />
    </>
  );
};

export default Investments;
