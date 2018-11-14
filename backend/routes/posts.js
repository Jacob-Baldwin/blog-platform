var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var config = require('../../config.json');

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
  title: String,
  body: String,
  dateposted: String,
  datemodified: String
});

var Post = mongoose.model('Post', postSchema);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('MongoDB Connected');
});


router.post('/new', function(req, res, next) {
  // post a new comment
  console.log("new post called");
  console.log(req.body);

  // create the comment
  var p = new Post(req.body);

  // save the comment
  p.save(function(err, post) {
    if (err) return console.error(err);
    console.log(post);
    res.sendStatus(200);
  });
});

router.get('/', function(req, res, next) {
  // return all comments
  console.log("posts get called");
  Post.find({}, function(err, posts) {
    var postsMap = {};

    posts.forEach(function(p) {
      postsMap[p._id] = p;
    });

    res.send(postsMap);
  });
});



module.exports = router;
