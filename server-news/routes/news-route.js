const express = require('express');
const router = express.Router();
const controller = require('../controllers/news-controller');

router.route('/')
  .get(controller.getNews)
  .post(controller.createNew)

router.route('/:id')
  .get(controller.getNewById)
  .patch(controller.updateNew)
  .delete(controller.deleteNew)

module.exports = router;