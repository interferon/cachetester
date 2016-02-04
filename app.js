var express = require('express');
var app = express();

app.use(express.static('./static_content'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/phones', function (req, res) {
  res.sendFile(__dirname + '/static_content/phones.json');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening ...');
});

