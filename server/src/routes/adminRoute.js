const express = require('express');
const { signin, isSignedIn } = require('../controller/adminAuthentication');
const router = express.Router();

/* --------------------------------- sign in -------------------------------- */

router.post('/signin',signin);



/* ---------------------------------- home ---------------------------------- */

router.post('/home',isSignedIn,(req,res)=>{
    res.status(200).json({
        admin:'admin home'
    })
})

module.exports = router;