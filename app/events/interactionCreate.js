const { readdirSync } = require("fs");
const path = require("path");
module.exports = async (interaction) => {
  const client = interaction.client;
  // Import button handler
  // Command handler
  const commandFiles = readdirSync(path.join(__dirname, "../commands/")).filter((file) =>
    file.endsWith(".js")
  );
  const commands = [];
  for (const file of commandFiles) {
    const command = require(path.join(__dirname, `../commands/${file}`));
    commands.push(command.data.toJSON());
    client.commands.set(command.data.name, command);
  }
  if (!interaction.isCommand()) return;
  const command = client.commands.get(interaction.commandName);
  if (!command) return;
  command.execute(interaction, client);
};
