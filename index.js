const {config} = require('./config/dc.config.js');
require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client({intents: config.intentsNum});
const token = process.env.TOKEN || null;
module.exports = client;
client.commands = new Discord.Collection();
require("./init.handler.js")(client)
client.login(token);