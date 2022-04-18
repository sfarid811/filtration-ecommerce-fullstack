import React from 'react'

const Blog = ({blog}) => {
  return (
    <div className="card shadow h-100">
    <img
      src={blog.imgUrl}
      className="card-img-top"
      alt={blog.name}
    />

    <div className="card-body pb-0">
      <div className="d-flex justify-content-between mb-2">
        <a
          href="course-grid-2.html#"
          className="badge bg-purple bg-opacity-10 text-purple"
        >
          {blog.level.charAt(0).toUpperCase() + blog.level.slice(1)}
        </a>
        
      </div>

      <h5 className="card-title">
        <a href="course-grid-2.html#">
         {blog.name}
        </a>
      </h5>

      <p className="mb-2">
        {blog.description}
      </p>
    </div>

   
  </div>
  )
}

export default Blog