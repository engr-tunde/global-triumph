import ProjectGallery from './ProjectGallery';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const ProjectDetailsGallery = () => {

    const { projectID } = useParams();
    const {data, loading, error} = useFetch(`${process.env.REACT_APP_API_URL}/projects/project/${projectID}`);

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
                    <h3>{data.projectTitle} ({data.status})</h3>
                    <p>{data.projectDetails}</p>
                    <ProjectGallery galleryImages={imagesArray} />
                </Row>}
                {loading && <div style={{color:"red !important", fontSize:"30px"}}>Loading...</div>}
                {error && <div style={{color:"red !important", fontSize:"30px"}}>{error}</div>} 
            </Container>
        </div>
    );
}
 
export default ProjectDetailsGallery;