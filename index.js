const { Client, Collection, Intents } = require('discord.js');
const fs = require('fs');
const db = require("quick.db");
const client = new Client({ 
    intents: [ Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES ] 
});
client.events = new Collection();
client.commands = new Collection();
client.config = require('./conf.json');


client.on('ready', () => console.log('bot bağlandı'));
client.on('ready', () => console.log(`Logged in as ${client.user.tag}`));


fs.readdir('./commands/', async (err, files) => {
    if (err) throw new Error(err);
    files.forEach(async (dosya) => {
        var cmd = require(`./commands/${dosya}`);
        client.commands.set(cmd.name, cmd);
    });
});

fs.readdir('./events/', async (err, files) => {
    if (err) throw new Error(err);
    files.forEach(async (dosya) => {
        var event = require(`./events/${dosya}`);
        client.events.set(event.name, event);
    });
});

const prefix = client.config.prefix;
client.on('messageCreate', async (message) => {
    client.events.get('messageCreate').execute(client, message, prefix)
});


client.on('messageCreate', async (message) => {
   const db = require("quick.db")
    db.add(`coin_${message.author.id}`, 1);
 });

client.on('messageCreate', async (message) => {
   const db = require("quick.db")
    db.add(`mesajsayi_${message.guild.id}_${message.author.id}`, 1);
 });

 
client.on('ready', async (ready) => {
  client.user.setActivity("Ghost Coin Ekonomi")
 });



client.on("messageCreate", message => {
  const db = require("quick.db");
  let mesajsayi = db.fetch(`mesajsayi_${message.guild.id}_${message.author.id}`);
    if(mesajsayi == "500") {
    db.add(`coin_${message.author.id}`, 50)
    message.channel.send(`:sparkles: **| ${message.author.username}**, Toplamda 500 mesaja ulaştın ve 50 coin topladın! <a:wumpus:935967291777118208>`);
  };
  if(mesajsayi == "1000") {
    db.add(`usermoney.${message.author.id}`, 100)
    message.channel.send(`:sparkles: **| ${message.author.username}**, Toplamda 1000 mesaja ulaştın ve 100 coin topladın! <a:wumpus:935967291777118208>`);
  };
  
});

client.login(client.config.token);