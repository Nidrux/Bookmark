const {logger} = require("../log.handler");
const GuildEmote = require("../../Schemas/emoji.schema");
module.exports = async (interaction, value) => {
    logger(`Updating sendContent for ${interaction.member.guild.name} to ${value}`, "info");
    GuildEmote.findOneAndUpdate({guildID: interaction.member.guild.id},{sendContent: value},{new: false},(error,doc) => {
        if(error) return (
            logger(error, "error"), 
            interaction.reply({content: `**Something went wrong!**\nPlease visit our support server at https://discord.gg/wSEfKm76fZ`, ephermal: true})
        );
        if(!doc) return (
            logger(`${interaction.member.user.username} tried to set sendContent for ${interaction.member.guild.name} to ${value} but failed. No active setup`, "warn"), 
            interaction.reply({content: `**Something went wrong!**\nNo valid setup has been found for this server. Please use /setup first!\n For more questions please visit our support server at https://discord.gg/wSEfKm76fZ`, ephermal: true})
        )
        interaction.reply({content: `Content sharing has been set to ${value}`, ephermal: true})
    })
}