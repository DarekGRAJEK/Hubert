const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    await message.delete();
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(rMember) return message.reply("Nie mogę znaleść twojego nicku.");
    let gRole = Discord.guild.roles.get(`name`, "Regulamin✅");
    if(!gRole) return message.replay("Error 2!")

    await(rMember.addRole(gRole.id));


}


module.exports.help = {
    name: "accept"
}