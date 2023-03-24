const Discord = require("discord.js");
const db = require("croxydb")
exports.run = async (client, message, args) => {
let kanal = db.fetch(`kanal${message.guild.id}`)
if (!kanal) return message.reply("<:ok:1088881942725926982> Partner Kanalı Ayarlanmamış!")
let log = db.fetch(`log${message.guild.id}`)
if (!log) return message.reply("<:ok:1088881942725926982> Log Ayarlanmamış!")
let text = db.fetch(`text_${message.guild.id}`)
if (!text) return message.reply("<:ok:1088881942725926982> Partner Texti Ayarlanmamış!")
let gidenurl = args[0]
if (!gidenurl) return message.reply("<:ok:1088881942725926982> Lütfen Bir Sunucu ID'si Girin!")
let text2 = db.fetch(`text_${gidenurl}`)
if (!text2) return message.reply("<:ok:1088881942725926982> Belirtilen Sunucunun Texti Ayarlanmamış!")
let log2 = db.fetch(`log${gidenurl}`)
if (!log2) return message.reply("<:ok:1088881942725926982> Belirtilen Sunucunun Logu Ayarlanmamış!")
let kanal2 = db.fetch(`kanal${gidenurl}`)
if (!kanal2) return message.reply("<:ok:1088881942725926982> Belirtilen Sunucunun Partner Kanalı Ayarlanmamış!")

const embed = new Discord.EmbedBuilder()
.setTitle("Partner İsteği Geldi!")
.setDescription(`Partnerlik Atan Sunucu: ${message.guild.name}\n\nPartnerlik Atan: ${message.author}`)
const row = new Discord.ActionRowBuilder()
.addComponents(
new Discord.ButtonBuilder()
.setLabel("Evet")
.setStyle(Discord.ButtonStyle.Success)
.setCustomId("evet"),
new Discord.ButtonBuilder()
.setLabel("Hayır")
.setStyle(Discord.ButtonStyle.Danger)
.setCustomId("hayır")
)
client.channels.cache.get(log2).send({embeds: [embed], components: [row]})
message.channel.send("<:ok:1088881942725926982> Başarıyla Partnerlik İsteği Gönderildi. <a:redlax_onay:1088882388953731142>")
db.set(`partnerlikbekleniyor_${gidenurl}`, message.guild.id)
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "partner-ol"
};
