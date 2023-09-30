const { EmbedBuilder, ChannelType } = require('discord.js');
const ms = require('ms');

module.exports = {
    name: 'yavaş-mod',
    description: 'Kanala yavaşmod ayarlama.',
    type: 1,
    options: [
        {
            name: 'süre',
            description: 'Yavaş Modun Süresi 1m 1h .',
            type: 3,
            required: true
        },
        {
            name: 'kanal',
            description: 'Yavaşmodu ayarlamak için kanal.',
            type: 7,
            channel_types: [ChannelType.GuildText],
            required: false
        }
    ],
    role_perms: ['981187294927142912'],
    developers_only: false,
    category: 'Moderation',
    run: async (client, interaction, config) => {
        const durationInput = interaction.options.get('süre').value;
        const channelInput = interaction.options.get('kanal')?.value || interaction.channel.id;

        const duration = ms(durationInput);
        const channel = interaction.guild.channels.cache.get(channelInput);

        if (!channel) return interaction.reply({
            content: `\`❌\` Kanal Sunucuda Değil.`,
            ephemeral: true
        });

        if (duration > 21600000 || duration < 0) return interaction.reply({
            content: `\`❌\` Yavaş mod **negatif** veya **6h** üzerinde olamaz.`,
            ephemeral: true
        });

        try {
            if (duration > 0) {
                await channel.setRateLimitPerUser(duration / 1000);

                interaction.reply({
                    content: `\`✅\` YavaşMod ${channel} Kanalına Uygulandı!`,
                    ephemeral: true
                });

                return channel.send({
                    embeds: [
                        new EmbedBuilder()
                            .setDescription(`YavaşMod Süresi **${durationInput}** Olarak Ayarlandı.`)
                            .setColor('Blue')
                    ]
                });
            } else {
                await channel.setRateLimitPerUser(null);

                interaction.reply({
                    content: `\`✅\` YavaşMod Başarıyla ${channel} Kanalında Devre Dışı Bırakıldı!`,
                    ephemeral: true
                });

                return channel.send({
                    embeds: [
                        new EmbedBuilder()
                            .setDescription(`YavaşMod  **Kapandı**.`)
                            .setColor('Blue')
                    ]
                });
            };
        } catch {
            return interaction.reply({
                content: `\`❌\` Bir Şeyler Ters Gitti!`,
                ephemeral: true
            });
        };
    }
};