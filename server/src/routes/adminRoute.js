const express = require('express');
const { signin, isSignedIn, signout, blockUser } = require('../controller/adminAuthentication');

const { adminSignInValidate, isRequestValidated } = require('../validators/admin&user_validator');
const router = express.Router();
 
/* --------------------------------- sign in -------------------------------- */

router.post('/signin',adminSignInValidate,isRequestValidated,signin);

/* -------------------------------- sign out -------------------------------- */

router.post('/signout', signout)

/* ---------------------------------- home ---------------------------------- */

router.post('/home',isSignedIn,(req,res)=>{
    res.status(200).json({
        admin:'admin home'
    })
})

/* ------------------------------- block user ------------------------------- */

router.post('/blockUser',isSignedIn,blockUser)

module.exports = router;