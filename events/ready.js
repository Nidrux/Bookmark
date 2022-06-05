const {config} = require("../dc.config");
module.exports = (client) => {
    console.log(`${client.user.username} online`);
    import('../modules/setActivity.js')
    .then(({setActivity}) => {
        setActivity(client, config.activity.type, config.activity.desc);
    })
    .catch(error => {
        console.log(error);
    });
    require("../modules/loadCommands")(client);
}