require("dotenv").config();
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const { readdirSync } = require("fs");
const path = require("path");
module.exports = (client) => {
    const commands = [];
    const commandFiles = readdirSync(path.join(__dirname, "../commands/")).filter((file) =>
    file.endsWith(".js")
    );
    for (const file of commandFiles) {
        const command = require("../commands/" + file);
        commands.push(command.data.toJSON());
        client.commands.set(command.data.name, command);
    }
    const CLIENT_ID = client.user.id;
    const rest = new REST({version: "9"})
    .setToken(process.env.TOKEN);
    (async () => {
        try {
            if (process.env.STATUS === "PRODUCTION") {
                await rest.put(Routes.applicationCommands(CLIENT_ID), {
                body: commands,
            });
            console.log("Successfully registered commands globally");
            } else {
                await rest.put(
                Routes.applicationGuildCommands(CLIENT_ID, process.env.GUILD_ID),
                    {
                        body: commands,
                    }
                );
                console.log("Successfully registered commands locally");
            }
        } catch (err) {
            if (err) console.error(err);
        }
    })();
}