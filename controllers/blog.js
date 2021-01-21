const Blog = require("../models/blog");

exports.getBlog = async (req, res) => {
  try {
    const blog = await Blog.find({});
    res.json(blog);
  } catch (e) {
    res.json(e.message);
  }
};
//admin
exports.postBlog = async (req, res) => {
  const blog = new Blog(req.body);
  try {
    await blog.save();
    res.json({
      status: 201,
      message: "Successfully Uploaded",
    });
  } catch (e) {
    res.json({ status: 401, message: e.message });
  }
};

exports.getData = async (req, res) => {
  try {
    const blog = await Blog.findById(req.query.id);
    res.json(blog);
  } catch (e) {
    res.json(e.message);
  }
};
