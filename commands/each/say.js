module.exports = function(message, args) {
  if (args.length > 0) {
    message.channel.send(args.join(' '));
  } else {
    message.reply('You did not send a message to repeat, cancelling command.');
  }
}

exports.info = {
  aliases: ['repeat'],
  description: 'Repeats whatever is said.',
  format: 'say <message>'
};