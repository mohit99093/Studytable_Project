const express = require("express");
const ctrl = require("../controllers/control");

const router = new express.Router();

router.post("/api/info", ctrl.postContact);
router.post("/api/email", ctrl.postEmail);
router.post("/api/blog", ctrl.postBlog);
router.get("/api/blog", ctrl.getBlog);
router.get("/api/blogs", ctrl.getData);

module.exports = router;
