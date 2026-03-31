import FooterContact from '../../components/FooterContact';
import GallerytDetailsGallery from '../../components/gallery/GalleryDetailsGallery';
import { useEffect } from 'react';
import TopHead from '../../components/general/TopHead';

const GalleryDetails = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <TopHead pageTitle="Our Events Gallery" />
      <GallerytDetailsGallery />
      <FooterContact />
    </>
  );
};

export default GalleryDetails;
