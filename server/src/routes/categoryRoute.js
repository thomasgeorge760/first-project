const express = require('express');
const { isSignedIn } = require('../controller/adminAuthentication');

const { createCategory, getCategories } = require('../controller/categoryControl');
const router = express.Router();


router.post('/create', isSignedIn, createCategory)
router.get('/getcategory', isSignedIn, getCategories)

module.exports = router;