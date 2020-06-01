const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix } = require('./config.json');

client.on('message', message => {

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
    if (message.content.startsWith(`${prefix}1embed`)){
        let Embed = new Discord.MessageEmbed()
        .setColor(`#33FFAF`)
        .setTitle("Colors")
        .setThumbnail('https://cdn.discordapp.com/attachments/706297283074850878/716834141118791730/EK_SiCJUEAAQisx.png')
        .addField("roles",":blue_circle: Bluen\n:green_circle: Green\n:red_circle: Red", true);
        message.channel.send({embed: Embed});}
    
    //embed 2
    if (message.content.startsWith(`${prefix}2embed`)){
        let Embed = new Discord.MessageEmbed()
        .setColor(`#33FFAF`)
        .setTitle("Weeb")
        .setThumbnail('https://cdn.discordapp.com/attachments/706297283074850878/716835214709751868/316447769170211.png')
        .addField("roles","<:AwOo:696274819314090016> Greater Weeb\n<:KannaWant:696156418629304350>Normal Weeb\n<:FlandreConcerned:696274823768440853> Lesser Weeb", true);
        message.channel.send({embed: Embed});}

    //embed 3
    if (message.content.startsWith(`${prefix}3embed`)){
        let Embed = new Discord.MessageEmbed()
        .setColor(`#33FFAF`)
        .setTitle("Gender")
        .setThumbnail('https://cdn.discordapp.com/attachments/706297283074850878/716835479345168404/kanna-transparent-1.png')
        .addField("roles",":male_sign: Man\n:female_sign: Woman", true);
        message.channel.send({embed: Embed});}

    //embed 4
    if (message.content.startsWith(`${prefix}4embed`)){
        let Embed = new Discord.MessageEmbed()
        .setColor(`#33FFAF`)
        .setTitle("Information")
        .setThumbnail('https://cdn.discordapp.com/attachments/706297283074850878/716842894404616312/kanna-transparent-png-12.png')
        .addField("Devices","📱 Phone\n💻 Laptop\n🖥️ Desktop", true)
        .addField("Consoles",":one: Xbox\n:two: PS4\n:three: Nintendo", true)
        .addField("Sexuality",":sparkles: Straight\n<:LGBTQ:716864731960442972> LGBTQ+", true)
        message.channel.send({embed: Embed});}

});

client.on('ready', function (){
    console.log(`${bot.user.username} is online!`);
});

client.login(process.env.token);