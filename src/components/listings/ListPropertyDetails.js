const ListPropertyDetails = ({listingDetails}) => {
    return (
        <div className='details'>
            <h3>Property Details</h3>
            <p>
                {listingDetails}
            </p>
        </div>
    );
}
 
export default ListPropertyDetails;