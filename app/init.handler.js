const {readdir} = require("fs");
module.exports = (client) => {
    readdir("./app/events/", (err, files) => {
        if (err) return console.error(err);      
        files.forEach((file) => {
            const event = require(`./events/${file}`);
            let eventName = file.split(".")[0];
            client.on(eventName, event.bind(client));
        });
      });
}