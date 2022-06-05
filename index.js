const {config} = require('./dc.config.js');
require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client({intents: config.intentsNum});
const token = process.env.TOKEN || null;
const logger = require("./modules/logger");
module.exports = client;
client.commands = new Discord.Collection();
logger.info("Starting up handler");
require("./init.handler.js")(client)

client.login(token);