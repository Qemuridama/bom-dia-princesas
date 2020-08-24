const commands = require('./commands/commands');
const config = require('./core/config');

(async function() {
  require('./core/bot').init();
  const bot = require('./core/bot')();

  const commands = Commands();

  bot.on('ready', () => console.log(`Logged in as ${bot.user.tag}.`));

  bot.on('message', async message => {
    if (!message.content.startsWith(config.prefix)) {
      return;
    }

    let args = message.content.slice(config.prefix.length).split(' ');
    let command = args.shift().toLowerCase();

    commands[command](message, args);
  });

  require('./server')();
  bot.login(config.token);
})();
