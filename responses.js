// anything that could be deemed offensive is purely satirical and not intended to harm others
const Discord = require('discord.js');

module.exports = {
  respondToMessage: function(message, content) {

    if (message.content.includes("hiii")) {
      message.channel.send("hi :3");
    }{
    if (message.content.includes("faggot")) {
        message.channel.send("yeah"); 
    }{
    if (message.content.includes("!!!")) {
      message.channel.send("❗❗❗"); 
    }}{
      if (message.content.startsWith("women") || message.content.startsWith("woman")) {
        message.channel.send("https://media.discordapp.net/attachments/691118711486152705/761283953729863700/Eg-B1hwXcAAHguZ.jpg?width=490&height=524"); 
    }}
  }
},
respondToDM: function(message, phrase, response) {
    
  if (message.channel instanceof Discord.DMChannel) 
  {
    if(message.content.startsWith("hey"))
    message.channel.send("hi :3");
  }
  if (message.channel instanceof Discord.DMChannel) 
  {
    if(message.content.includes("show feet"))
    message.channel.send("https://media.discordapp.net/attachments/691118711486152705/761362767503818782/face.png");
  }
  if (message.channel instanceof Discord.DMChannel) 
  {
    if(message.content.includes("suna"))
    message.channel.send("love that guy 😍😍😍😍");
  }
}
}