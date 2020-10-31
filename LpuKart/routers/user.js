const express = require("express");
const router = express.Router();
const path = require("path");
const productController = require("../Controller/product");
router.get("/", productController.showProduct);
router.get("/products/:productId", productController.fetchProduct);
router.post("/cart/:Id", productController.addInCart);

module.exports = router;
