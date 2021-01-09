const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
  sub: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
