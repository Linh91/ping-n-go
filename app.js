var bodyParser = require('body-parser')
var express = require('express');
var app = express();

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
  console.log(req.body);
  res.render('results-success', {data: req.body});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
