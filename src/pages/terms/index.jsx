import PageHeader from '../../components/general/PageHeader';
import headerImage from '../../assets/img/terms.png';
import FooterContact from '../../components/FooterContact';
import Paragraph1 from '../../components/terms/general-terms/Paragraph-1';
import { Container } from 'react-bootstrap';
import Paragraph2 from '../../components/terms/general-terms/paragraph-2';
import Paragraph3 from '../../components/terms/general-terms/paragraph-3';
import Paragraph4 from '../../components/terms/general-terms/Paragraph-4';
import Paragraph5 from '../../components/terms/general-terms/paragraph-5';
import Paragraph6 from '../../components/terms/general-terms/paragraph-6';
import Paragraph8 from '../../components/terms/general-terms/paragraph-8';
import Paragraph7 from '../../components/terms/general-terms/paragraph-7';
import Paragraph9 from '../../components/terms/general-terms/paragraph-9';
import Paragraph10 from '../../components/terms/general-terms/paragraph-10';
import Paragraph12 from '../../components/terms/general-terms/paragraph-12';
import Paragraph11 from '../../components/terms/general-terms/paragraph-11';
import Paragraph13 from '../../components/terms/general-terms/paragraph-13';
import Paragraph14 from '../../components/terms/general-terms/paragraph-14';
import Paragraph15 from '../../components/terms/general-terms/paragraph-15';
import Paragraph16 from '../../components/terms/general-terms/paragraph-16';
import Paragraph17 from '../../components/terms/general-terms/paragraph-17';
import { useEffect } from 'react';
import TopHead from '../../components/general/TopHead';

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <TopHead pageTitle="Terms & Conditions" />
      <PageHeader title="General Terms & Conditions" headerImage={headerImage} />
      <section className="terms">
        <Container>
          <Paragraph1 />
          <Paragraph2 />
          <Paragraph3 />
          <Paragraph4 />
          <Paragraph5 />
          <Paragraph6 />
          <Paragraph7 />
          <Paragraph8 />
          <Paragraph9 />
          <Paragraph10 />
          <Paragraph11 />
          <Paragraph12 />
          <Paragraph13 />
          <Paragraph14 />
          <Paragraph15 />
          <Paragraph16 />
          <Paragraph17 />
        </Container>
      </section>
      <FooterContact />
    </>
  );
};

export default TermsAndConditions;
