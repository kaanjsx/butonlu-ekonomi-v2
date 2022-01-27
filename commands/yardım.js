const { MessageButton, MessageEmbed, MessageActionRow } = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
const bt = require('best-tools');

module.exports = {
name: "yardım",
async execute(client, message, args) {


const coin = db.fetch(`coin_${message.author.id}`)
const embed = new MessageEmbed()
.setAuthor('Ghost Coin Menü', message.guild.iconURL())
.setDescription(`Çalıştırmak istediğiniz komutun ismi üstünde yazan butona tıklayın.`)
.setColor("#5555dd")
let btn2 = new MessageButton()
.setStyle("PRIMARY")
.setLabel("Bakiye")
.setCustomId("bakıye")
let btn3 = new MessageButton()
.setStyle("PRIMARY")
.setLabel("Günlük")
.setCustomId("gunluk")
let btn4 = new MessageButton()
.setStyle("PRIMARY")
.setLabel("Market")
.setCustomId("market")
let btn5 = new MessageButton()
.setStyle("PRIMARY")
.setLabel("Çalış")
.setCustomId("calıskazan")
let btn6 = new MessageButton()
.setStyle("PRIMARY")
.setLabel("Ara")
.setCustomId("ara")
let btn7 = new MessageButton()
.setStyle("PRIMARY")
.setLabel("Dilen")
.setCustomId("dılen")
const row = new MessageActionRow()
.addComponents([btn2, btn3 ,btn4]);

const row1 = new MessageActionRow()
.addComponents([btn5, btn6 ,btn7]);

message.reply({components: [row, row1], embeds: [embed] }).then(async (msg) => {
const filter = i => i.user.id !== client.user.id;
const collector = msg.createMessageComponentCollector({ filter });
collector.on('collect', async (i) => {
if (i.user.id !== message.author.id) return i.reply({ content: '<:kilit:935979857878331433> Sen bunu yapamazsın çünkü komutu kullanan kişi sadece yapabilir!', ephemeral: true });
if (!i.isButton()) return;
if (i.customId == "bakıye") {
var bakıyeembed = new MessageEmbed()
.setColor("#5555dd")
.setDescription(`<:coin:936183114223456257> Toplamda **${coin || 0 }** Coin'e sahipsin.`)
return i.reply({ embeds: [bakıyeembed], ephemeral: false  });
      } else if (i.customId == "market") {
  var embed = new MessageEmbed()
 .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
  .setColor("#5555dd")
  .setDescription(`<:duyueu:935979524003356713> Selam **${i.user.tag}** Ghost Coin Bot Market Menüsüne Hoşgeldin! \n\n **:zap: Aktif Ürünler** \n\n <:spo:929740207916449885> **Spotify Premium** \n Gerekli Coin: **3000** (!satın al spotify-pre) \n <@&878575290316640327> **Sunucu Rolü** \n Gerekli Coin: **1000** (!satın-al vip-rol) `)
  .setFooter("Ghost Market")
  .setTimestamp()
return i.reply({embeds: [embed] })         
} else if (i.customId == "gunluk") {
function rastgeleMiktar(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min)) + min;
}
let times = await db.fetch(`worktime1_${message.author.id}`);
let day = 86400000;
if (times !== null && day - (Date.now() - times) > 0) {
let time = ms(day - (Date.now() - times));
i.reply({ content: `<:kilit:935979857878331433> Günlük ödülünü zaten almışssın. Lütfen **${time.hours}** saat, **${time.minutes}** dakika sonra tekrar dene!`, ephemeral: false });
 } else {
let moneys = rastgeleMiktar(2,5);
i.reply({ content: `Günlük ödülünü topladın \<:coin:936183114223456257> **${moneys}** Coin!`, ephemeral: false }); db.set(`worktime1_${message.author.id}`, Date.now())
db.add(`coin_${message.author.id}`, moneys);
        } } else if (i.customId == "calıskazan") {    
let times = await db.fetch(`worktime3_${message.author.id}`);
let day = 300000;
if (times !== null && day - (Date.now() - times) > 0) {
let time = ms(day - (Date.now() - times));
i.reply({ content: `:x: Zaten yeteri kadar çalışmışsın Lütfen **${time.minutes}** dakika sonra tekrar dene!`, ephemeral: false });
 } else {
db.add(`kapasite_${message.author.id}`, 15)
let miktarsonuç = (bt.rastgele("15", "pozitif"))
var sebep = ["Ghost Şirketinde Çalıştı","Kaanın yanında çalıştı","Bisikletçide çalıştı","Bankada çalıştı","Babasının yanında çalıştı","Bimde çalıştı","A101 de çalıştı","Discord Firmasında çalıştı","CZN Burak Restorantında çalıştı","Garsonluk Yaptı","Araba Tamir Etti"]
var sebepsonuç = sebep[Math.floor(Math.random() * sebep.length)];
db.set(`worktime3_${message.author.id}`, Date.now())
db.add(`coin_${message.author.id}`, miktarsonuç)
const embed = new MessageEmbed()
.setDescription(`**${message.author.username}** ${sebepsonuç} ve ${miktarsonuç} <:coin:936183114223456257>  kazandı!`)
.setColor("#5555dd")
return i.reply({embeds: [embed] })         
} 
} else if (i.customId == "ara") {
let times = await db.fetch(`worktime4_${message.author.id}`);
let day = 200000;
if (times !== null && day - (Date.now() - times) > 0) {
let time = ms(day - (Date.now() - times));
i.reply({ content: `:x: Zaten yeteri kadar aramışsın Lütfen **${time.minutes}** dakika sonra tekrar dene!`, ephemeral: false });
 } else {
db.add(`kapasite_${message.author.id}`, 10)
let miktarsonuç = (bt.rastgele("10", "pozitif"))
var sebep = ["Kaanı aradı","Melihi aradı","Sefayı aradı","Reynameni aradı","Yamaç Koovalıyı aradı","Vartolu Saadettini aradı","Ghost Şirketini aradı","Trendyolu aradı","Annesini aradı","Arkadaşını aradı","Yusufu aradı","Cemi aradı","Hayaletleri aradı"]
var sebepsonuç = sebep[Math.floor(Math.random() * sebep.length)];
db.set(`worktime4_${message.author.id}`, Date.now())
db.add(`coin_${message.author.id}`,miktarsonuç)
const embed = new MessageEmbed()
.setDescription(`**${message.author.username}** ${sebepsonuç} ve ${miktarsonuç} <:coin:936183114223456257>  kazandı!`)
.setColor("#5555dd")
return i.reply({embeds: [embed] }) 
}
 } else if(i.customId = "dılen") {

let times = await db.fetch(`worktime5_${message.author.id}`);
let day = 100000;
if (times !== null && day - (Date.now() - times) > 0) {
let time = ms(day - (Date.now() - times));
i.reply({ content: `:x: Zaten yeteri kadar dilenmişssin Lütfen **${time.minutes}** dakika sonra tekrar dene!`, ephemeral: false });
 } else {
db.add(`kapasite_${message.author.id}`, 10)
let miktarsonuç = (bt.rastgele("50", "pozitif"))
var sebep = ["Kaandan para dilendi","Melihden para dilendi","Kaandan nitro dilendi","Melihden hesap dilendi","Sunucuda perm dilendi"]
var sebepsonuç = sebep[Math.floor(Math.random() * sebep.length)];
db.set(`worktime4_${message.author.id}`, Date.now())
db.add(`coin_${message.author.id}`,miktarsonuç)
const embed = new MessageEmbed()
.setDescription(`**${message.author.username}** ${sebepsonuç} ve ${miktarsonuç} <:coin:936183114223456257>  kazandı!`)
.setColor("#5555dd")
return i.reply({embeds: [embed] }) 

 }
}
})
})
}
}