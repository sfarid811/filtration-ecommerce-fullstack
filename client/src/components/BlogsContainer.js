import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllBlogs, clearFilters } from "../features/allBlogs/allBlogsSlice";
import Blog from "./Blog";
import FormRowSelect from "./FormRowSelect";
import PageBtnContainer from "./PageBtnContainer";
import Spinner from './Spinner';



const BlogsContainer = () => {
  const {
    blogs,
    isLoading,
    page,
    totalBlogs,
    numOfPages,
    search,
    category,
    price,
    language,
    level,
    sort,
  } = useSelector((state) => state.allBlogs);
  
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearFilters());
  };

  useEffect(() => {
    dispatch(getAllBlogs());
  }, [dispatch, page, search, category, price, language, level, sort]);

  if (isLoading) {
    return <Spinner/> ;
  }

  if (blogs.length === 0) {
    return <h2 onClick={handleSubmit} className="text-center">No blogs to display... click me!</h2>;
  }

  return (
    <section className="py-4">
      <div className="container">
        {totalBlogs} blog{blogs.length > 1 && 's'} found
        <FormRowSelect />
        <div className="row">
          <div className="col-12">
            <div className="row g-4">
              {blogs.map((blog) => (
                <div className="col-sm-6 col-lg-4 col-xl-3" key={blog._id}>
                  <Blog blog={blog} />
                </div>
              ))}
            </div>
          </div>
        </div>
        {numOfPages > 1 && <PageBtnContainer />}
      </div>
    </section>
  );
};

export default BlogsContainer;
