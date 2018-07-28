const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 
    let rMember = message.author.username;
    let role = message.guild.roles.find(`name`, "Regulamin✅");
    if(!role) return message.replay("Error 2!")
    await message.delete();

    await(rMember.addRole(role.id));

   
}


module.exports.help = {
    name: "accept"
}