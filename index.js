const { Client,  } = require('discord.js-selfbot-v13');
const config = require('./config.json');

const auth = config.tokens;

for (const token of auth) {
  const client = new Client({
    readyStatus: false,
    checkUpdate: false,
    ws: { properties: { $browser: "Discord Android" } }
  });

  client.on('ready', async () => {
    console.log(" ____  _                               ");
    console.log("/ ___|| |__  _   _ _   _ _ __ ___ _ __ ");
    console.log("\\___ \\| '_ \\| | | | | | | '__/ _ \\ '__|");
    console.log(" ___) | | | | |_| | |_| | | |  __/ |   ");
    console.log("|____/|_| |_|\\__, |\\__,_|_|  \\___|_|   ");
    console.log("             |___/                     ");
    console.log(`${client.user.username} is online!`);
  });

  client.login(token);
}
