const { MessageButton, MessageEmbed, MessageActionRow } = require("discord.js");
const db = require("quick.db");


module.exports = {
name: "coin-sil",
async execute(client, message, args) {
const coin = db.fetch(`coin_${message.author.id}`)
  
if (message.author.id !== "696407272145813505" &&message.author.id !=="344855266799648770")
return message.channel.send(`:x: Sen benim kurucum değilsin!`);
let member = message.mentions.users.first() || message.author;
if (!member)
return message.channel.send(`:no_entry_sign: **| ${message.author.username}**, Lütfen bir kullancı belirt!`);
let miktar = args[1];
if (!miktar)
return message.channel.send(`:no_entry_sign: **| ${message.author.username}**, Lütfen bir miktar belirt!`);
message.channel.send(`:money_with_wings: **| ${miktar || 0}** coin :coin: silindi. Coin silinen kişi: **${member.tag}**!`);
db.subtract(`coin_${member.id}`, miktar);
}
}