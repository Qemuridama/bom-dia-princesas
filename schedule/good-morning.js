const schedule = require("node-schedule");
const axios = require("axios");
const translate = require("translation-google");
const utils = require("../utils");
const { Color } = require("ethereal-color");

const bomDiaChannelId = "747579257856720916";
const qemuridamaGuildId = "703291967450382417";

const quotesEndpoint = "https://type.fit/api/quotes";

module.exports = async function () {
  console.log("--Good Morning Scheduled");

  schedule.scheduleJob("0 0 7 * * *", async function () {
    const bot = require("../core/bot").instance();

    const guild = bot.guilds.cache.find(
      (guild) => guild.id === qemuridamaGuildId
    );

    let response;
    try {
      response = await axios.get(quotesEndpoint);
    } catch (e) {
      console.log(e);
      return;
    }

    const { data } = response;

    const quote = data[utils.randomInt(0, data.length - 1)];

    let text;

    try {
      text = (await translate(quote.text, { from: "en", to: "pt" })).text;
    } catch (e) {
      console.log(e);
      return;
    }

    const userId = Array.from(guild.members.cache.keys())[
      utils.randomInt(0, guild.members.cache.size - 1)
    ];
    const channel = bot.channels.cache.find(
      (channel) => channel.id === bomDiaChannelId
    );

    const color = parseInt(
      (() => {
        const color = Color();

        color.random();

        return color.get("hex").string.substring(1);
      })(),
      16
    );

    channel.send({
      embed: {
        color,
        author: {
          name: bot.user.username,
          icon_url: bot.user.avatarURL,
        },
        title: `Bom dia cambada de dev cansado, um novo dia começou`,
        url: "http://github.com/",
        description: `Hoje temos uma mensagem de ${quote.author} para <@${userId}>`,
        fields: [
          {
            name: "Será que foi apenas coincidência mesmo?",
            value: text,
          },
          {
            name: "Original",
            value: quote.text,
          },
        ],
        timestamp: new Date(),
        footer: {
          icon_url: bot.user.avatarURL,
          text: "© Qemuridama",
        },
      },
    });
  });
};
