var MongoClient = require('mongodb').MongoClient, format = require('util').format;
var http = require('http');
//
// MongoClient.connect('mongodb://127.0.0.1:27017', function(err, db) {
//   if (err) {
//     throw err;
//   } else {
//     console.log("Connected")
//   }
//   console.log("Database created!");
//   db.close();
// });

MongoClient.connect('mongodb://127.0.0.1:27017/pingdb', function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
