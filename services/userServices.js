const { User, Province, District } = require('../models')
const createUser = async (req, res, next) => {
    await User.create(req.body)
        .then(result => {
            res.status(201).json({
                message: "User create successfully",
                data: result
            })
        })
        .catch(error => {
            res.status(500).json({
                error: error,
                message: "Server error!"
            })
        })
}

const getAllUser = async (req, res, next) => {
    await User.findAll({
        include: {
            model: Province,
            include: District
        }
    })
        .then(result => {
            res.status(200).json({
                message: "Get all users successfully!",
                data: result,
            })
        })
        .catch(error => {
            res.status(500).json({
                error,
                message: "Server error!"
            })
        })
}

module.exports = {
    createUser,
    getAllUser
}