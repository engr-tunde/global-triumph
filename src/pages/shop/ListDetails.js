import FooterContact from '../../components/FooterContact';
import TopHead from '../../components/general/TopHead';
import ListDetailsBody from '../../components/listings/ListDetailsBody';
import { useEffect } from 'react';

const ListDetails = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <TopHead pageTitle="Property Listing Details" />
      <ListDetailsBody />
      <FooterContact />
    </>
  );
};

export default ListDetails;
