import BlogBigCard from "./BlogBigCard";

const BlogTop = ({learnItem1}) => {

    return (
        <>
            {
                learnItem1.length < 1 ?
                <h4>Nothing for now</h4>
                :
                learnItem1.map((learnItem, index) => {
                    
                    return (
                        
                        <BlogBigCard key={index} {...learnItem} />
                    )
                })
            }
        </>
    );
}
 
export default BlogTop