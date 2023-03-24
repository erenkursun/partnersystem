const Discord = require("discord.js");
const db = require("croxydb")
exports.run = async (client, message, args) => {
let kanal = message.mentions.channels.first()
if (!kanal) return message.reply("<:ok:1088881942725926982> Lütfen Bir Log Kanalı Etiketle!")
message.reply("<:ok:1088881942725926982> Başarıyla Partner Logu Ayarlandı! <a:redlax_onay:1088882388953731142>")
db.set(`log${message.guild.id}`, kanal.id)
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "partner-log"
};
