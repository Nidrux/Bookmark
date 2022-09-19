const { SlashCommandBuilder } = require("@discordjs/builders");
const {logger} = require("../modules/log.handler");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("emote")
    .setDescription('Set the bookmark emote that will be used in your server.'),
  async execute(interaction, client) {
    logger(`${this.data.name} command used by ${interaction.user.id} (${interaction.user.username})`, "info")
},
};