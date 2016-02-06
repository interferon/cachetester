var express = require('express');
var app = express();

app.use(express.static('./static_content'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/phones', function (req, res) {
  res.sendFile(__dirname + '/static_content/phones.json');
});

app.get('/cars', function (req, res) {
  res.sendFile(__dirname + '/static_content/cars.json');
});

app.get('/boots', function (req, res) {
  res.sendFile(__dirname + '/static_content/boots.json');
});

app.post('/boots', function (req, res) {
  res.sendFile(__dirname + '/static_content/boots.json');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening ...');
});
