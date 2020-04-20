const express = require('express');
var bodyParser = require("body-parser");
const newsRoute = require('./routes/news');
var cors = require('cors');

var app = express();
app.use(bodyParser.json());

// CORS
app.use(cors());

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// Serving static files
app.use(express.static(`${__dirname}/public`));

// ROUTES
app.use('/api/news', newsRoute);

module.exports = app;