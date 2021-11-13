const express = require('express');
const { signup, signin, isSignedIn } = require('../controller/userAuthentication');
const router = express.Router();

/* --------------------------------- sign in -------------------------------- */

router.post('/signin',signin);

/* --------------------------------- sign up -------------------------------- */

router.post('/signup',signup);

/* ---------------------------------- home ---------------------------------- */

router.post('/home',isSignedIn,(req,res)=>{
    res.status(200).json({
        user:'user home'
    })
})

module.exports = router;