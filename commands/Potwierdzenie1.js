const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    await message.delete();
    let gRole = Discord.guild.roles.get(`name`, "Regulamin √");
    if(!gRole) return message.replay("Error 2!")

    await(message.author.addRole(gRole.id));


}


module.exports.help = {
    name: "y"
}