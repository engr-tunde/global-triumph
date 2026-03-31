import PageHeader from '../../components/general/PageHeader';
import headerImage from '../../assets/img/contact.png';
import { useEffect } from 'react';
import ContactForm from '../../components/contact/ContactForm';
import TopHead from '../../components/general/TopHead';

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <TopHead pageTitle="Contact Us" />
      <PageHeader title="Get in Touch With Us" subtitle="" headerImage={headerImage} />
      <ContactForm />
    </>
  );
};

export default Contact;
