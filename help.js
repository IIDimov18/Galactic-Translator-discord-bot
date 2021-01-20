
function sendHelpEmbed(message,Discord,client){
    message.channel.send(helpEmbed(Discord,client));
}


module.exports = {
    help: function (message,Discord,client) {
        sendHelpEmbed(message,Discord,client);
    },
    bar: function () {
        // whatever
    }
};


function helpEmbed(Discord,client){
    return new Discord.MessageEmbed()
        .setColor('#1070ba')
        .setTitle('List of commands')
        .setAuthor('Link to my creator Github', 'https://cdna.artstation.com/p/assets/images/images/004/666/820/large/tim-barton-galactic-cave-1600.jpg?1485400705', 'https://github.com/IIDimov18')
        .setThumbnail('https://cdna.artstation.com/p/assets/images/images/004/666/820/large/tim-barton-galactic-cave-1600.jpg?1485400705')
        .addFields(
            { name: 'Add channel to be translated', value: '```$addChannel and tag the channel and then tag the channel where you want the bot to print the messages in only galactic \n Example: $addChannel #channelToBeTranslated #channelForTheMessagesInOnlyGalactical```' },
            { name: 'Stop channel from being translated', value: '```$removeChannel and tag the channel\n Example: $removeChannel #channelToNotBeTranslatedAnymore```' },
        )
        .setTimestamp()
}
