const { json } = require("express");
var express = require("express");
var router = express.Router();
const { MongoClient } = require("mongodb");
const uri =
"mongodb://localhost:27017/thinkingOutLoud/thoughts";

// var posts = {
//     1: { id: 1, postContent: "lorem ipsum", postedBy: "abc" },
//     2: { id: 2, postContent: "lorem ipsum", postedBy: "abc" },
//     3: { id: 3, postContent: "lorem ipsum", postedBy: "def" },
//     4: { id: 4, postContent: "lorem ipsum", postedBy: "ghi" },
//     6: { id: 6, postContent: "lorem ipsum", postedBy: "abc" },
//     7: { id: 7, postContent: "lorem ipsum", postedBy: "abc" },
//     8: { id: 8, postContent: "lorem ipsum", postedBy: "abc" },
//     9: { id: 9, postContent: "lorem ipsum", postedBy: "abc" },
// };

var posts;



router.get("/", function (req, res, next) {
    MongoClient.connect(uri, function(err, db) {
        if (err) throw err;
        var dbo = db.db("thinkingOutLoud");
        dbo.collection("thoughts").find({}).toArray(function(err, result) {
          if (err) throw err;
        //   console.log(result);
          posts=result;
          db.close();
        });
      });
    res.send(JSON.stringify(posts));
});

module.exports = router;
