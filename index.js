const config = require("./core/config");
const schedule = require("./schedule/schedule");

(async function () {
  require("./core/bot").init();

  const bot = require("./core/bot").instance();
  const commands = require("./commands/commands");

  bot.on("ready", () => {
    console.log(`Logged in as ${bot.user.tag}.`);

    schedule();
  });

  bot.on("message", async (message) => {
    if (!message.content.startsWith(config.prefix)) {
      return;
    }

    let args = message.content.slice(config.prefix.length).split(" ");
    let command = args.shift().toLowerCase();

    commands[command].execute(message, args);
  });

  require("./server")();
  bot.login(config.token);
})();
