const express = require("express");
const router = express.Router();
const controller = require("../Controller/product");

router.get("/", controller.getHomePage);

module.exports = router;
