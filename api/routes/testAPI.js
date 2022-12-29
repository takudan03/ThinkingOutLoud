const { json } = require("express");
var express = require("express");
var router = express.Router();
var fs = require("fs");


const { MongoClient } = require("mongodb");
const uri =
"mongodb://localhost:27017/thinkingOutLoud/thoughts";

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

// router.get("/", function (req, res, next) {
//   async function readDataFromFile(){
//     const data =  await fs.readFileSync("temp.json");
//     // return data.toString();
//     return JSON.parse(data.toString());

//   }
//   readDataFromFile()
//     // .then((data)=>console.log((JSON.parse(data))))
//     .then((data)=> {
//         res.send(data)
//     })
//     .catch((err)=>console.log(err));
// })

// How to write to a file
// 
// fs.writeFile("temp.txt", data, (err) => {
//   if (err) console.log(err);
//   console.log("Successfully Written to File.");
// });

module.exports = router;
