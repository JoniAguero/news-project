
const express = require('express');
const router = express.Router();
const controller = require('../controllers/images.js');

router.route('')
  .get(controller.getImages)

module.exports = router;