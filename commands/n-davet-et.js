const { Client, EmbedBuilder, ButtonBuilder, ActionRow } = require("discord.js");
const Discord = require("discord.js")
module.exports = {
  name: "davetet",
  description: "Botun davet bağlantısını atar!",
  type: 1,
  options: [],

  run: async(client, interaction) => {

    const dvt = new Discord.ButtonBuilder().setLabel('Davet Linkim').setStyle('Link').setEmoji('1044325557615202364').setURL('https://discord.com/api/oauth2/authorize?client_id=999053488766058670&permissions=8&scope=bot');
	const destek = new Discord.ButtonBuilder().setLabel('Destek Sunucum').setStyle('Link').setEmoji('1044325557615202364').setURL('https://discord.gg/fEfyJuyHez');
    const row = new Discord.ActionRowBuilder().addComponents(dvt).addComponents(destek)
    const embed = new EmbedBuilder()
    .setAuthor({ name: "Merhaba, Ben Zone!", iconURL: interaction.client.user.displayAvatarURL({ dynamic: true })})
.setTitle("Zone'u Davet Et!")
.setDescription(`Zone'u Şimdi Sunucuna Davet Et Ve Botun Tadını Çıkar!`)
.setColor('#2F3136')
.setTimestamp()
.setFooter({text: interaction.user.tag+" İstedi.", iconURL: interaction.user.displayAvatarURL({ dynamic: true })})

interaction.reply({ embeds: [embed], components:[row]});
  }  

};