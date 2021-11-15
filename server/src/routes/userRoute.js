const express = require('express');
const { signup, signin, isSignedIn } = require('../controller/userAuthentication');

const { userSignupValidate, userSignInValidate, isRequestValidated } = require('../validators/admin&user_validator');
const router = express.Router();

/* --------------------------------- sign in -------------------------------- */

router.post('/signin',userSignInValidate,isRequestValidated,signin);

/* --------------------------------- sign up -------------------------------- */

router.post('/signup',userSignupValidate,isRequestValidated,signup);

/* ---------------------------------- home ---------------------------------- */

router.post('/home',isSignedIn,(req,res)=>{
    res.status(200).json({
        user:'user home'
    })
})

module.exports = router;