import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllBlogs } from "../features/allBlogs/allBlogsSlice";
import Blog from "./Blog";
import FormRowSelect from "./FormRowSelect";
import PageBtnContainer from "./PageBtnContainer";

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
  } = useSelector((store) => store.allBlogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBlogs());
  }, [dispatch, page, search, category, price, language, level, sort]);

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (blogs.length === 0) {
    return <h2>No blogs to display...</h2>;
  }

  return (
    <section className="py-4">
      <div className="container">
        {/* {totalBlogs} job{blogs.length > 1 && 's'} found */}
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
