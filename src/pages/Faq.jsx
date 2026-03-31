import FaqHeader from '../components/faq/FaqHeader';
import FaqBody from '../components/faq/FaqBody';
import FooterContact from '../components/FooterContact';
import { useEffect } from 'react';
import TopHead from '../components/general/TopHead';

const Faq = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <TopHead pageTitle="Frequently Asked Questions" />
      <FaqHeader />
      <FaqBody />
      <FooterContact />
    </>
  );
};

export default Faq;
