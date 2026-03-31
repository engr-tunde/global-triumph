import PageHeader from '../components/general/PageHeader';
import headerImage from '../assets/img/404.png';
import FooterContact from '../components/FooterContact';
import NotFoundBody from '../components/NotFoundBody';
import { useEffect } from 'react';
import TopHead from '../components/general/TopHead';

const NotFound = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <TopHead pageTitle="Page Not Found" />
      <PageHeader title="Page Not Found - Error 404!!!" headerImage={headerImage} />
      <NotFoundBody />
      <FooterContact />
    </>
  );
};

export default NotFound;
