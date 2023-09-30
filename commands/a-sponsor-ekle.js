const { EmbedBuilder, ModalBuilder, TextInputBuilder, ActionRowBuilder, TextInputStyle, PermissionsBitField } = require("discord.js");
module.exports = {
    name: "sponsor-ekle",
    description: "Sponsor eklersin.",
    type: 1,
    options: [],

    run: async (client, interaction) => {
  if(!interaction.member.roles.cache.get("1068955796311908354")){
    const x = new EmbedBuilder()
    .setColor('Green')
    .setDescription(`Bu komutu sadece sahibim kullanabilir.`)
    return interaction.reply({ embeds: [x] })
}
      
      const modal = new ModalBuilder()
                .setCustomId('sponsor')
                .setTitle('Sponsor ekle')

            const oneriveri = new TextInputBuilder()
                .setCustomId('text')
                .setLabel('Sponsor Text')
                .setStyle(TextInputStyle.Paragraph)
                .setMinLength(1)
                .setPlaceholder(`Sponsor text'inizi buraya giriniz.`)
                .setRequired(true)

            const firstActionRow = new ActionRowBuilder().addComponents(oneriveri)
            modal.addComponents(firstActionRow)

            await interaction.showModal(modal)
    }
}; 