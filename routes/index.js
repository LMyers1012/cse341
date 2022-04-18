const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Zoey Myers');
});

module.exports = routes;
