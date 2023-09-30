const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
const louritydb = require("croxydb")
const Discord = require("discord.js")
module.exports = {
    name: "timeout-sistemi",
    description: "Timeout sistemini ayarlarsın.",
    type: 1,
    options: [
        {
            name: "log-kanalı",
            description: "Timeout atıldığında mesaj atılacacak kanalı ayarlarsın.",
            type: 7,
            required: true,
            channel_types: [0]
        },
        {
            name: "yetkili-rol",
            description: "Timeout atabilecek yetkili rolünü ayarlarsın.",
            type: 8,
            required: true,
        },
    ],
// lourity❤️ZONE
    run: async (client, interaction) => {

        const yetki = new Discord.EmbedBuilder()
            .setColor("Red")
            .setDescription("Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!")

        const kanal = interaction.options.getChannel('log-kanalı')
        const rol = interaction.options.getRole('yetkili-rol')

        if (!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) return interaction.reply({ embeds: [yetki], ephemeral: true })

        const basarili = new EmbedBuilder()
            .setColor("Green")
            .setDescription(`__**Timeout Sistemi**__ başarıyla ayarlandı! __/timeout__ komutu ile sistemi kullanabilirsin.\n\n💾 Log Kanalı: ${kanal}\n🐝 Yetkili Rolü: ${rol}`)

        louritydb.set(`timeoutSistemi_${interaction.guild.id}`, { log: kanal.id, yetkili: rol.id })
        return interaction.reply({ embeds: [basarili], ephemeral: true }).catch((e) => { })

    }

};