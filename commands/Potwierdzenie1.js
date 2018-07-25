const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let gRole = guild.roles.find(`name`, "Regulamin √");

    if (rUser.role.has(gRole.id));
    await(rUser.addRole(gRole.id));

    message.delete().catch(O_o=>{});


}


module.exports.help = {
    name: "Y"
}