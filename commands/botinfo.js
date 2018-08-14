const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      await message.delete;
      let bicon = bot.user.displayAvatarURL;
      let botembed = new Discord.RichEmbed()
      .setDescription("Bot Information")
      .setColor("#01330e")
      .setThumbnail(bicon)
      .addField("Bot Name", bot.user.username)
      .addField("Prefix (conventional) is", "**$**")
      .addField("Created by", "DarekGRAJEK") 

      message.channel.send(serverembed).then(msg => {msg.delete(8000)});

}


     module.exports.help = {
        name: "botinfo"
    }