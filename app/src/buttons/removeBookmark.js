const { logger } = require("../modules/log.handler");
module.exports = {
    data: {name: "removeBookmark"},
    async execute(interaction) {
        let message = interaction.message;
        logger(`${this.data.name} for user ${interaction.user.id} (${interaction.user.username}) with message id ${message.id}`, "info")
        try {
            message.delete();
        } catch (error) {
            interaction.reply({content: `**Something went wrong!**\nPlease visit our support server at https://discord.gg/wSEfKm76fZ`, ephermal: true})
            logger(error, "error")
        }
    } 
}