const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 
    let rMember = message.author.user.username;
    let role = message.guild.roles.find(`name`, "Regulamin✅");
    if(!role) return message.replay("Error 2!")

    await(rMember.addRole(role.id));

    await message.delete();
}


module.exports.help = {
    name: "accept"
}