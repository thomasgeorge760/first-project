const express = require('express');
const { isSignedIn } = require('../controller/adminAuthentication');
const { createProduct } = require('../controller/productControl');
const multer = require('multer')
const upload = multer({dest: 'uploads/'})

//const { createCategory, getCategories } = require('../controller/categoryControl');
const router = express.Router();



router.post('/create', isSignedIn, upload.single('productImage'), createProduct)
//router.get('/getcategory', isSignedIn, getCategories)

module.exports = router;