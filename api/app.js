const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
require("dotenv").config();

const connectDB = require("./db/connect");

const blogsRouter = require("./routes/blogRoute");

app.use(express.json());
app.use(cors());

app.use("/api/v1/blogs", blogsRouter);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
