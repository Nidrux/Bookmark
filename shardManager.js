const { ShardingManager } = require('discord.js');
const {logger} = require("./app/modules/log.handler");
require("dotenv").config();
const manager = new ShardingManager('./app/index.js', { token: process.env.TOKEN });
manager.on('shardCreate', shard => logger(`Launched shard [ID: ${shard.id}]`,"warn"));
manager.spawn();
