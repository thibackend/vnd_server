const express = require('express');
const Router = express.Router();
const userCtl = require('../controllers/userCtl');

Router.post('/',userCtl.create);
Router.get('/',userCtl.getAll);
// Router.get('/:id',userCtl.getOne);
// Router.patch('/:id',userCtl.update);
// Router.delete('/:id',userCtl.remove)

module.exports = Router;