const BLOG_SITE = import.meta.env.VITE_BLOG_SITE;

const BlogContent = ({ _id, title, cover, content, createdAt }) => {
  const readingTime = (content) => {
    const wordsPerMinute = 200; // Average reading speed in words per minute
    const wordCount = content.split(/\s+/).length; // Split the content into words and count them
    const readingTime = Math.ceil(wordCount / wordsPerMinute); // Calculate the reading time in minutes
    return readingTime;
  }

  const datePosted = new Date(createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <div className="flex p-3 bg-gray-200 rounded-md mobile-lg:py-2 mobile-lg:mx-1">
      <div className="w-1/3">
        <a href={`${BLOG_SITE}/post/${_id}`} target="_blank" rel="noopener noreferrer">
          <img src={cover} alt={title} />
        </a>
      </div>
      <div className="flex pl-3 flex-col justify-between w-2/3">
        <h2 className="text-[1rem] font-semibold text-blue-700 hover:underline mobile-md:text-sm mobile-xs:text-xs">
          <a id="blog-title" href={`${BLOG_SITE}/post/${_id}`} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <div className="flex gap-3 font-medium">
          <time className="text-xs  text-gray-600 mobile-md:text-[.71rem]">{datePosted}</time>
          <span className="text-xs  text-gray-600 mobile-md:text-[.71rem]">{readingTime(content)} min. read</span>
        </div>
      </div>
    </div>
  );
}

export default BlogContent;