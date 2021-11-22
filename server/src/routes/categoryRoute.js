const express = require('express');
const { isSignedIn } = require('../controller/adminAuthentication');

const { createCategory, getCategories, editCategory, deleteCategory } = require('../controller/categoryControl');
const router = express.Router();
const multer = require('multer')
const path = require('path')
const shortid = require('shortid')



const storage = multer.diskStorage({
    destination: function (req,file,cb) {
        cb(null, path.join(path.dirname(__dirname),'uploads'))
    },
    filename: function (req, file, cb) {
        cb(null, shortid.generate() + '-' + file.originalname)
    }
})

const upload = multer({storage})


/* ---------------------------------- admin --------------------------------- */

router.post('/create', isSignedIn, upload.single('categoryImage'), createCategory)
router.get('/getcategory', isSignedIn, getCategories)
router.post('/edit',isSignedIn, upload.single('categoryImage'), editCategory)
router.post('/delete',isSignedIn, upload.single('categoryImage'), deleteCategory)







module.exports = router;