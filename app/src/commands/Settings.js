const { SlashCommandBuilder } = require("@discordjs/builders");
const {logger} = require("../modules/log.handler");
const updateSendContent = require("../modules/settings/updateSendContent");
const { Permissions } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("settings")
    .setDescription('Set the bookmark emote that will be used in your server.')
    .addSubcommandGroup(group => 
        group.setName("share").setDescription("share options")
        .addSubcommand(subcommand => 
            subcommand.setName("content")
            .setDescription("Enable sharing content in bookmark coming from this server")
            .addBooleanOption(option => option.setName("option").setDescription("enable=true,disabled=false").setRequired(true))
        )
    )
  ,async execute(interaction, client) {
    logger(`${this.data.name} command used by ${interaction.user.id} (${interaction.user.username})`, "info");
    if(!interaction.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return;
    switch (interaction.options.getSubcommand()) {
        case "content":
                updateSendContent(interaction, interaction.options.getBoolean("option"));
            break;
        default:
            break;
    }





  },
};