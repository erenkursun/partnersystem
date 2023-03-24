const Discord = require("discord.js");
const db = require("croxydb")
exports.run = async (client, message, args) => {
   const embed = new Discord.EmbedBuilder()
   .setTitle("<a:psoprime_emoji:1084585759195021422> Partner Sistemi <a:psoprime_emoji:1084585759195021422>")
   .setDescription("<:ok:1088881942725926982> Aşağıdaki Butondan Partner Yazısını Ayarlayabilirsin!")
const row = new Discord.ActionRowBuilder()
.addComponents(
new Discord.ButtonBuilder()
.setLabel("<:ayarlar:1088897577698734250> Yazı Ayarla!")
.setStyle(Discord.ButtonStyle.Secondary)
.setCustomId("partner_yazi"))
message.reply({embeds: [embed], components: [row]})
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "partner-yazı"
};
