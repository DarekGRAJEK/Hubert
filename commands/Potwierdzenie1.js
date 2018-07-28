const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    await message.delete();
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
   await message.delete();
    if(!rMember) return message.reply("Nie znalazłem nicku.", "DM");
    let role = message.guild.roles.find(`name`, "Regulamin✅");
    await message.delete();
    if(!role) return message.replay("Error 2!")

    await(rMember.addRole(role.id));

    await message.delete();
}


module.exports.help = {
    name: "accept"
}