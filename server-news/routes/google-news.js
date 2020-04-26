
const express = require('express');
const router = express.Router();
const controller = require('../controllers/google-news');

router.route('')
  .get(controller.getGoogleNews)

module.exports = router;