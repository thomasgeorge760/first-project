const express = require('express');
const { signin, isSignedIn } = require('../controller/adminAuthentication');

const { adminSignInValidate, isRequestValidated } = require('../validators/admin&user_validator');
const router = express.Router();
 
/* --------------------------------- sign in -------------------------------- */

router.post('/signin',(req,res,next)=>{
    
    next()
},adminSignInValidate,isRequestValidated,signin);



/* ---------------------------------- home ---------------------------------- */

router.post('/home',isSignedIn,(req,res)=>{
    res.status(200).json({
        admin:'admin home'
    })
})

module.exports = router;