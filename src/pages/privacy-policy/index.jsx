import PageHeader from '../../components/general/PageHeader';
import headerImage from '../../assets/img/privacy.png';
import FooterContact from '../../components/FooterContact';
import Paragraph1 from '../../components/privacy-policy/paragraph-1';
import { Container } from 'react-bootstrap';
import Paragraph2 from '../../components/privacy-policy/paragraph-2';
import Paragraph3 from '../../components/privacy-policy/paragraph-3';
import Paragraph4 from '../../components/privacy-policy/paragraph-4';
import Paragraph5 from '../../components/privacy-policy/paragraph-5';
import Paragraph6 from '../../components/privacy-policy/paragraph-6';
import Paragraph7 from '../../components/privacy-policy/paragraph-7';
import Paragraph8 from '../../components/privacy-policy/paragraph-8';
import Paragraph9 from '../../components/privacy-policy/paragraph-9';
import Paragraph10 from '../../components/privacy-policy/paragraph-10';
import Paragraph12 from '../../components/privacy-policy/paragraph-12';
import Paragraph11 from '../../components/privacy-policy/paragraph-11';
import Paragraph13 from '../../components/privacy-policy/paragraph-13';
import Paragraph14 from '../../components/privacy-policy/paragraph-14';
import { useEffect } from 'react';
import TopHead from '../../components/general/TopHead';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <TopHead pageTitle="Privacy Policy" />
      <PageHeader
        title="Privacy Policy for Global Triumph Market Plus Multiconcept (G.T.M.P.M)"
        headerImage={headerImage}
      />
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
        </Container>
      </section>
      <FooterContact />
    </>
  );
};

export default PrivacyPolicy;
