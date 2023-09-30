const { CommandInteraction,Client } = require("discord.js");
module.exports = {
    name:"davet-menü",
    description: 'Davet sistemi komutlarını gösterir!',
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
                title: "Davet-Sistemi Komut Menüsü",
                description: "Zone Botun Davet-Sistemi Komutları İşte Karşında!",
                color: 0x00ff00,
                fields:[
                    {name: "/davet-sistemi", value: "Davet Sistemini Kurarsın!", inline: true},
                    {name: "/davet-sıfırla", value: "Davet Sistemini Sıfırlarsın!", inline: true},
                    {name: "/davetlerim", value: "Yaptığın Davet Sayısını Gösterir!", inline: true},
                    
                ],
                thumbnail: {url: client.user.avatarURL({dynamic:true})},
            }
        ]});
}
};