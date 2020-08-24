const { info: sayInfo } = require("./each/say");
const { info: repeatInfo } = require("./each/repeat");
const { info: helpInfo } = require("./each/help");
const { info: pingInfo } = require("./each/ping");

module.exports = {
  say: sayInfo,
  repeat: repeatInfo,
  help: helpInfo,
  ping: pingInfo
};
