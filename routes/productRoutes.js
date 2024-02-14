const express = require('express');
const router = express.Router();
const productCtl = require('../controllers/productCtl');

router.get('/', productCtl.getAll);
router.get('/:id', productCtl.getOne);

module.exports = router;