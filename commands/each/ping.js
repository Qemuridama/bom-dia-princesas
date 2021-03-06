module.exports = {
  execute: async function (message) {
    let msg = await message.reply("Pinging...");
    await msg.edit(
      `PONG! Message round-trip took ${Date.now() - msg.createdTimestamp}ms.`
    );
  },
  info: {
    description: "Checks connectivity with discord's servers.",
    format: "ping",
  },
};
