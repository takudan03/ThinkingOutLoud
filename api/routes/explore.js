const { MongoClient } = require("mongodb");
const { json } = require("express");
var express = require("express");
var router = express.Router();

const uri =
"mongodb://localhost:27017/thinkingOutLoud/thoughts";
// var thoughts={};

var thoughts;


router.get('/explore', function (req, res, next) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("thinkingOutLoud");
        dbo.collection("thoughts").find({}).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          thoughts=result;
          db.close();
        });
      });
    res.send(JSON.stringify(thoughts));
});

module.exports = router;




