const { SlashCommandBuilder } = require("@discordjs/builders");
const {logger} = require("../modules/log.handler");
const GuildEmote = require("../Schemas/emoji.schema");
const convertEmote = require("../modules/emote/convertEmote");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("setup")
    .setDescription('Enable custom emojies on your server.'),
  async execute(interaction) {
    logger(`${this.data.name} command used by ${interaction.user.id} (${interaction.user.username})`, "info")
    GuildEmote.findOne({guildID: interaction.guild.id}, (error, docs) => {
        if(error) return (
            logger(error, "error"), 
            interaction.reply({content: `**Something went wrong!**\nPlease visit our support server at https://discord.gg/wSEfKm76fZ`, ephermal: true})
        );
        if(docs) return (
            logger(`Documents for ${interaction.guild.name} already exists`, "info"), 
            interaction.reply({content: `**There is already an active setup running for this server**\nThink this is wrong? Please visit our support server at https://discord.gg/wSEfKm76fZ`, ephermal: true})
        );
        GuildEmote.create({guildID: interaction.guild.id, guildName: interaction.guild.name, emoji: convertEmote("🔖")}).then(() => {
            logger(`Created documents for ${interaction.guild.name}`, "info");
            interaction.reply({content: `**Setup complete**`, ephermal: true})
        }).catch(error => {
            logger(`Error creating docs for ${interaction.guild.name}\n ${error}`,"error"), 
            interaction.reply(`**Something went wrong!**\nPlease visit our support server at https://discord.gg/wSEfKm76fZ`)
        });
    })
  },
};
