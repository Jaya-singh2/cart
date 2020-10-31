const express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator');
//path is a core module of nodejs
//const path = require("path");
const productController = require("../Controller/product");
router.get("/", productController.getAdminPage);
router.get("/addProduct", productController.getAddProductPage);
router.post("/product",[check("product").isLength({min:2}).withMessage("length should be minimum 2 character").isAlphanumeric().withMessage("invalid product"),
check("name").isLength({min:2}).withMessage("length should be minimum 2 character").isAlphanumeric().withMessage("invalid product name"),
check("brand").isLength({min:2}).withMessage("length should be minimum 2 character").isAlphanumeric().withMessage("invalid brand name"),
check("price").isLength({min:5}).withMessage("price must be above 20000").isNumeric().withMessage("invalid price"),], productController.postAddProductPage);
router.get("/updateProduct", productController.updateProductPage);
router.post("/updateProduct/:ID", productController.updateProduct);
router.get("/updateform/:id", productController.updateForm);
router.get("/remove/:id", productController.removeStoreData);
module.exports = {
  routes: router,
};

