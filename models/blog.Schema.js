const mongoose = require("mongoose");

const userSchems = new mongoose.Schema({
    title: String,
    image: String,
    date: String,
    discription: String
});

const blogDB = mongoose.model('blogDB', userSchems);

module.exports = blogDB