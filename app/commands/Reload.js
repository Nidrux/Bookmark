const { SlashCommandBuilder } = require("@discordjs/builders");
const loadCommands = require("../modules/loadCommands");
const {logger} = require("../modules/log.handler");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("reload")
    .setDescription('reload commands'),
  async execute(interaction, client) {
    try {
        loadCommands(client);
        logger(`${this.data.name} command used by ${interaction.user.id} (${interaction.user.username})`, "info")
        await interaction.reply("Commands reloaded");
    } catch (error) {
        logger(`${this.data.name} command used by ${interaction.user.id} (${interaction.user.username}) ${error}`, "error")
        await interaction.reply(error.toString());
    }
  },
};
