const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix } = require('./config.json');

client.on('message', function(message) {

    let replies = ["Hey!", "Hi!", "Yo!", "Konichiwa!"];
    let result = Math.floor((Math.random() * replies.length));

    let replies1 = ["leaving so soon?", "goodbye", "Onee-san please dont leave me ;-;"];
    let result1 = Math.floor((Math.random() * replies1.length));

    //Messages
    if (message.content.startsWith(`${prefix}hello`))
        message.channel.send(replies[result]);
    
    if (message.content.startsWith(`${prefix}goodbye`))
        message.channel.send(replies1[result1]);

    //Embeds
    if (message.content.startsWith(`${prefix}embed`)){
        let Embed = new Discord.MessageEmbed()
        .setColor(`#33FFAF`)
        .setTitle("Henlo")
        .addField("**Penguin**",":penguin: Noot Noot!", true);
        message.channel.send({embed: Embed});}

    //Avatar
    if(message.content.startsWith(`${prefix}avatar`)) {
        const member = message.mentions.users.first() || message.author;
        const imageURL = member.displayAvatarURL({format: 'png'})
        const avatar = new Discord.MessageEmbed()
        .setTitle(`${member.tag}'s avatar`)
        .setColor(`#33FFAF`)
        .setImage(`${imageURL}?size=2048`);
        message.channel.send({embed: avatar});}
    
    //embed 1
    if (message.content.startsWith(`${prefix}embed1`)){
        let Embed = new Discord.MessageEmbed()
        .setColor(`#33FFAF`)
        .setTitle("Colors")
        .addField("",":blue_circle: Bluen\n :green_circle: Green\n :red_circle: Red", true);
        message.channel.send({embed: Embed});}

});

client.login(process.env.token);
client.on('ready', function (){
    console.log(`${bot.user.username} is online!`);
});