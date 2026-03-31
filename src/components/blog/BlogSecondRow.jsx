import { Row, Col } from 'react-bootstrap';

import BlogSmallCard from './BlogSmallCard';

const BlogSecondRow = ({ learnSecondRowItems }) => {
  if (!learnSecondRowItems?.length) return null;

  return (
    <div className="hub-row3">
      <h2 className="hub-row3__heading">Latest picks</h2>
      <Row className="g-4">
        {learnSecondRowItems.map((learnItem, index) => (
          <Col key={learnItem.postUrl ?? index} xs={12} md={6} lg={4}>
            <BlogSmallCard {...learnItem} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BlogSecondRow;
