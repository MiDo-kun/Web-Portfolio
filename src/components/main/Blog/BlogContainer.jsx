import { useEffect, useState } from 'react';
import BlogContent from './BlogContent';

const BlogContainer = () => {
  const [BlogInfo, setBlogInfo] = useState([]);
  const BLOG_ENDPOINT = import.meta.env.VITE_BLOG_ENDPOINT;

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const response = await fetch(BLOG_ENDPOINT + '/posts');
    const jsonData = await response.json();
    setBlogInfo(jsonData);
  }

  return (
    <div className="grid gap-7 grid-cols-2 -ml-5 laptop-sm:grid-cols-2 tablet-lg:grid-cols-1 mobile-lg:gap-5 mobile-lg:ml-0">
      {!BlogInfo.length && <p className="text-xs text-gray-200">Fetching Blogs...</p>}
      {
        BlogInfo.slice(0, 8).map((blog, index) => (
          <div key={index} className={`tablet-lg:${index < 5 ? 'block' : 'hidden'}`}>
            <BlogContent {...blog} />
          </div>
        ))
      }
    </div >
  )
}

export default BlogContainer;