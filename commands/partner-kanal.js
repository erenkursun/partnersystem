const Discord = require("discord.js");
const db = require("croxydb")
exports.run = async (client, message, args) => {
let kanal = message.mentions.channels.first()
if (!kanal) return message.reply("<:ok:1088881942725926982> Lütfen Bir Kanal Etiketle!")
message.reply("<:ok:1088881942725926982> Başarıyla Partner Kanalı Ayarlandı! <a:redlax_onay:1088882388953731142>")
db.set(`kanal${message.guild.id}`, kanal.id)
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "partner-kanal"
};
