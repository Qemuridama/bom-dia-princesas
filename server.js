const app = require('express')();
const axios = require("axios");

app.get('/', (req, res) => res.send('Server is up.'));

module.exports = () => {
  app.listen(3000);
  
  function keepAlive() {
    setTimeout(async function() {
      await axios.get(
        `https://bom-dia-princesas.lakscastro.repl.co`
      );

      keepAlive();
    }, 5 * 60 * 1000);
  }
  keepAlive();
}