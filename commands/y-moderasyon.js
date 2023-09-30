const { CommandInteraction,Client } = require("discord.js");
module.exports = {
    name:"moderasyon",
    description: 'Moderasyon komutlarını gösterir!',
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
                title: "Moderasyon Komut Menüsü",
                description: "Zone Botun Moderasyon Komutları İşte Karşında!",
                color: 0x00ff00,
                fields:[
                    {name: "/ban", value: "Belirlediğin Kişiyi Sunucudan Yasaklarsın!", inline: true},
                    {name: "/unban", value: "Belirlediğin Kişinin Yasağını Kaldırır!", inline: true},
                    {name: "/sil", value: "Belirlediğin Miktarda Mesaj Siler!", inline: true},
                    {name: "/oto-rol", value: "Ayarlanan Rolü Otomatik Girenlere Verir!", inline: true},                                       
                    {name: "/küfür-engel", value: "Küfür Edilmesini Engeller!", inline: true},
                    {name: "/reklam-engel", value: "Link Atılmasını Engeller!", inline: true},
                    {name: "/yavaş-mod", value: "Kanala Belirttiğin Sürede Yavaş Mod Uygular!", inline: true}, 
                    {name: "/giriş-çıkış", value: "Giriş-Çıkış Kanalını Ayarlarsın!", inline: true},                                       
                ],
                thumbnail: {url: client.user.avatarURL({dynamic:true})},
            }
        ]});
}
};