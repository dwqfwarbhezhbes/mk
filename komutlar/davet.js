const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel mesajlarını kontrol et. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('İşte Davet Linkim: https://discordapp.com/oauth2/authorize?client_id=606917370023378981&scope=bot&permissions=805829694 Buda Bizim Destek Sunucusu :)  https://discord.gg/tTkpcGp');
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botu ekle', 'botu davet et', 'botuekle', 'invite'],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Botun davet linkini gönderir.',
  usage: 'davet'
};
