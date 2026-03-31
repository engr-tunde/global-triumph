import FooterContact from '../../components/FooterContact';
import TopHead from '../../components/general/TopHead';
import ShopBody from '../../components/listings/ShopBody';
import { useEffect } from 'react';

const Listings = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <TopHead pageTitle="Property Listings" />
      <ShopBody />
      <FooterContact />
    </>
  );
};

export default Listings;
