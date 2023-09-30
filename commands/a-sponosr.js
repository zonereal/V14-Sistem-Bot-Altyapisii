const { EmbedBuilder, ModalBuilder, TextInputBuilder, ActionRowBuilder, TextInputStyle, PermissionsBitField } = require("discord.js");
const db = require("croxydb")
module.exports = {
    name: "sponsor",
    description: "Mevcut Olan Sponsorumuzu Görüntülersiniz.",
    type: 1,
    options: [],

    run: async (client, interaction) => {
var text = db.fetch(`sponsor`)
if(!text) {
  interaction.reply({content: `Hiç sponsorumuz yok.`})
} else {
      interaction.reply({content: text})
}
    }
}; 