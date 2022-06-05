const {config} = require("../dc.config");
const {MessageEmbed} = require("discord.js")
const logger = require("../modules/logger");
module.exports = async (m,u) => {
    if(m.emoji.name !== config.activeEmote) return;
    let attachments = m.message.attachments;
    try {
        logger.info(`${u}: added a reaction to ${m.message.id}`);
        const embed = new MessageEmbed()
        .setColor("#ffae01")
        .setTitle("🔖 New bookmark saved")
        .setTimestamp()
        .setDescription(`You added a new bookmark!\n Attachments included in this message are posted separately`)
        .addFields(
            {name: "Server", value: `${m.message.guild.name}`},
            {name: "Author", value: `${m.message.author.username}`, inline: true},
            {name: "Content", value: `${m.message.url}`, inline: true}
        )
        if( m.message.channel.nsfw) {
            embed.setFooter({text:"NSFW DETECTED! Post is automaticly blurred", iconURL:"https://cdn.discordapp.com/attachments/955172802246369283/955192318376419328/warning.png"})
        }
        try {
            logger.info(`${u}: sending bookmark to the user`);
            await u.send({embeds: [embed]});
            if(attachments) {
                for(let file of attachments) {
                    if(m.message.channel.nsfw) {
                        logger.info(`${u}: NSFW detected. updating attachmens to spoiler`);
                        await u.send({files: [{attachment: file[1].attachment, name: `SPOILER_${file[1].name}`}]});
                    } else {
                        await u.send({files: [file[1]]})
                    }
                }
            }
        } catch (error) {
            m.message.channel.send(`<@${u.id}> Please allow dm's!`);
            logger.warning(`${u}: can not send bookmark to user. Didn't allow direct messages.`);
        }
    } catch (error) {
       logger.info(error);
    }
}