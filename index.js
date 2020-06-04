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
        .setTitle(`${member.tag}'s beautiful avatar :D`)
        .setColor(`#33FFAF`)
        .setImage(`${imageURL}?size=2048`);
        message.channel.send({embed: avatar});}
    
    //embed 1
    if (message.content.startsWith(`${prefix}13232389235237embed`)){
        let Embed = new Discord.MessageEmbed()
        .setColor(`#33FFAF`)
        .setTitle("Colors")
        .setThumbnail('https://cdn.discordapp.com/attachments/706297283074850878/716834141118791730/EK_SiCJUEAAQisx.png')
        .addField("Roles",":blue_circle: Bluen\n:green_circle: Green\n:red_circle: Red", true);
        message.channel.send({embed: Embed});}
    
    //embed 2
    if (message.content.startsWith(`${prefix}13232389235237embed`)){
        let Embed = new Discord.MessageEmbed()
        .setColor(`#33FFAF`)
        .setTitle("Weeb")
        .setThumbnail('https://cdn.discordapp.com/attachments/706297283074850878/716835214709751868/316447769170211.png')
        .addField("Roles","<:AwOo:696274819314090016> Greater Weeb\n<:KannaWant:696156418629304350>Normal Weeb\n<:FlandreConcerned:696274823768440853> Lesser Weeb", true);
        message.channel.send({embed: Embed});}

    //embed 3
    if (message.content.startsWith(`${prefix}13232389235237embed`)){
        let Embed = new Discord.MessageEmbed()
        .setColor(`#33FFAF`)
        .setTitle("Gender")
        .setThumbnail('https://cdn.discordapp.com/attachments/706297283074850878/716835479345168404/kanna-transparent-1.png')
        .addField("Roles",":male_sign: Man\n:female_sign: Woman", true);
        message.channel.send({embed: Embed});}

    //embed 4
    if (message.content.startsWith(`${prefix}13232389235237embed`)){
        let Embed = new Discord.MessageEmbed()
        .setColor(`#33FFAF`)
        .setTitle("Information")
        .setThumbnail('https://cdn.discordapp.com/attachments/706297283074850878/716842894404616312/kanna-transparent-png-12.png')
        .addField("Devices","📱 Phone\n💻 Laptop\n🖥️ Desktop", true)
        .addField("Consoles",":one: Xbox\n:two: PS4\n:three: Nintendo", true)
        .addField("Sexuality","<:WholesomeCheezie:715701681500848211> Straight\n<:LGBTQ:716864731960442972> LGBTQ+", true)
        .addField("I dunno", ":man_standing: Single?\n:couple: Taken?\n<:TachiSmile:696274819989241926> I luve my waifu")
        message.channel.send({embed: Embed});}

    //embed 5
    if (message.content.startsWith(`${prefix}13232389235237embed`)){
        let Embed = new Discord.MessageEmbed()
        .setColor(`#33FFAF`)
        .setTitle("etc.")
        .setThumbnail('https://cdn.discordapp.com/attachments/706297283074850878/716872348661186580/dcnpmxl-1af3bb4b-e26a-4974-8f2b-55d7ae17a28a.png')
        .addField("Notification",":bell: Get notified from our streams when we go live!", false)
        .addField("Channels","<:02Smug:696274816746913902> This will unhide the naughty channels. Don't ask why I have this.. :thinking:", false);
        message.channel.send({embed: Embed});}

    //embed 6
    if (message.content.startsWith(`${prefix}13232389235237embed`)){
        let Embed = new Discord.MessageEmbed()
        .setColor(`#33FFAF`)
        .setTitle("Games")
        .setThumbnail('https://cdn.discordapp.com/attachments/706297283074850878/716875504673882212/NicePng_got-png_2599797.png')
        .addField("Roles",":one: Red Dead Redemption II\n:two: Minecraft Dungeons\n:three: Fortnite 🤡\n:four: Minecraft\n:five: VR Chat\n:six: Terraria\n:seven: GTA V\n:eight: Roblox\n:nine: CSGO", false);
        message.channel.send({embed: Embed});}

    if (message.content.startsWith(`${prefix}123embed`)){
        let Embed = new Discord.MessageEmbed()
        .setColor(`#33FFAF`)
        .setTitle("extra roles")
        .attachFiles(attachment)
        .setThumbnail('attachment:./images/kanna1.png')
        .addField("Roles", ":paintbrush: **Artist** This role will show that your an amazing artist!", true);
        message.channel.send({embed: Embed});}
    
});

client.on("ready", function (){
    console.log(`${bot.user.username} is online!`);
});

client.login(process.env.token);