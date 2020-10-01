const Discord = require('discord.js');

module.exports = {
  respondToMessage: function(message, phrase, response) {

    if (message.content.includes("hiii")) {
      message.channel.send("hi :3");
    }{
    if (message.content.includes("faggot")) {
        message.channel.send("yeah"); 
    }{
    if (message.content.includes("!!!")) {
      message.channel.send("❗❗❗"); 
    }}{
      if (message.content.includes("women")) {
        message.channel.send("https://media.discordapp.net/attachments/691118711486152705/761283953729863700/Eg-B1hwXcAAHguZ.jpg?width=490&height=524"); 
    }}{
      if (message.content.includes("woman")) {
        message.channel.send("https://media.discordapp.net/attachments/691118711486152705/761283953729863700/Eg-B1hwXcAAHguZ.jpg?width=490&height=524"); 
    }}
  }
},
  respondToDM: function(message, phrase, response) {
    
    if (message.channel instanceof Discord.DMChannel) {}
      message.content.includes("hey"); 
      message.channel.send("hi :3");
  }
}