const express = require('express');
const runRouters = require('./routes');
const Utils = require('./utils.config');
const app = express();

Utils(app);
runRouters(app);

module.exports = app;