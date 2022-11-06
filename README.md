# Bookmark

<h2>Docker:</h2>

Step 1: Pull the repo and cd into it.<br>

```bash
git pull https://github.com/Nidrux/Bookmark.git && cd Bookmark
```

Step 2: Build the containers and run them in detached mode.<br>

```bash
docker-compose up -d
```

Optional:

```bash
# View active containers
docker-compose ps
# View logs of the whole docker network:
docker-compse logs -t -f
# View logs of a specific container:
docker logs -t -f CONTAINER_NAME
```

### Enviroment variables:

Enviroment variables are in the docker-compose.yml file.<br>
**Preview:**

```yaml
services:
  bookmark:
    environment:
      TOKEN:
      STATUS: DEVELOPMENT
      GUILD_ID: 973562496763953200
      MONGODB_URI: mongodb://admin:root@mongodb:27017/bookmark?authSource=admin
  mongodb:
    environment:
      #   Credentials bellow are used to login to the database,
      #   if you change these make sure to also update the link up above
      #   (mongodb://admin:root@mongodb:27017/bookmark?authSource=admin)
      MONGO_INITDB_ROOT_USERNAME: admin
      MONGO_INITDB_ROOT_PASSWORD: root
      MONGO_INITDB_DATABASE: bookmark
```

<h2>Node.js via command line</h2>

**Make sure you have Node.js installed on your machine before continuing!
Installation guid can be found [here](https://nodejs.org/en/download/)**<br>
**Make sure you have mongoDB installed on your machine before continuing!
Installation guid can be found [here](https://www.mongodb.com/docs/manual/administration/install-community/)**

Step 1: Pull the repo and cd into it.<br>

```bash
git pull https://github.com/Nidrux/Bookmark.git && cd Bookmark/app
```

Step 2: Install the dependencies needed and start up the bot.<br>

```bash
npm install
```

Step 3: create an enviroment file for the bot

```bash
# linux
cd src && touch .env && echo -e "TOKEN=<token>\nSTATUS=DEVELOPMENT\nUILD_ID=973562496763953200\nMONGODB_URI=mongodb://admin:root@localhost:27017/bookmark?authSource=admin" >> .env

# For windows users. Create a .env file in the 'src' directory
TOKEN=
STATUS=DEVELOPMENT
GUILD_ID=973562496763953200
MONGODB_URI=mongodb://admin:root@localhost:27017/bookmark?authSource=admin

```

Step 4: Return back to app and run the bot<br>

```bash
# linux
cd .. && node .
# For windows users.
# Open up a cmd and locate Bookmark/app
node .
```
