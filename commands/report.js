const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Couldn't find user.");
    let reason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Report")
    .setColor("#fc0000")
    .addField("Zgłoszony Użytkownik", `${rUser} z ID: ${rUser.id}`)
    .addField("Zgłoszony Przez", `${message.author} z ID: ${message.author.id}`)
    .addField("Kanał", message.channel)
    .addField("Czas", message.createdAt)
    .addField("Powód", reason);

    let reportschannel = message.guild.channels.find(`name`, `reports`);
    if(!reportschannel) return message.channel.send("Couldn't find reports channel");

    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}


module.exports.help = {
    name: "report"
}