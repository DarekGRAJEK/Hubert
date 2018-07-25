const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = Discord.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.replay("Error 1!")
    let gRole = Discord.guild.roles.find(`name`, "Regulamin √");
    if(!gRole) return message.replay("Error 2!")

    if (rUser.role.has(gRole.id));
    await(rUser.addRole(gRole.id));

    message.delete().catch(O_o=>{});


}


module.exports.help = {
    name: "Y"
}