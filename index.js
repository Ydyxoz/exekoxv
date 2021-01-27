const Discord = require("discord.js");

const Client = new Discord.Client;


Client.on("ready", () => {
    console.log("bot opérationnel");
});

Client.login(process.env.TOKEN);
