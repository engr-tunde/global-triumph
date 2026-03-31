import Achivements from '../../components/about/Achivements';
import Main from '../../components/about/Main';
import Team from '../../components/about/Team';
import FooterContact from '../../components/FooterContact';
import { useEffect } from 'react';
import TopHead from '../../components/general/TopHead';

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <TopHead pageTitle="About Us" />
      <Main />
      <Achivements />
      <Team />

      <FooterContact />
    </>
  );
};

export default About;
