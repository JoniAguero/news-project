
const express = require('express');
const router = express.Router();
const controller = require('../controllers/news');

router.route('')
  .get(controller.getNews)

module.exports = router;