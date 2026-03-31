import FooterContact from '../../components/FooterContact';
import GalleryBody from '../../components/gallery/GalleryBody';
import { useEffect } from 'react';
import TopHead from '../../components/general/TopHead';

const Gallery = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <TopHead pageTitle="Our Events Gallery" />
      <GalleryBody />
      <FooterContact />
    </>
  );
};

export default Gallery;
