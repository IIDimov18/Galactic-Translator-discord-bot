const Discord = require('discord.js');
var help = require('./help.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});



client.on('message', (message) => {

    if(message.content.startsWith('$')){
        message.content=message.content.substring(1);
        switch(message.content){
            case 'help':
                    help.help(message,Discord,client);
                break;
            case 'addChannel':

            default:
                message.channel.send('Unknown command');
                break;
        }
    }
});



client.login('');
