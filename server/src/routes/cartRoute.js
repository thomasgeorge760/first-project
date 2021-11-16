const express = require('express');
const { isSignedIn } = require('../controller/userAuthentication');

const { addToCart } = require('../controller/cartControl');
const router = express.Router();


router.get('/',isSignedIn)
router.post('/add', isSignedIn, addToCart)
router.get('/getcart', isSignedIn)

module.exports = router;