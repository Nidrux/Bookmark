const {config} = require("../dc.config");
const logger = require("../modules/logger");
module.exports = (client) => {
    console.log(`online`); // DO NOT REMOVE -> SET DEAMON STATE TO RUNNING;
    import('../modules/setActivity.js')
    .then(({setActivity}) => {
        setActivity(client, config.activity.type, config.activity.desc);
        logger.info("Activity set...")
    })
    .catch(error => {
        logger.error(error);
    });
    require("../modules/loadCommands")(client);
}