const { readdirSync } = require("fs");
const path = require("path");
module.exports = async (interaction) => {
  const client = interaction.client;
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
  // Button handler
  const buttonFiles = readdirSync(path.join(__dirname, "../buttons/")).filter((file) =>
    file.endsWith(".js")
  );
  const buttons = [];
  for(const buttonFile of buttonFiles) {
    const button = require(path.join(__dirname, `../buttons/${buttonFile}`));
    client.buttons.set(button.data.name, button);
  }
  // HANDELING
  if (interaction.isCommand()) {
    const command = client.commands.get(interaction.commandName);
    if (!command) return;
    command.execute(interaction, client);
  } else if(interaction.isButton()) {
    const button = client.buttons.get(interaction.customId);
    if (!button) return;
    button.execute(interaction)
  } else {
    return;
  }
};
