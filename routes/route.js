const express = require("express");
const ctrl = require("../controllers/control");

const router = new express.Router();

router.post("/api/info", ctrl.postContact);
router.post("/api/email", ctrl.postEmail);
router.get("/api/blog", ctrl.getBlog);

module.exports = router;
