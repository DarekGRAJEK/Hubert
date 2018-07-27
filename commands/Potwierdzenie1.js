const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delate();
    let rUser = message.author.id;
    if(!rUser) return message.replay("Error 1!")
    let gRole = Discord.guild.roles.find(`name`, "Regulamin √");
    if(!gRole) return message.replay("Error 2!")

    if (rUser.role.has(gRole.id));
    await(rUser.addRole(gRole.id));


}


module.exports.help = {
    name: "Y"
}