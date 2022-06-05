const {readdir} = require("fs");
const logger = require("./modules/logger");
module.exports = (client) => {
    readdir("./events/", (err, files) => {
        if (err) return logger.error(err);      
        files.forEach((file) => {
            const event = require(`./events/${file}`);
            let eventName = file.split(".")[0];
            client.on(eventName, event.bind(client));
        });
      });
}