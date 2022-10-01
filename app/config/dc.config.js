const {Intents} = require("discord.js");
module.exports.config = {
    // https://ziad87.net/intents/
    intents: [
        Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
		Intents.FLAGS.GUILD_MEMBERS,
    ],
    activity: {
        type: "WATCHING",
        desc: ""
    },
    activeEmote: "🔖"
}