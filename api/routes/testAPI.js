const { json } = require("express");
var express = require("express");
var router = express.Router();
var fs = require("fs");


const { MongoClient } = require("mongodb");
const uri =
"mongodb://myMongoInstance:27019/thinkingOutLoud/thoughts";

var posts;

router.get("/", function (req, res, next) {
  try {
    MongoClient.connect(uri, function (err, db) {
      if (err) throw err;
      var dbo = db.db("thinkingOutLoud");
      dbo.collection("thoughts").find({}).toArray(function (err, result) {
        if (err) throw err;
        posts = result;
        db.close();
      });
      res.send(JSON.stringify(posts));
    });
  } catch {
    res.send('Error Connecting to MONGODB');
  }
});

router.post("/newThought", (req, res) => {
  try {
    console.log('New Thought submitted');
    console.log(req.body);
    MongoClient.connect(uri, function (err, db) {
      if (err) throw err;
      var dbo = db.db("thinkingOutLoud");
      const result = dbo.collection("thoughts").insertOne(req.body);
    });
    res.send(JSON.stringify(posts));
  } catch {
    res.send('Error Connecting to MONGODB');
  }
})

router.get("/initDB", (req, res) => {
  try {

    var thoughts = [
      { _id: 1, postContent: "lorem ipsum", postedBy: "abc" },
      { _id: 2, postContent: "lorem ipsum", postedBy: "abc" },
      { _id: 3, postContent: "lorem ipsum", postedBy: "def" },
      { _id: 4, postContent: "lorem ipsum", postedBy: "ghi" },
      { _id: 6, postContent: "lorem ipsum", postedBy: "abc" },
      { _id: 7, postContent: "lorem ipsum", postedBy: "abc" },
      { _id: 8, postContent: "lorem ipsum", postedBy: "abc" },
      { _id: 9, postContent: "lorem ipsum", postedBy: "abc" }
    ];
    MongoClient.connect(uri, function (err, db) {
      if (err) throw err;
      var dbo = db.db("thinkingOutLoud");
      dbo.collection("thoughts").insertMany(thoughts, function(err, res) {
              if (err) throw err;
              console.log("documents inserted");
              db.close();
            });
    });
    res.send("DB Initialised");
  } catch {
    res.send('Error Connecting to MONGODB');
  }
})

module.exports = router;
