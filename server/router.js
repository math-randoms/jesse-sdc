const router = require('express').Router();
const controller = require('./controller.js');

//req.body
router
  .route('/desc')
  .get(controller.getLoc)
  .post(controller.post)

router
  .route('/desc/:id')
  .get(controller.get)
  .put(controller.update)
  .delete(controller.delete)

module.exports = router