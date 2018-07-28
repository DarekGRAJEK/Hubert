const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    await message.delete();
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!rMember) return message.reply("Nie znalazłem nicku.", "DM");
    let role = message.guild.roles.find(`name`, "Regulamin✅");
    if(!role) return message.replay("Error 2!")

    await(rMember.addRole(role.id));


}


module.exports.help = {
    name: "accept"
}