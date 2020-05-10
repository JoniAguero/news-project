const express = require('express');
var bodyParser = require("body-parser");
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

const googleNewsRoute = require('./routes/google-news');
const iamgesRoute = require('./routes/images');

var cors = require('cors');

var app = express();
app.use(bodyParser.json());

// CORS
app.use(cors());

const authConfig = {
  domain: "joni.auth0.com",
  audience: "http://localhost:8080/"
};


// Define middleware that validates incoming bearer tokens
// using JWKS from joni.auth0.com
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
  }),

  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithm: ["RS256"]
});

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// Serving static files
app.use(express.static(`${__dirname}/public`));

// ROUTES
app.use('/api/google-news', googleNewsRoute);
app.use('/api/images', iamgesRoute);

module.exports = app;