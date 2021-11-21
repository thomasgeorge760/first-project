const express = require('express');
const { isSignedIn } = require('../controller/adminAuthentication');
const { initialData } = require('../controller/adminInitialData');

const router = express.Router();
 
/* --------------------------------- initial data -------------------------------- */

router.post('/initialdata', isSignedIn, initialData);



module.exports = router;