import { Container, Row } from 'react-bootstrap';
import Gallery from './Gallery';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const GallerytDetailsGallery = () => {

    const { eventID } = useParams();
    const {data, loading, error} = useFetch(`${process.env.REACT_APP_API_URL}/gallery/gallery/${eventID}`);

    let imagesArray;
    if(data) {
        const array2 = data.images;
        imagesArray = array2.split(', ');
    } else {
        imagesArray = undefined;
    }

    return (
        <div className='project-details'>
            <Container>
                {data && <Row >
                    <h3>{data.eventTitle}</h3>
                    <p> {data.eventDetails}</p>
                    <Gallery galleryImages={imagesArray} />
                </Row>}
                {loading && <div style={{color:"red !important", fontSize:"30px"}}>Loading...</div>}
                {error && <div style={{color:"red !important", fontSize:"30px"}}>{error}</div>} 
            </Container>
        </div>
    );
}
 
export default GallerytDetailsGallery;