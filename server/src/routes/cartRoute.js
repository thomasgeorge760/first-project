const express = require('express');
const { isSignedIn } = require('../controller/userAuthentication');

const { addToCart, getCart, addAddress, getAddress, deleteAddress } = require('../controller/cartControl');
const router = express.Router();


router.get('/:id',getCart)
router.post('/add', addToCart)
// router.get('/getCart', isSignedIn)
router.post('/checkout/addAddress',addAddress)
router.get('/checkout/getAddress/:id',getAddress)
router.post('/checkout/deleteAddress',deleteAddress)

module.exports = router;