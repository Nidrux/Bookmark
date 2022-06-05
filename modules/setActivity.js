const logger = require("./logger");


module.exports.setActivity = (client, type, desc) => {
    if(!type) {type = "WATCHING", logger.warning("No activity type found... Defaulting to 'WATCHING'")};
    if(!desc) {desc = "saved posts 🔖", logger.warning("No custom description found... Defaulting to 'saved posts 🔖'")};
    try {
        client.user.setActivity(desc, {type: type});
    } catch (error) {
        throw error;
    }
}