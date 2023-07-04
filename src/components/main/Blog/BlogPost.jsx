import BlogContainer from './BlogContainer';

const BlogPost = () => {
  return (
    <section id="blog" className="mt-6 pt-8 tablet-lg:mt-2 mobile-lg:-mt-8 mobile-lg:pt-12">
      <h2
        className="text-[1.6rem] font-poppins tracking-section text-[#7F8AF0] border-blue-400 border-l-8 pl-3 tablet-lg:text-2xl tablet-md:hidden">
        Blog Post
      </h2>

      <h2
        className="hidden text-[#7F8AF0] text-[1.6rem] font-poppins tracking-section border-white border-l-8 pl-3 mb-5 tablet-md:block tablet-md:border-none mobile-lg:tracking-normal mobile-lg:mb-0 mobile-lg:text-[1.7rem] mobile-lg:pl-0 mobile-lg:border-l-0 mobile-lg:font-bold mobile-lg:font-mono mobile-md:text-[1.4rem] mobile-xs:text-xl">
        Blogs
      </h2>
      <h3
        className="hidden mobile-lg:block mb-7  ml-[.14rem] text-gray-300 text-base mobile-md:text-sm mobile-xs:text-xs text-justify">
        You can read here my latest blog post.
      </h3>

      <div className="w-[90%] ml-11  my-2 tablet-md:w-[75%] tablet-md:mx-auto mobile-lg:ml-0 mobile-lg:w-[98%] mt-8 mobile-lg:mt-5">
        <BlogContainer />
      </div>
    </section >
  );
}

export default BlogPost;