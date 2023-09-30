const { Client, EmbedBuilder } = require("discord.js");
const moment = require("moment");
  require("moment-duration-format");
  const os = require("os");
module.exports = {
  name: "istatistik",
  description: "Botun istatistiğini görürsün!",
  type: 1,
  options: [],

  run: async(client, interaction) => {
    const Uptime = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
    const istatistikembed = new EmbedBuilder()
    .addFields({ name: 'Bot Sahibi', value: `<@690587702688743455>`, inline: false})
    .addFields({ name: 'Bellek Kullanımı', value: `${(process.memoryUsage().heapUsed /1024 /512).toFixed(2)}MB`, inline: true})
    .addFields({ name: 'Çalışma Süresi', value: `${Uptime}`, inline: true})
    .addFields({ name: 'Kullanıcılar', value: `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, inline: false})
    .addFields({ name: 'Sunucular', value: `${client.guilds.cache.size}`, inline: false})
    .addFields({ name: 'Kanallar', value: `${client.channels.cache.size}`, inline: false})
    .addFields({ name: 'İşletim Sistemi', value: `Windows 10 Pro 64 Bit`, inline: false})
    .addFields({ name: 'İşlemci', value: `${os.cpus().map(i => `${i.model}`)[0]}`, inline: false})
    .addFields({ name: 'Discord.JS sürüm', value: `14.2.0`, inline: true})
    .addFields({ name: 'Node.JS sürüm', value: `v16.14.2`, inline: true})
    .addFields({ name: 'Ping', value: `${client.ws.ping}`, inline: true})
    interaction.reply({embeds: [istatistikembed]})

  }

};