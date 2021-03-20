const express = require('express');
const _ = require('lodash');
const router = express.Router();

const { User } = require('../models/user');

router.get('/', (req, res) => {
    User.find().then((users) => {
        res.send(users); 
    }).catch((err) => {
        res.send(err); 
    });
});

router.post('/', (req,res) => {
    let body = _.pick(req.body, ['name', 'email', 'profession', 'password']);
    console.log(body)
    let user = new User(body);
    user.save().then((user) => {
        res.send({
            user,
            notice: 'successfully created a user'
        });
    }).catch((err) => { 
        res.send((err))
    })
})

module.exports = {
    usersController: router
}