const { Client } = require("discord.js");

let bot = null;

module.exports = {
  init: function () {
    bot = new Client({
      fetchAllMembers: true,
      presence: {
        status: "online",
        activity: {
          name: `Esperando eles acordarem`,
          type: "LISTENING",
        },
      },
    });
  },
  instance: function () {
    return bot;
  },
};
