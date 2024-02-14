const mogarn = require('morgan');
const bodyParser = require('body-parser');
function Utils(app) {
    app.use(mogarn('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }))
}

module.exports = Utils;