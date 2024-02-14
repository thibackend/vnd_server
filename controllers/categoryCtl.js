const models = require('../models');
function save(req, res) {
    const category = {
        name: req.body.name
    };
    models.Category.create(category)
        .then(result => {
            res.status(201).json({
                message: "Category create successfully",
                data:result
            })
        })
        .catch(error => {
            res.status(500).json({
                message: "Fails to create a new category!",
                error: error
            })
        })
}

module.exports = {
    save,
}

