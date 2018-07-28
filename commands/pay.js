const Discord = require("discord.js");
const fs = require("fs");
const errors = require("../utility/error.js");
let coins = require("../coins.json");


module.exports.run = async (bot, message, args) => {
  //!pay @isatisfied 59345
  await message.delete();
  if(!coins[message.author.id]){
    return message.reply("You do not have any money!")
  }

  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!pUser) return errors.cantfindUser(channel);
  if(!coins[pUser.id]){
    coins[pUser.id] = {
      coins: 0
    };
  }

  let pCoins = coins[pUser.id].coins;
  let sCoins = coins[message.author.id].coins;

  if(sCoins < args[0]) return message.reply("What you want to send costs you more than you have on your account.").then(msg => {msg.delete(5000)});

  coins[message.author.id] = {
    coins: sCoins - parseInt(args[1])
  };

  coins[pUser.id] = {
    coins: pCoins + parseInt(args[1])
  };

  message.channel.send(`${message.author} pay to ${pUser} ${args[1]} $.`);

  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if(err) cosole.log(err)
  });


}

module.exports.help = {
  name: "pay"
}