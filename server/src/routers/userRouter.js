const express = require('express');
const {getUser, getUsers} = require('../controllers/userController');
// const getUsers = require('../controllers/userController');
const userRouter = express.Router()

userRouter.get('/users', getUsers );
userRouter.get('/user/:id', getUser );
// userRouter.post('/add', addUser );
// userRouter.put('/update/:id', updateUser );
// userRouter.delete('/delete/:id', deleteUser );
// userRouter.get('/login', loginUser );
// userRouter.get('/login', regisUser );

module.exports = { userRouter };