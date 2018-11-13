var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var config = require('../config.json');

if (config.mongo.user) {
  mongoose.connect('mongodb://' + config.mongo.user +
  ":" + config.mongo.password + "@" + config.mongo.address +'/' +
  config.mongo.database + "?authSource=" + config.mongo.authDB, { useNewUrlParser: true });
}
else {
  mongoose.connect('mongodb://' + config.mongo.address +'/' +
  config.mongo.database, { useNewUrlParser: true });
}

var postSchema = mongoose.Schema({
  Title: String,
  Body: String,
  DatePosted: String,
  DateModified: String
});

var blogSchema = mongoose.Schema({
  Title: String,
  AboutText: String,
  ContactEmail: String
});

var post = mongoose.model('Post', postSchema);
var blog = mongoose.model('Blog', blogSchema);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('MongoDB Connected');
});

module.exports = db;
