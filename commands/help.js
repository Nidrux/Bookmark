const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const {usageText} = require("../modules/usageText");
const {logger} = require("../modules/log.handler");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription('Get more info about "Bookmark" and how you can use it'),
  async execute(interaction, client) {
      
    const embed = new MessageEmbed()  
    .setColor("#ffae01")
    .setTitle("🔖 Bookmark help")
    .setDescription(`This message showcases the help embed for the bot Bookmark`)
    .setFields([
        {name: "Usage:", value: usageText()},
        {name: "Support server:", value: "https://discord.gg/wSEfKm76fZ"}
    ])
    .setImage("https://cdn.discordapp.com/attachments/973562599792865330/973562706076520478/help_banner.png")
    .setTimestamp();


    await interaction.reply({
      embeds: [embed]
    });

    logger(`${this.data.name} command used by ${interaction.user.id} (${interaction.user.username})`, "info")
  },
};
