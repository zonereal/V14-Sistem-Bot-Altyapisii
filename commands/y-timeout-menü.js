const { CommandInteraction,Client } = require("discord.js");
module.exports = {
    name:"timeout-menü",
    description: 'Timeout sistemi komutlarını gösterir!',
    type:1,
    options:[],
/**
 * 
 * @param {Client} client 
 * @param {CommandInteraction} interaction 
 */
    run: async (client, interaction) => {
        interaction.reply({embeds:[
            {
                title: "Timeout-Sistemi Komut Menüsü",
                description: "Zone Botun Timeout-Sistemi Komutları İşte Karşında!",
                color: 0x00ff00,
                fields:[
                    {name: "/timeout-sistemi", value: "Timeout Sistemini Kurarsın!", inline: true},
                    {name: "/timeout-sistemi-sıfırla", value: "Timeout Sistemini Sıfırlarsın!", inline: true},
                    {name: "/timeout", value: "Belirlediğin Kullanıcıya Timeout Atarsın", inline: true},
                    {name: "/untimeout", value: "Belirlediğin Kullanıcının Timeoutunu Kaldırırsın!", inline: true},
                    
                ],
                thumbnail: {url: client.user.avatarURL({dynamic:true})},
            }
        ]});
}
};