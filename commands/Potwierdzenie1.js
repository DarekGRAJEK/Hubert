const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 
    let rMember = message.author.username;
    await message.delete();
    let role = message.guild.roles.find(`name`, "Regulamin✅");
    console.log(rMember + " that a autor name.");
    if(!role) return message.replay("Error 2!")


    await(rMember.addRole(role.id));

   
}


module.exports.help = {
    name: "accept"
}