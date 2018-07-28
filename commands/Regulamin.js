const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
if(!rMember) return message.reply("Nie znaleziono nicku");
 await message.delete();
   
    let role = message.guild.roles.find(`name`, "Regulamin✅");
    let role2 = message.guild.roles.find(`name`, "Regulamin⬛");
    
    if(!role) return message.replay("Error 2!")


    await(rMember.addRole(role.id));
    await(rMember.removeRole(role2.id));
   
}


module.exports.help = {
    name: "accept"
}