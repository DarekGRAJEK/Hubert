const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    await message.delete();
    let role = "Regulamin √" 
    let gRole = Discord.guild.roles.get(`name`, role);
    if(!gRole) return message.replay("Error 2!")

    if (message.author.id.role.has(gRole.id));
    await(message.author.id.addRole(gRole.id));


}


module.exports.help = {
    name: "Y"
}