import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllBlogs } from '../features/allBlogs/allBlogsSlice';
import Blog from './Blog';

const BlogsContainer = () => {
   
    const {
        blogs,
        isLoading,
        page,
        totalJobs,
        numOfPages,
        search,
        category,
        price,
        language,
        level,
        sort,
      } = useSelector(store => store.allBlogs);
      const dispatch = useDispatch();
      console.log(blogs);

      useEffect(() => {
        dispatch(getAllBlogs());
      }, [page, search, category, price,language,level, sort]);

      if (isLoading) {
        return <div>Loading...</div>;
      }

      if (blogs.length === 0) {
        return (
            <h2>No blogs to display...</h2>
        );
      }


  return (
    <div>BlogsContainer</div>
  )
}

export default BlogsContainer