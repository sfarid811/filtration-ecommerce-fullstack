import { useSelector, useDispatch } from "react-redux";
import { changePage } from "../features/allBlogs/allBlogsSlice";

const PageBtnContainer = () => {

  const { numOfPages, page } = useSelector((state) => state.allBlogs);

  const dispatch = useDispatch();

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });
  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > numOfPages) {
      newPage = 1;
    }
    dispatch(changePage(newPage));
  };
  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = numOfPages;
    }
    dispatch(changePage(newPage));
  };

  return (
    <div className="col-12">
      <nav className="mt-4 d-flex justify-content-center" aria-label="navigation">
        <ul className="pagination pagination-primary-soft d-inline-block d-md-flex rounded mb-0 pe-auto">
        <li className="page-item mb-0"
        onClick={prevPage}
        ><button className="page-link" tabIndex="-1"><i className="fas fa-angle-double-left"></i></button></li>
        {pages.map((pageNumber) => {
          return (
          <li 
          key={pageNumber}
          className={pageNumber === page ? 'page-item mb-0 active' : 'page-item'}
          onClick={() => dispatch(changePage(pageNumber))}
          >
            <button className="page-link">{pageNumber}</button>
          </li>
          );
        })}
         	<li className="page-item mb-0"
           onClick={nextPage}
           ><button className="page-link"><i className="fas fa-angle-double-right"></i></button></li>
        </ul>
      </nav>
    </div>
  );
};

export default PageBtnContainer;
