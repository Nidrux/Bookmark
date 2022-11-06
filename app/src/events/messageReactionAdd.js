const {config} = require("../config/dc.config");
const {MessageEmbed, MessageActionRow, MessageButton} = require("discord.js")
const {logger} = require("../modules/log.handler");
const GuildEmote = require("../Schemas/emoji.schema");
const convertEmote = require('../modules/emote/convertEmote');
module.exports = async (m,u) => {
    GuildEmote.findOne({guildID: m.message.guildId}, async (error, docs) => {
        if(error) return (m.message.channel.send(`Something went wrong.`), logger(error, "error"));
        if(!docs) return (logger(`Documents for ${m.message.guildId} don't exist. Missing setup?`, "warn"));
        logger(`${m.message.guildId} checked emotes: ${m.emoji.name} against db emoji: ${String.fromCodePoint(parseInt(docs.emoji, 16))}  user: ${u.username}`, "info");
        if(convertEmote(m.emoji.name) !== docs.emoji) return;
        let attachments = m.message.attachments;
        try {
            const embed = new MessageEmbed()
            .setColor("#ffae01")
            .setTitle("🔖 New bookmark saved")
            .setTimestamp()
            .setDescription(`You added a new bookmark!\n Attachments included in this message are posted separately`)
            .addFields(
                {name: "Server", value: `${m.message.guild.name}`},
                {name: "Author", value: `${m.message.author.username}`, inline: true},
                {name: "Link", value: `${m.message.url}`, inline: true}
            )
            if(docs.sendContent) {
                let content = m.message.content
                embed.addField("Content", content.substring(0,500) + "...");
            }
            if( m.message.channel.nsfw && attachments) {
                embed.setFooter({text:"NSFW DETECTED! Post is automaticly blurred", iconURL:"https://cdn.discordapp.com/attachments/955172802246369283/955192318376419328/warning.png"})
            }
            try {
                let files = [];
                if(attachments) {
                    for(let file of attachments) {
                        if(m.message.channel.nsfw) {
                            files.push({attachment: file[1].attachment, name: `SPOILER_${file[1].name}`});
                        } else {
                            files.push({attachment: file[1].attachment, name: file[1].name});
                        }
                    }
                }
                const row = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('removeBookmark')
                        .setLabel('Remove')
                        .setStyle("DANGER"),
                );
                u.send({embeds: [embed], files: files, components: [row]});
                logger(`Bookmark send to ${u.id} (${u.username})`, "info")
            } catch (error) {
                logger(error, "error")
                m.message.channel.send(`<@${u.id}> Please allow dm's!`);
            }
        } catch (error) {
            logger(error, "error")
        }
        })
}