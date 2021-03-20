const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 64
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1000
    },
    profession: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

})

const User = mongoose.model('user', userSchema);

module.exports = {
    User
}