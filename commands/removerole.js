const Discord = require("discord.js");
const errors = require("../utility/error.js");

module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("MANAGE_ROLES")) return errors.noPerms(message, "MANAGE_ROLES");
  if(args[0] == "help"){
    message.reply("Usage: !removerole <user> <role>");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return errors.cantfindUser(channel);
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify a role!").then(m => m.delete(5000));
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return errors.notfindRole(message);

  if(!rMember.roles.has(gRole.id)) return message.reply("They don't have that role.").then(m => m.delete(5000));
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`RIP, you lost the ${gRole.name} role.`)
  }catch(e){
    message.channel.send(`RIP to <@${rMember.id}>, We removed ${gRole.name} from them. We tried to DM them, but their DMs are locked.`).then(m => m.delete(5000));
  }
}

module.exports.help = {
  name: "removerole"
}