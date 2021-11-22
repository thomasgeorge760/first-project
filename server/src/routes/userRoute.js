const express = require('express');
const { signup, signin, isSignedIn, signout } = require('../controller/userAuthentication');

const { userSignupValidate, userSignInValidate, isRequestValidated } = require('../validators/admin&user_validator');
const router = express.Router();

/* --------------------------------- sign in -------------------------------- */

router.post('/signin',userSignInValidate,isRequestValidated,signin);

/* --------------------------------- sign up -------------------------------- */

router.post('/signup',userSignupValidate,isRequestValidated,signup);

/* ---------------------------------- home ---------------------------------- */

router.get('/',isSignedIn,(req,res)=>{
    res.status(200).json({
        user:'user home'
    })
})

/* -------------------------------- sign out -------------------------------- */

router.post('/signout',signout)

module.exports = router;