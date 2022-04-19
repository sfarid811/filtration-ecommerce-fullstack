import React from "react";

const Error = ({handleSubmit}) => {
  return (
    <main>
      <section className="pt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <img
                src="https://eduport.webestica.com/assets/images/element/error404-01.svg" 
                className="h-200px h-md-400px mb-4"
                alt="page_NotFound"
              />

              <h1 className="text-danger mb-3">Product Not Found</h1>

              <h2>Oh no, something went wrong!</h2>

              <p className="mb-4">
              The product you are looking for does not exist in our database.
              </p>

              <span
                onClick={handleSubmit}
                className="btn btn-primary mb-0"
              >
               Try again!
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Error;
