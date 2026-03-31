import { Link } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';

const ListCard = ({ listingTitle, listingDetails, coverImage, price, features, listingID }) => {

    let featureArray;
    if(features) {
        const array = features;
        const originalArray = array.split(', ');
        featureArray = originalArray.slice(0, 3)
    } else {
        featureArray = undefined;
    }

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'NGN',
    });

    const propertyFeatures = featureArray && featureArray.map((feat, index) => 
        <li key={index}>
            <Icon.Check size={16} color='#BBD51A' /> {feat}
        </li>);

    return (
        <div className="list-card">
            <div className="left">
                <img 
                    src={`${process.env.REACT_APP_IMG_BASEURL}/shop/${coverImage}`} 
                    alt={`Global Triumph Market Plus Multiconcept - ${coverImage}`} 
                    height="75"
                />
            </div>
            <div className="center">
                <h3>{listingTitle}</h3>
                
                <ul>
                    {propertyFeatures}
                </ul>

                <p>{listingDetails.substring(0, 100)}</p>
            </div>
            <div className="right">
                <p>{formatter.format(price)}</p>
                <Link to={`/list-details/${listingID}`} className="details">
                    DETAILS
                </Link>
                <Link to="/list-details" className="contact">
                    CONTACT
                </Link>
            </div>                
        </div>
    );
}
 
export default ListCard;