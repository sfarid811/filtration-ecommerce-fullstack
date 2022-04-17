const Blog = require('../models/Blog');
const StatusCodes = require('http-status-codes');


const getAllBlogs = async (req, res) => {
    const { category, price, level, language, sort, search } = req.query;
  
    const queryObject = {};
   
    //http://localhost:8000/api/v1/blogs?category=frontend&language=arabic&sort=oldest&page=1&search=Learn HTML
  
    if (category && category !== 'all') {
      queryObject.category = category
    }
    if (price && price !== 'all') {
      queryObject.price = price
    }
    if (level && level !== 'all') {
        queryObject.level = level
      }
      if (language && language !== 'all') {
        queryObject.language = language
      }
    if (search) {
      queryObject.name = { $regex: search, $options: 'i' }
    }
    // NO AWAIT
  
    let result = Blog.find(queryObject)
  
    // chain sort conditions
  
    if (sort === 'latest') {
      result = result.sort('-createdAt')
    }
    if (sort === 'oldest') {
      result = result.sort('createdAt')
    }
    if (sort === 'a-z') {
      result = result.sort('name')
    }
    if (sort === 'z-a') {
      result = result.sort('-name')
    }
  
  
    // setup pagination
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 4
    const skip = (page - 1) * limit
  
    result = result.skip(skip).limit(limit)
  
    const blogs = await result
  
    const totalBlogs = await Blog.countDocuments(queryObject)
    const numOfPages = Math.ceil(totalBlogs / limit)
  
    res.status(StatusCodes.OK).json({ blogs, totalBlogs, numOfPages })


  }


  module.exports = {
    getAllBlogs
  }