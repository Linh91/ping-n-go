var bodyParser = require('body-parser')
var express = require('express');
var app = express();
var rand = require('random-seed').create();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'))

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/home.html')
});

app.get('/results', function (req, res) {
  res.sendFile(__dirname + '/views/results.html')
});

app.post('/results', urlencodedParser, function (req, res) {
  var seed = '3,0',
  	rand1 = require('random-seed').create(seed),
  	rand2 = require('random-seed').create(seed);
    rand3 = require('random-seed').create(seed);
  var one = rand1.intBetween(000, 005)
  var two = rand2.floatBetween(0, 100).toFixed(2)
  var three = rand3.intBetween(0, 0)
  console.log(one, two, three);
  console.log("BOB")
  console.log(req.body);
  res.render('results-success', {data: req.body, one, two, three});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});


// var seed = '3,0',
// 	rand1 = require('random-seed').create(seed),
// 	rand2 = require('random-seed').create(seed);
//   rand3 = require('random-seed').create(seed);

// console.log(rand1.intBetween(000, 005), rand2.floatBetween(0, 10), rand3.intBetween(0, 0));
