const express = require('express');
const { isSignedIn } = require('../controller/adminAuthentication');
const { createProduct, getProductsBySlug } = require('../controller/productControl');
const multer = require('multer')
const path = require('path')
const shortid = require('shortid')

//const { createCategory, getCategories } = require('../controller/categoryControl');
const router = express.Router();


const storage = multer.diskStorage({
    destination: function (req,file,cb) {
        cb(null, path.join(path.dirname(__dirname),'uploads'))
    },
    filename: function (req, file, cb) {
        cb(null, shortid.generate() + '-' + file.originalname)
    }
})

const upload = multer({storage})



// router.post('/create', isSignedIn, upload.array('productImage',4), createProduct)
router.get('/:slug',getProductsBySlug)
//router.get('/getcategory', isSignedIn, getCategories)

module.exports = router;