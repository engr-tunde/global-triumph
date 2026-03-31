import BlogBigCard from './BlogBigCard';

const BlogTop = ({ learnItem1 }) => {
  if (!learnItem1?.length) {
    return <p className="blog-hub__empty">Nothing here yet — check back soon.</p>;
  }

  return (
    <>
      {learnItem1.map((learnItem) => (
        <BlogBigCard key={learnItem.postUrl ?? learnItem.postTitle} {...learnItem} />
      ))}
    </>
  );
};

export default BlogTop;
