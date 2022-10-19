var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
const { MongoClient } = require("mongodb");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testAPIRouter = require("./routes/testAPI");
var exploreRouter = require('./routes/explore');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/testAPI", testAPIRouter);
app.use("/explore", exploreRouter)

const uri =
  "mongodb://localhost:27017/";

// var thoughts = [
//     { _id: 1, postContent: "lorem ipsum", postedBy: "abc" },
//     { _id: 2, postContent: "lorem ipsum", postedBy: "abc" },
//     { _id: 3, postContent: "lorem ipsum", postedBy: "def" },
//     { _id: 4, postContent: "lorem ipsum", postedBy: "ghi" },
//     { _id: 6, postContent: "lorem ipsum", postedBy: "abc" },
//     { _id: 7, postContent: "lorem ipsum", postedBy: "abc" },
//     { _id: 8, postContent: "lorem ipsum", postedBy: "abc" },
//     { _id: 9, postContent: "lorem ipsum", postedBy: "abc" }
// ];

// How to insert into DB
// MongoClient.connect(uri, function(err, db) {
  
//     if (err) throw err;
//     var dbo = db.db("thinkingOutLoud");
//     console.log("Database connected!");
//     dbo.collection("thoughts").insertMany(thoughts, function(err, res) {
//       if (err) throw err;
//       console.log("documents inserted");
//       db.close();
//     });
//   });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});








module.exports = app;
