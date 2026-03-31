import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CareerDetailsComponent from '../../components/career/CareerDetailsComponent';
import FooterContact from '../../components/FooterContact';
import PageHeader from '../../components/general/PageHeader';
import useFetch from '../../hooks/useFetch';
import headerImage from '../../assets/img/career.png';
import TopHead from '../../components/general/TopHead';

const CareerDetails = () => {
  const { careerID } = useParams();
  const { data, loading, error } = useFetch(
    `${process.env.REACT_APP_API_URL}/careers/career/${careerID}`
  );

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <TopHead pageTitle="Careers" />
      {data && (
        <PageHeader title={`${data.status} Position - ${data.title}`} headerImage={headerImage} />
      )}
      {data && <CareerDetailsComponent {...data} />}
      {loading && <div style={{ color: 'red !important', fontSize: '30px' }}>Loading...</div>}
      {error && <div style={{ color: 'red !important', fontSize: '30px' }}>{error}</div>}
      <FooterContact />
    </>
  );
};

export default CareerDetails;
