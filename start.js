// bot startup script
const Discord = require("discord.js");
const { token } = require("./config.json");
const controller = require("./controller.js");
const Controller = require("./controller.js");
const respond = require("./responses.js");
const client = new Discord.Client();

client.once('ready', () => {
    client.user.setActivity('hate women!!!!!!!!!!!')
    console.log('started bot')
    // ^startup
});

client.on("message", (message) => {
    controller.filterMessage(message);
})
// ^removes logs from other bots
client.on("message", (message) => {
    respond.respondToMessage(message);
})
// ^trigger responses from chat content
client.on("message", (message) => {
    respond.respondToDM(message);
})
// ^wip reading dm for responses
client.login(token);