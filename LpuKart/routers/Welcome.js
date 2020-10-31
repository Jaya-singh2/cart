
const express = require("express");
const router= express.Router();
const { check, validationResult } = require('express-validator');
const productController = require("../Controller/product");
router.get('/',productController.postWelcome);
router.get('/login',productController.postLogin);
router.post('/login',productController.getLogin);
router.get('/register',productController.postRegister);
router.post('/registered',[check("username").isAlphanumeric().withMessage("invalid product"),
check("password").isLength({min:6}).withMessage("password length should be minimum 6 character"),
check("email").isEmail().withMessage("invalid email syntax"),],productController.getRegister);
module.exports=router;