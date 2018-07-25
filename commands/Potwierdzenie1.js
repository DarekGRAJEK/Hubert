const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    await(rUser.addRole("@Regulamin √"));
    message.delete().catch(O_o=>{});


}


module.exports.help = {
    name: "Y"
}