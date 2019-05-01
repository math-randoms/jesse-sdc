const router = require('express').Router();
const controller = require('./controller.js');

//req.body
router
.route('/desc')
.get(controller.get)
.post(controller.post)

router
.route('/desc/:loc')
.get(controller.getLoc)

module.exports = router