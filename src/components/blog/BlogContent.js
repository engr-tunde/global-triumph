import { Container } from "react-bootstrap";

const BlogContent = ({data}) => {

    return (
        <section className="blog-content">
            <Container>
                <div className="inner">
                    <h3>{data.postTitle}</h3>

                    <img src={`${process.env.REACT_APP_IMG_BASEURL}/posts/${data.coverImage}`} alt="Global Triumph Market Plus Multiconcept" />

                    <div className="content" dangerouslySetInnerHTML={{__html: data.post}} />
                </div>
            </Container>
        </section>
    );
}
 
export default BlogContent;