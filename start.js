// bot startup script
const Discord = require('discord.js');
const { token } = require("./config.json");
const controller = require("./controller.js");
const Controller = require("./controller.js");
const client = new Discord.Client();

client.once('ready', () => {
    client.user.setActivity('pm for feet')
    console.log('started bot')
});

client.on("message", (message) => {
    controller.filterMessage(message);
})

client.login(token);