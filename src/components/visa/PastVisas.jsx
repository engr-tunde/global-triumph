import PastVisasGallery from './PastVisasGallery';
import { Container, Row } from 'react-bootstrap';

const PastVisas = () => {

    return (
        <div className='project-details'>
            <Container>
                <Row >
                    <h3>PAST APPROVED VISAS</h3>
                    <p>Here are some of the visa processing that have been successfully granted through our platform.</p>
                    <PastVisasGallery />
                </Row>
            </Container>
        </div>
    );
}
 
export default PastVisas;