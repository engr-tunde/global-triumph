import FooterContact from '../../components/FooterContact';
import ListDetailsBody from '../../components/listings/ListDetailsBody';
import { useEffect } from 'react';

const ListDetails = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <ListDetailsBody />
      <FooterContact />
    </>
  );
};

export default ListDetails;
