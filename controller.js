const Discord = require("discord.js");

module.exports = {
    filterMessage: function (message, phrase, response, user, reaction) {
        if (message.author.bot) {return;}
        
    console.log(`[${message.createdAt}] ${message.author.username}: ${message.content}`);
    }  
};