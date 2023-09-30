const { CommandInteraction,Client } = require("discord.js");
module.exports = {
    name:"yardım",
    description: 'Yardım Menüsü',
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
                title: "Zone / Yardım Menüsü",
                description: "Zone Botun Yardım Menüsü İşte Karşında!",
                color: 0x00ff00,
                fields:[
                    {name: "/normal", value: "Normal Komutları Gösterir!", inline: true},
                    {name: "/moderasyon", value: "Moderasyon Komutlarını Gösterir!", inline: true},
                    {name: "/davet-menü", value: "Davet Sistemi Komutlarını Gösterir", inline: true},
                    {name: "/timeout-menü", value: "Timeout Sistemi Komutlarını Gösterir", inline: true},
                    
                ],
                thumbnail: {url: client.user.avatarURL({dynamic:true})},
            }
        ]});
}
};