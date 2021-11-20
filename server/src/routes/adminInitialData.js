const express = require('express');
const { initialData } = require('../controller/adminInitialData');

const router = express.Router();
 
/* --------------------------------- initial data -------------------------------- */

router.post('/initialdata', initialData);



module.exports = router;