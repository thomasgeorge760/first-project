const express = require('express');
const { isSignedIn } = require('../controller/adminAuthentication');
const { createProduct, deleteProduct } = require('../controller/productControl');
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



router.post('/create', isSignedIn, upload.array('productImage',4), createProduct)

router.post('/delete',isSignedIn,deleteProduct)

// router.get('/products/:slug',)
//router.get('/getcategory', isSignedIn, getCategories)

module.exports = router;