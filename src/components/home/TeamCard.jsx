import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import useFetch from '../../hooks/useFetch';
import loader from '../../assets/img/loader.gif';

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 701 }, items: 2 },
  mobile: { breakpoint: { max: 700, min: 0 }, items: 1 },
};

const TeamCard = ({ inView = false }) => {
  const { data, loading, error } = useFetch(
    `${process.env.REACT_APP_API_URL}/team/get-website-team-members`
  );

  return (
    <>
      {data && (
        <Carousel
          responsive={responsive}
          infinite
          autoPlay={inView}
          autoPlaySpeed={4500}
          keyBoardControl
          customTransition="transform 400ms ease-in-out"
          transitionDuration={400}
          containerClass="team-landing__carousel"
          itemClass="team-landing__carousel-item"
          className="team-landing__slider"
        >
          {data.map((team, idx) => (
            <div
              className="team-landing__member"
              key={team.id != null ? String(team.id) : `team-${idx}-${team.fullName}`}
            >
              <div className="team-landing__avatar-wrap">
                <img
                  src={`${process.env.REACT_APP_IMG_BASEURL}/team/${team.coverImage}`}
                  alt=""
                />
              </div>
              <h3 className="team-landing__name">{team.fullName}</h3>
              <p className="team-landing__role">{team.post}</p>
            </div>
          ))}
        </Carousel>
      )}
      {loading && (
        <div className="team-landing__state">
          <img src={loader} alt="Loading" />
        </div>
      )}
      {error && (
        <div className="team-landing__state team-landing__state--err" role="alert">
          {error}
        </div>
      )}
    </>
  );
};

export default TeamCard;
