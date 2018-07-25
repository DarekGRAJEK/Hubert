const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let gRole = message.guild.role.get(`name`, "Regulamin √");

    if (rUser.role.has(gRole.id));
    await(rUser.addRole(gRole.id));

    message.delete().catch(O_o=>{});


}


module.exports.help = {
    name: "Y"
}