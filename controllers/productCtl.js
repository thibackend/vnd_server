const getAll = (req, res, next) => {
    res.status(200).json({
        message: "Get All list items!"
    })
}

const getOne = (req, res, next) => {
    const data = req.body;
    res.status(200).json({
        message: "Get One items",
        data
    })
}

const createProduct = (req, res, next) => {
    res.status(200).json({
        message: "create product"
    })
}

const updateProduct = (req, res, next) => {
    res.status(200).json({
        message: "create product"
    })
}


const deleteProduct = (req, res, next) => {
    res.status(200).json({ message: "Delete Product!" })
}

module.exports = {
    getAll,
    getOne,
    createProduct,
    updateProduct,
    deleteProduct
}