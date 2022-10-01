const {logger} = require("../modules/log.handler");
const GuildEmote = require("../Schemas/emoji.schema");
module.exports = async (guild) => {
    logger(`joined guild ${guild.name}`,"info");
    GuildEmote.findOne({guildID: guild.id}, (error, docs) => {
        if(error) return logger(error, "error");
        if(docs) return logger(`Documents for ${guild.name} already exists`, "info");
        GuildEmote.create({guildID: guild.id, guildName: guild.name, emoji: [..."🔖"].map(e => e.codePointAt(0).toString(16)).join(`-`)}).then(() => {
            logger(`Created documents for ${guild.name}`, "info");
        }).catch(error => {
            logger(`Error creating docs for ${guild.name}\n ${error}`,"error")
        });
    })
}