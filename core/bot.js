const { Client, MessageEmbed } = require('discord.js');

let bot = null;

module.exports = function() {
  return bot;
}

exports.init = function() {
  bot = new Client({
    presence: {
      status: 'online',
      activity: {
        name: `Esperando eles acordarem`,
        type: 'LISTENING'
      }
    }
  });

}