import BlogArchiveCard from './BlogArchiveCard';

const BlogMain = ({ learnMainItems }) => {
  if (!learnMainItems?.length) return null;

  return (
    <div className="hub-archive">
      <h2 className="hub-archive__heading">More articles</h2>
      <div className="hub-archive__grid">
        {learnMainItems.map((learnItem) => (
          <BlogArchiveCard key={learnItem.postUrl ?? learnItem.postTitle} {...learnItem} />
        ))}
      </div>
    </div>
  );
};

export default BlogMain;
