const createError = require('http-errors');

const getUsers = (req,res,next) => {
    try {
        res.status(200).send({
            message: 'user logged in',
        })
    } catch (error) {
        next(error)
    }
}
const getUser = (req,res,next) => {
    try {
        res.status(200).send({
            message: 'user logged in',
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {getUsers,getUser};