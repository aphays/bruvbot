const Discord = require('discord.js');
const client = new Discord.Client();
import * as hiii from "./responses.json"

fs.readFile('responses.json', (err, data) => {
    if (message.content === "hiii") {
    message.channel.send(hiii);
  });
}