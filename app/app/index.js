require('dotenv').config();
const {Client, Intents, Collection} = require('discord.js');
const {logger} = require("./modules/log.handler");
const client = new Client({intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGES
]});
const token = process.env.TOKEN || null;
module.exports = client;
client.commands = new Collection();
client.buttons = new Collection();
const mongoose = require("mongoose");
try {
    mongoose.connect(process.env.MONGODB_URI).then(() => {
        logger(`mongoose connected to  mongoDB`, "info");
        require("./init.handler.js")(client)

    }).catch(error => {
        logger(error, "error")
    });
    mongoose.set("bufferCommands", false);
} catch (error) {
    logger(error, "error");
}
client.login(token);