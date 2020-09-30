const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

client.once('ready', () => {
	console.log('Ready!');
});
client.on('message', message => {
    if (message.content === 'hiii') {
        message.channel.send('hiii :3');
    }
});
client.login(config.token);