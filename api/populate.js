require('dotenv').config()

const connectDB = require('./db/connect')
const Blog = require('./models/Blog')

const jsonBlogs = require('./data.json')

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    await Blog.deleteMany()
    await Blog.create(jsonBlogs)
    console.log('Success!!!!')
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start();