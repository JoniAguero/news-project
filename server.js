const app = require('./server-news/app');
var mongodb = require("mongodb");
var ObjectId = require('mongodb').ObjectId; 

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

app.get("/api/news/user/:id", function(req, res) {
  db.collection('news').find({ 
    "userId": req.params.id
   }).toArray(function(err, users) {
    if (err) {
      handleError(res, err.message, "Failed to get uers.");
    } else {
      res.status(200).json(users);
    }
  });
});

app.get("/api/news/:id", function(req, res) {
  db.collection('news').find({
    "_id": ObjectId(req.params.id)
  }).toArray(function(err, _new) {
    if (err) {
      handleError(res, err.message, "Failed to get uers.");
    } else {
      res.status(200).json(_new);
    }
  });
});

// ** POSTS **

app.post("/api/posts", function(req, res) {

  var document = req.body;

  if (!req.body) {
    handleError(res, "Invalid data", "Wrong new.", 400);
  } else {
    db.collection('posts').insertOne(document, function(err, doc) {
      if (err) {
        handleError(res, err.message, "Failed to create new document.");
      } else {
        res.status(201).json(doc.ops[0]);
      }
    });
  }
});

app.get("/api/posts/user/:id", function(req, res) {
  db.collection('posts').find({ 
    "userId": req.params.id
   }).toArray(function(err, users) {
    if (err) {
      handleError(res, err.message, "Failed to get uers.");
    } else {
      res.status(200).json(users);
    }
  });
});

app.get("/api/posts/", function(req, res) {
  db.collection('posts').find().toArray(function(err, users) {
    if (err) {
      handleError(res, err.message, "Failed to get uers.");
    } else {
      res.status(200).json(users);
    }
  });
});

// ** USERS **

app.post("/api/users", function(req, res) {

  var document = req.body;

  if (!req.body) {
    handleError(res, "Invalid data", "Wrong user.", 400);
  } else {
    db.collection('users').find({}).toArray(function(err, users) {
      let exists = false;
      let verifyUser;
      users.forEach(user => {
        if(user.sub == req.body.sub) {
          exists = true;
          verifyUser = user;
        }
      });
      if(exists) {
        res.status(200).json({
          data: verifyUser
        });
      } else {
        db.collection('users').insertOne(document, function(err, doc) {
          if (err) {
            handleError(res, err.message, "Failed to create new user.");
          } else {
            res.status(201).json(
              {
                status: 'user created',
                data: doc.ops[0]
              });
          }
        });
      }
    });
  }
});

app.get("/api/users", function(req, res) {
  db.collection('users').find({}).toArray(function(err, users) {
    if (err) {
      handleError(res, err.message, "Failed to get uers.");
    } else {
      res.status(200).json(users);
    }
  });
});

app.get("/api/users/:id", function(req, res) {
  db.collection('users').find({
    "_id": ObjectId(req.params.id)
  }).toArray(function(err, user) {
    if (err) {
      handleError(res, err.message, "Failed to get uers.");
    } else {
      res.status(200).json(user);
    }
  });
});