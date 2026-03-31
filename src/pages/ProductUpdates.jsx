import PageHeader from '../components/general/PageHeader';
import headerImage from '../assets/img/update.png';
import ProductUpdateBody from '../components/product-updates/ProductUpdateBody';
import FooterContact from '../components/FooterContact';
import { useEffect } from 'react';
import TopHead from '../components/general/TopHead';

const ProductUpdates = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <TopHead pageTitle="Product Updates" />
      <PageHeader title="Product Updates" headerImage={headerImage} />
      <ProductUpdateBody />
      <FooterContact />
    </>
  );
};

export default ProductUpdates;
