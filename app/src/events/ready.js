const {config} = require("../config/dc.config");
const {logger} = require("../modules/log.handler");
module.exports = (client) => {
    logger(`${client.user.username} online`,"info");
    import('../modules/setActivity.js')
    .then(({setActivity}) => {
        setActivity(client, config.activity.type, config.activity.desc);
    })
    .catch(error => {
        logger(error,"error");
    });
    require("../modules/loadCommands")(client);
}