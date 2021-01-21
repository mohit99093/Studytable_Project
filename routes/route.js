const express = require("express");
const email = require("../controllers/email");
const user = require("../controllers/user");
const blogs = require("../controllers/blog");

const router = new express.Router();

router.post("/api/info", email.postContact);
router.post("/api/email", email.postEmail);
router.post("/api/blog", blogs.postBlog);
router.get("/api/blog", blogs.getBlog);
router.get("/api/blogs", blogs.getData);
router.post("/api/register", user.postRegister);
router.post("/api/signin", user.signin);
router.post("/api/forgot", user.sendOTP);
router.post("/api/changePassword", user.changePassword);

module.exports = router;
