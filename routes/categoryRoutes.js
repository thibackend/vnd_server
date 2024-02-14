const express = require('express');
const router = express.Router();
const categoryCtl = require('../controllers/categoryCtl');


router.post('/',categoryCtl.save); 

module.exports = router;