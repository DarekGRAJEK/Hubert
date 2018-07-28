const Discord = require("discord.js");
const errors = require("../utility/error.js");


module.exports.run = async (bot, message, args) => {
    await message.delete();
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
if(!rMember) return errors.cantfindUser(channel)
 
   
    let role = message.guild.roles.find(`name`, "❤Girl👤");
    let role2 = message.guild.roles.find(`name`, "💙Boy👤");
    
    if(!role) return message.replay("Error 2!")


    await(rMember.addRole(role.id));
    await(rMember.removeRole(role2.id));
   
}


module.exports.help = {
    name: "dzw"
}