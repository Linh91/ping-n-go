var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var rand = require('random-seed').create();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/home.html');
});

app.get('/results', function (req, res) {
  res.sendFile(__dirname + '/views/results.html');
});

app.post('/results', urlencodedParser, function (req, res) {
  var seed = req.body;

	e1_id = require('random-seed').create(seed);
	e1_price = require('random-seed').create(seed);
  e1_distance = require('random-seed').create(seed);

  var e1_id = e1_id.intBetween(80, 100);
  var e1_price = e1_price.floatBetween(50, 100).toFixed(2);
  var e1_distance = e1_distance.intBetween(0, 0);

  e2_id = require('random-seed').create(seed);
	e2_price = require('random-seed').create(seed);
  e2_distance = require('random-seed').create(seed);

  var e2_id = e2_id.intBetween(40, 60);
  var e2_price = e2_price.floatBetween(20, 100).toFixed(2);
  var e2_distance = e2_distance.intBetween(1, 6);

  e3_id = require('random-seed').create(seed);
	e3_price = require('random-seed').create(seed);
  e3_distance = require('random-seed').create(seed);

  var e3_id = e3_id.intBetween(120, 140);
  var e3_price = e3_price.floatBetween(10, 50).toFixed(2);
  var e3_distance = e3_distance.intBetween(6, 12);

  e4_id = require('random-seed').create(seed);
  e4_price = require('random-seed').create(seed);
  e4_distance = require('random-seed').create(seed);

  var e4_id = e4_id.intBetween(20, 40);
  var e4_price = e4_price.floatBetween(0, 100).toFixed(2);
  var e4_distance = e4_distance.intBetween(12, 17);

  e5_id = require('random-seed').create(seed);
  e5_price = require('random-seed').create(seed);
  e5_distance = require('random-seed').create(seed);

  var e5_id = e5_id.intBetween(0, 20);
  var e5_price = e5_price.floatBetween(0, 200).toFixed(2);
  var e5_distance = e5_distance.intBetween(17, 25);

  res.render('resultsPage', {data: req.body,
                                  e1_id, e1_price, e1_distance,
                                  e2_id, e2_price, e2_distance,
                                  e3_id, e3_price, e3_distance,
                                  e4_id, e4_price, e4_distance,
                                  e5_id, e5_price, e5_distance});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
