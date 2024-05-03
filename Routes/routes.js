const express = require('express');

const userController = require('../Controllers/user');

const route = express.Router();

route.get('/users', userController.getUsers);
route.patch('/users/:askedId', userController.getUserById);
route.delete('/delete/:askedId', userController.deleteUser);
route.post('/newUser',userController.postUser);

module.exports = route;