const Contact = require("../models/contact");
const Email = require("../models/emails");
const Blog = require("../models/blog");

//contact
exports.postContact = async (req, res) => {
  const contact = new Contact(req.body);
  try {
    await contact.save();
    res.json({
      status: 201,
      message:
        "Thank you for taking interest in us. Our Team will have coffee with you soon !!",
    });
  } catch (e) {
    res.json({ status: 401, message: e.message });
  }
};
exports.postEmail = async (req, res) => {
  const email = new Email(req.body);
  try {
    await email.save();
    res.json({
      status: 201,
      message: "We got your email. Will update you soon !!",
    });
  } catch (e) {
    res.json({ status: 401, message: e.message });
  }
};

exports.getBlog = async (req, res) => {
  try {
    const blog = await Blog.find({});
    res.json({ data: blog });
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
