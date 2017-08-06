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
  var myobj = { event_id: "003", name: "XOXO", amount: "7", price: "15.00", location:"0,1" };
  db.collection("events").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 record inserted");
    db.close();
  });
});
