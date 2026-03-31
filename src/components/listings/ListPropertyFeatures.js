import { Col } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';

const ListPropertyFeatures = ({ features }) => {

    const propertyFeatures = features.map((featrure, index) => 
        <li key={index}>
            <Icon.Check size={16} color='#26683C' /> {featrure}
        </li>);

    return (
        <div className='features'>
            <h3>Property Features</h3>

            <Col sm={12} lg={6}>
                {
                    propertyFeatures
                }
            </Col>
        </div>
    );
}
 
export default ListPropertyFeatures;