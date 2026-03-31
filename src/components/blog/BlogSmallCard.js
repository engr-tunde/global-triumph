import { Nav } from "react-bootstrap";

const BlogSmallCard = ({postTitle, coverImage, postUrl}) => {
    return (
        <div className="content">
            <img src={`${process.env.REACT_APP_IMG_BASEURL}/posts/${coverImage}`} alt={`Global Triumph Market Plus Multiconcept - ${coverImage}`} />
            <h3>{postTitle}</h3>
            <Nav.Link href={`/post-details/${postUrl}`}>
                Read More
            </Nav.Link>
        </div>
    );
}
 
export default BlogSmallCard;