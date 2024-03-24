const mongoose = require('mongoose');

const userScema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    password: String,
}, {
    timestamps: true
})

exports.User = mongoose.model("user" , userScema);