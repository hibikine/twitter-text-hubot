# twitter-text-hubot

Count your tweet length.

## Quick Start

```bash
git clone https://github.com/hibikine/twitter-text-hubot --depth 1
cd twitter-text-hubot
yarn
```

Create a _.env_ file with content:

```bash
ROCKETCHAT_URL=https://myserver.com
ROCKETCHAT_USER=mybotuser
ROCKETCHAT_PASSWORD=mypassword
ROCKETCHAT_ROOM=sth
RESPOND_TO_DM=true
```

Adjust the content to fit your server and user credentials. Make sure `myuser` has **BOT role** on the server, if you don't know what that means, ask your server administrator to set it up for you.

Then run the bot:

```bash
yarn local
```

### Running in Production

There are executables for different environments that all run the Hubot binary.

Before running make sure your production environment has the required 
environment variables for the adapter, url, user, name and pass. Or you can add
them after the launch command as switches, like `-a rocketchat`.

-   `bin/hubot` unix binary
-   `bin/hubot.cmd` in windows
-   `Procfile` for Heroku

## Configuration

When running locally, we've used [`dotenv`][dotenv] to load configs from the
`./.env` file. That makes it easy for setting environment variables.
