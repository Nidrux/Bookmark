const { Schema, model } = require("mongoose");
const emoji = new Schema({
    guildID: Number,
    guildName: String,
    emoji: String,
    sendContent: {type: Boolean, default: false}
},{ timestamps: true});
module.exports = model('Emoji', emoji);