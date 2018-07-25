const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    await(rUser.addRole(471737400939380737))
    message.delete().catch(O_o=>{});


}


module.exports.help = {
    name: "Y"
}