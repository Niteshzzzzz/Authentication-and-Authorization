const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: Number,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
})

module.exports = mongoose.model('user', userSchema)