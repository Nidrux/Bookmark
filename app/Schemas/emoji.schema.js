const { Schema, model } = require("mongoose");
const config = require("../config/dc.config");
const emoji = new Schema({
    guildID: Number,
    guildName: String,
    emoji: String
},{ timestamps: true});
module.exports = model('Emoji', emoji);