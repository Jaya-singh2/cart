const express = require("express");
const router = express.Router();
const path = require("path");
const productController = require("../Controller/product");
router.get("/product", productController.showCart);
router.get("/remove/:id", productController.removeData);
module.exports = router;
