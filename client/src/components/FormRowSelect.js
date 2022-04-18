import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleChange, clearFilters } from "../features/allBlogs/allBlogsSlice";

const FormRowSelect = () => {
  const dispatch = useDispatch();
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

  const handleSearch = (e) => {
    if (isLoading) return;
    dispatch(handleChange({ name: e.target.name, value: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearFilters());
  };


  return (
    <form className="bg-light border p-4 rounded-3 my-4 z-index-9 position-relative">
      <div className="row g-3">
        <div className="col-xl-3">
          <input
            className="form-control me-1"
            type='search'
            value={search}
            name='search'
            onChange={handleSearch}
            placeholder="Search"
          />
        </div>

        <div className="col-xl-8">
          <div className="row g-3">
            <div className="col-sm-6 col-md-3 pb-2 pb-md-0">
              <select
                className="form-select"
                aria-label=".form-select-sm example"
              >
                <option value="">All</option>
                <option>frontend</option>
                <option>backend</option>
              </select>
            </div>

            <div className="col-sm-6 col-md-3 pb-2 pb-md-0">
              <select
                className="form-select"
                aria-label=".form-select-sm example"
              >
                <option value="">All</option>
                <option>Free</option>
                <option>Paid</option>
              </select>
            </div>

            <div className="col-sm-6 col-md-3 pb-2 pb-md-0">
              <select
                className="form-select"
                aria-label=".form-select-sm example"
              >
                <option value="">All</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>

            <div className="col-sm-6 col-md-3 pb-2 pb-md-0">
              <select
                className="form-select"
                aria-label=".form-select-sm example"
              >
                <option value="">Language</option>
                <option>English</option>
                <option>Francas</option>
              </select>
            </div>
          </div>
        </div>
        {/* form-select-sm js-choice className="form-select" */}
        {/* <div className="col-xl-1">
            <span className="btn-primary">Reset</span>
        </div> */}
      </div>
    </form>
  );
};

export default FormRowSelect;
