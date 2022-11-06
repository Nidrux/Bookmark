const { SlashCommandBuilder } = require("@discordjs/builders");
const {logger} = require("../modules/log.handler");
const updateEmote = require("../modules/emote/updateEmote");
const { Permissions } = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("emote")
    .setDescription('Set the bookmark emote that will be used in your server.')
    .addSubcommand(subcommand =>
      subcommand
        .setName('set')
        .setDescription('Set the emote to trigger bookmark')
        .addStringOption(option => option.setName('emote').setDescription('The emote used for bookmark').setRequired(true)))
    .addSubcommand(subcommand =>
        subcommand
          .setName('reset')
          .setDescription('Reset your emote to the default setting'))
  ,async execute(interaction, client) {
    logger(`${this.data.name} command used by ${interaction.user.id} (${interaction.user.username})`, "info");
    if(!interaction.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return;
    switch(interaction.options["_subcommand"]) {
      case "set":
            let emote = interaction.options["_hoistedOptions"][0].value;
            const regexExp = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gi;
            let isEmote = regexExp.test(emote);
            isEmote ? updateEmote(interaction, emote) : interaction.reply({content: "Provided value is not an emote"})
        break;
      case "reset":
            updateEmote(interaction, "🔖")
          break;
      default:
        return;
    }
  },
};