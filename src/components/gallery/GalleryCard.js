import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const GalleryCard = ({ eventTitle, eventCoverImage, eventID }) => {
    return (
        <Col sm={12} lg={4} >
            <div className="propertyCard">
                <img src={`${process.env.REACT_APP_IMG_BASEURL}/gallery/${eventCoverImage}`} alt={`Global Triumph Market Plus Multiconcept - ${eventCoverImage}`} />
                <Link to={`/event-gallery/${eventID}`} className="content">
                    {eventTitle}
                </Link>
            </div>
        </Col>
    )
}
 
export default GalleryCard;