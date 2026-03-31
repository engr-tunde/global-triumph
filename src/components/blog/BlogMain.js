import LearnNewsCard from "./BlogBigCard";
import TrackVisibility from 'react-on-screen';


const BlogMain = ({learnMainItems}) => {
    return (
        <>
            {
                learnMainItems.map((learnItem, index) => {
                    return (
                        <TrackVisibility>
                            {({ isVisible}) =>
                                <div className={isVisible ? "animate-card" : "invisble-card" }>
                                    <LearnNewsCard key={index} {...learnItem} />
                                </div>
                            }
                        </TrackVisibility>
                    )
                })
            }
        </>
    );
}
 
export default BlogMain