const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const logger = require("../modules/logger");
const os = require("os");
const getStatistics = require("../modules/getStatistics");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("info")
    .setDescription('Get information about the bot and the system')
    .setDefaultPermission(false),
  async execute(interaction, client) {
    logger.info(`user:${interaction.user.username}:${interaction.user.id} used command /info`)
    let stats = await getStatistics(client);
    const embed = new MessageEmbed()  
    .setColor("#ffae01")
    .setTitle("🔖 Bookmark info")
    .setDescription(`This message showcases the info embed for the bot Bookmark`)
    .setThumbnail("https://cdn.discordapp.com/attachments/973562599792865330/973562706315604028/logo.png")
    .addFields(
        [
            {name: "OS", value: `platform: ${os.platform} memory: ${~~(os.totalmem / 1024 / 1024)}MB`},
            {name: "Statistics", value: stats}
        ]
    )
    .setTimestamp();

    await interaction.reply({
      embeds: [embed],
      ephemeral: true 
    });
  },
};
