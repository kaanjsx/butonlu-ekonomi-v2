const { MessageButton, MessageEmbed, MessageActionRow } = require("discord.js");
const db = require("quick.db");

module.exports = {
name: "satın-al",
async execute(client, message, args) {

const coins = db.get(`coin_${message.author.id}`);

  let embed = new MessageEmbed().setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic:true})).setFooter(client.user.username, client.user.displayAvatarURL({dynamic:true})).setThumbnail(message.guild.iconURL()).setColor("#5555dd").setTimestamp();
  let para = db.get(`coin_${message.author.id}`);
  let arg = args[0];
  if(!arg) {
    return message.channel.send({ embeds: [ embed.setDescription(":x: Lütfen satın alacağın şeyi yaz:\n\n 1. `spotify`- Fiyatı: `5000` - Spotify premiuma sahip olursun.\n 2. `vip` - Fiyatı: `1000` - Hoş bir vip rolü istemezmisin?") ] })
  } else if(arg == "spotify") {
    if(para < 5000) {
      return message.channel.send({ embeds: [ embed.setDescription(`:x: Senin toplam **${para || 0}** coinin var!\n:x: Bunu alabilmek için **${5000-para}** coine daha ihtiyacın var!`) ] })
    } else {
     var spo = ["https://spotify.com","https://spotify.com/user","kendininkileri ekle random atıcak aile premium plan eklesen daha iyi olur"]
var spoat = spo[Math.floor(Math.random() * spo.length)];
      await db.subtract(`coin_${message.author.id}`, 5000);
     message.member.send(spoat)
      return message.channel.send({ embeds: [ embed.setDescription(":white_check_mark: Başarıyla `spotify` adlı ürün satın alındı!\n - Güle güle kullanman dileğiyle!") ] });
    };
    } else if(arg == "vip") {
      if(para < 1000) {
        return message.channel.send({ embeds: [ embed.setDescription(`:x:  Senin toplam **${para || 0}** coinin var!\n- Bunu alabilmek için **${1000-para}** coine daha ihtiyacın var!`) ] })
      } else {
        await db.subtract(`coin_${message.author.id}`, 1000);
        message.guild.members.cache.get(message.author.id).roles.add("878575290316640327")
        return message.channel.send({ embeds: [ embed.setDescription(":white_check_mark: Başarıyla `vip` adlı rol satın alındı!") ] });

    };

    
    }
 
}
}