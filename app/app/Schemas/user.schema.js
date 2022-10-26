const { Schema, model } = require("mongoose");
const user = new Schema({
    userID: Number,
    userName: String,
    bookmarkIDS: Array,
},{ timestamps: true});
module.exports = model('User', user);