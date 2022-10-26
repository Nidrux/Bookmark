# Bookmark

## Setup

## Docker:

## Enviroment file:

Your enviroment file needs to contain the following parameters in order for it to work.

```
TOKEN=bot token (https://discord.com/developers/applications)
STATUS=PRODUCTION
GUILD_ID=guild id of your server.
MONGODB_URI=connection string mongo (mongodb://)
```

### What do these parameters mean?<br>

TOKEN: This is used to connect to the discord API.<br>
STATUS: This will let discord know in what state the slashcommands are. PRODUCTION means less updates. (DEVELOPMENT or PRODUCTION)<br>
GUILD_ID: This is used for development. This is where slashcommands will be updated frequently. **(You dont need to fill this in if you're only going to run the bot in production mode.)**<br>
MONGODB_URI: This is used to connect to the database to store data! **MAKE SURE THE CONNECTION WORKS AND IS STABLE**
