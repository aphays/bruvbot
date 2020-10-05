module.exports = {
    filterMessage: function (message) {
        if (message.author.bot) { return }
        
    console.log(`[${message.createdAt}] ${message.author.username}: ${message.content}`);
    }  
};