const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  await message.delete();
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't do that.").then(m => m.delete(5000));
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Couldn't find them yo").then(m => m.delete(5000));
  let warnlevel = warns[wUser.id].warns;
  if(!warnlevel) return message.reply("That player have any warns").then(m => m.delete(5000));
  
  message.channel.send(`<@${wUser.id}> has ${warnlevel} warnings.`).then(m => m.delete(5000));

}

module.exports.help = {
  name: "warns"
}
