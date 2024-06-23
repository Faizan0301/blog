const mongoose = require("mongoose");

const userSchems = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    phone: Number
});

const userDB = mongoose.model('userDB', userSchems);

module.exports = userDB