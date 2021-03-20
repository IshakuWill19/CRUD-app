const express = require('express');
const router = express.Router();
const { usersController } = require('../app/controllers/users_controller');

router.use('/user', usersController);

module.exports = {
    routes: router
}