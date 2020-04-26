const app = require('./server-news/app');
var mongodb = require("mongodb");

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
exports.db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/news", function (err, client) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = client.db();

  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

// ** NEWS **

app.post("/api/news", function(req, res) {

  var document = req.body;

  if (!req.body) {
    handleError(res, "Invalid data", "Wrong new.", 400);
  } else {
    db.collection('news').insertOne(document, function(err, doc) {
      if (err) {
        handleError(res, err.message, "Failed to create new document.");
      } else {
        res.status(201).json(doc.ops[0]);
      }
    });
  }
});

// ** USERS **

app.post("/api/users", function(req, res) {

  var document = req.body;

  if (!req.body) {
    handleError(res, "Invalid data", "Wrong user.", 400);
  } else {
    db.collection('users').insertOne(document, function(err, doc) {
      if (err) {
        handleError(res, err.message, "Failed to create new user.");
      } else {
        res.status(201).json(doc.ops[0]);
      }
    });
  }
});