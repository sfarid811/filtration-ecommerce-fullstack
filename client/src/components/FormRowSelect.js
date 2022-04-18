import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleChange, clearFilters } from "../features/allBlogs/allBlogsSlice";

const FormRowSelect = () => {
  const dispatch = useDispatch();
  const {
    isLoading,
    search,
    category,
    price,
    language,
    level,

  } = useSelector((store) => store.allBlogs);

  const handleSearch = (e) => {
    if (isLoading) return;
    dispatch(handleChange({ name: e.target.name, value: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearFilters());
  };

  const categories = ["frontend", "backend", "devops", "design", "fullstack"];
  const prices = ["free", "paid"];
  const levels = ["beginner", "intermediate", "advanced"];
  const languages = ["arabic", "english", "frensh", "spanish"];

  const listCategories = ["all", ...categories];
  const listPrice = ["all", ...prices];
  const listLevels = ["all", ...levels];
  const listLanguages = ["all", ...languages];

  return (
    <form className="bg-light border p-4 rounded-3 my-4 z-index-9 position-relative">
      <div className="row g-3">
        <div className="col-xl-3">
          <input
            className="form-control me-1"
            type="search"
            value={search}
            name="search"
            onChange={(e) => {
              handleSearch(e);
            }}
            placeholder="Search over here"
          />
        </div>

        <div className="col-xl-8">
          <div className="row g-3">
            <div className="col-sm-6 col-md-3 pb-2 pb-md-0">
              <select
                className="form-select"
                name="category"
                value={category}
                onChange={handleSearch}
                aria-label=".form-select-sm example"
              >
                {listCategories.map((category, index) => {
                  return (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="col-sm-6 col-md-3 pb-2 pb-md-0">
              <select
                name="price"
                value={price}
                onChange={handleSearch}
                className="form-select"
                aria-label=".form-select-sm example"
              >
                {listPrice.map((price, index) => {
                  return (
                    <option key={index} value={price}>
                      {price}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="col-sm-6 col-md-3 pb-2 pb-md-0">
              <select
                name="level"
                value={level}
                onChange={handleSearch}
                className="form-select"
                aria-label=".form-select-sm example"
              >
                {listLevels.map((level, index) => {
                  return (
                    <option key={index} value={level}>
                      {level}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="col-sm-6 col-md-3 pb-2 pb-md-0">
              <select
                name="language"
                value={language}
                onChange={handleSearch}
                className="form-select"
                aria-label=".form-select-sm example"
              >
                {listLanguages.map((lang, index) => {
                  return (
                    <option key={index} value={lang}>
                      {lang}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
        {/* form-select-sm js-choice className="form-select" */}
        <div className="col-xl-1">
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            type="button"
            className="btn btn-primary mb-0 rounded z-index-1 w-100"
          >
            <i className="fa-solid fa-arrows-rotate"></i>
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormRowSelect;
