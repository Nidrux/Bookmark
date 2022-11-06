const {logger} = require("../log.handler");
const convertEmote = require("./convertEmote");
const GuildEmote = require("../../Schemas/emoji.schema");
module.exports = async (interaction, emote) => {
    emote = convertEmote(emote);
    logger(`Updating emote for ${interaction.member.guild.name} to ${emote}`, "info");
    GuildEmote.findOneAndUpdate({guildID: interaction.member.guild.id},{emoji: emote},{new: false},(error,doc) => {
        if(error) return (
            logger(error, "error"), 
            interaction.reply({content: `**Something went wrong!**\nPlease visit our support server at https://discord.gg/wSEfKm76fZ`, ephermal: true})
        );
        if(!doc) return (
            logger(`${interaction.member.user.username} tried to set the emote for ${interaction.member.guild.name} but failed. No active setup`, "warn"), 
            interaction.reply({content: `**Something went wrong!**\nNo valid setup has been found for this server. Please use /setup first!\n For more questions please visit our support server at https://discord.gg/wSEfKm76fZ`, ephermal: true})
        )
        interaction.reply({content: `Emote has been set to ${String.fromCodePoint(parseInt(emote, 16))}`, ephermal: true})
    })
}