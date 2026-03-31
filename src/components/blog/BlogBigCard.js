import { Col, Nav, Row } from "react-bootstrap";

const BlogBigCard = ({postTitle, post, coverImage, postUrl}) => {

    
    return (
        <div className="inner">
            <Row className="py-3 align-items-center">
                <Col sm={12} lg={6}>
                    <img src={`${process.env.REACT_APP_IMG_BASEURL}/posts/${coverImage}`} alt={`Global Triumph Market Plus Multiconcept - ${coverImage}`} />
                </Col>
                <Col sm={12} lg={6}>
                    <div className="content">
                        <h3>{postTitle}</h3>
                        {post && <>
                            <p style={{fontSize:"14px !important"}} dangerouslySetInnerHTML={{__html: `...${post.substring(70, 130)}...`}}></p>
                        </>}
                        <Nav.Link href={`/post-details/${postUrl}`}>
                            Read More
                        </Nav.Link>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
 
export default BlogBigCard;