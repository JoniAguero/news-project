const New = require('../models/news.model');
const factory = require('./handleFactory');
const {db} = require('../../server')

exports.getNews = factory.getAll(New);

exports.getNewById =  factory.getById(New);

exports.createNew = (req, res) => {

  const newDocument = req.body;
  
  db.collection('news').insertOne(newDocument, function(err, doc) {
    if (err) {
      factory.handleError(res, err.message, "Failed to create new contact.");
    } else {
      res.status(201).json(
        {
          status: 'success',
          document: newDocument
        }
      );
    }
  })
};

exports.deleteNew = factory.delete(New);

exports.updateNew = factory.update(New);

