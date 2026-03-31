import * as Icon from 'react-bootstrap-icons';

const ListPropertySpec = ({propertyType, propertyClass, offerType, bedrooms, bathrooms, propertySize, neighborhood, city, country}) => {

    return (
        <div className='spec'>
            
            <div className="spec-row">
                <li><Icon.HouseAdd size={16} color='#26683C' /> Property Type: &nbsp;<span> {propertyType}</span></li>
            
                <li><Icon.BuildingCheck size={16} color='#26683C' /> Property Class: &nbsp;<span> {propertyClass}</span></li>
            
                <li><Icon.BadgeAd size={16} color='#26683C' /> Offer Type: &nbsp;<span>{offerType}</span></li>
            </div>

            <div className="spec-row">
                <li><Icon.HouseCheck size={16} color='#26683C' /> Bedrooms: &nbsp;<span> {bedrooms}</span></li>
                
                <li><Icon.HouseExclamation size={16} color='#26683C' /> Bathrooms: &nbsp;<span> {bathrooms}</span></li>
            
                <li><Icon.BoundingBox size={16} color='#26683C' /> Property Size: &nbsp;<span>{propertySize}</span></li>
            </div>

            <div className="spec-row">
                <li><Icon.Geo size={16} color='#26683C' /> Neighborhood: &nbsp;<span> {neighborhood}</span></li>
                
                <li><Icon.GeoAlt size={16} color='#26683C' /> City: &nbsp;<span> {city}</span></li>
            
                <li><Icon.Globe size={16} color='#26683C' /> Located In: &nbsp;<span>{country}</span></li>
            </div>
        </div>
    );
}
 
export default ListPropertySpec;