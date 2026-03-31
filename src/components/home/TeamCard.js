import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useFetch from "../../hooks/useFetch";
import loader from '../../assets/img/loader.gif';


const TeamCard = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 701 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 700, min: 0 },
          items: 1
        }
      };

    const {data, loading, error} = useFetch(`${process.env.REACT_APP_API_URL}/team/get-website-team-members`);

    return (
      <>
        {data && <Carousel responsive={responsive} infinite={true} className="team-slider">
          {data.map((team) => {
            return ( 
              <div className="item" key={team.id}>
                <img src={`${process.env.REACT_APP_IMG_BASEURL}/team/${team.coverImage}`} alt={`Global Triumph Market Plus Multiconcept - ${team.coverImage}`} />
                <h4>{team.fullName}</h4>
                <p>{team.post}</p>
              </div>
            )
        })}
        </Carousel>}
        {loading && <img src={loader} alt="Global Triumph Market Plus Multiconcept" />}
        {error && <div style={{color:"red !important", fontSize:"25px"}}>{error}</div>}
      </>
    );
}
 
export default TeamCard;