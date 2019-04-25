const getPropertyHelper = require('../database/dbHelpers.js');

const controller = {
  get: (req, res) => {
    res.status(200).send('got it')
  }
}

module.exports = controller;