const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    await message.delete();
    let name = message.author();
    let gRole = Discord.guild.roles.get(`name`, "Regulamin √");
    if(!gRole) return message.replay("Error 2!")
    console.log(name);
    console.log(gRole);
    await(name.addRole(gRole.id));


}


module.exports.help = {
    name: "y"
}