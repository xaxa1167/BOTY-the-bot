const Discord = require("discord.js");
const tokenfile = require("./tokenfile.json");
const botconfig = require("./botconfig.json");
const bot = new Discord.Client({disableEveryone: true});
const prefix = botconfig.prefix;

bot.on("ready", async() => {
    console.log(`${bot.user.username} working!`);

    //pls dont modify this code bcus this is the watermark and if you delete this i report your bot!
    let statuses = [
        "github.com/xaxa1167/BOTY-the-bot",
        "Made by: xaxa1167",
        `prefix: ${prefix}`
    ];

    setInterval(function() {
        let status = statuses[Math.floor(Math.random()*statuses.length)]

        bot.user.setActivity(status, {type: "COMPETING" })
    },1000 );

})