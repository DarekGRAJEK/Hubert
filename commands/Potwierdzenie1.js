const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    await message.delete();
    let name = message.author.id;
    let gRole = Discord.guild.roles.get(`name`, "Regulamin✅");
    if(!gRole) return message.replay("Error 2!")
try
    await(name.addRole(gRole.id));
catch (e) return message.channel.send("No...")

}


module.exports.help = {
    name: "accept"
}