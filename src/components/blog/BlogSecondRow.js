import { Row } from "react-bootstrap";

import BlogSmallCard from "./BlogSmallCard";

const BlogSecondRow = ({learnSecondRowItems}) => {

    return (
        <>
            <div className="learn-row-2">
                <Row className="py-3 align-items-center justify-content-between">

                    {
                        learnSecondRowItems.map((learnItem, index) => {
                            return (
                                <BlogSmallCard key={index} {...learnItem} />
                            )
                        })
                    }

                </Row>
            </div>
        </>
    );
}
 
export default BlogSecondRow;