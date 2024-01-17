let express = require('express');
let app = express();

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  absolutePath = __dirname + '/views/index.html'
  res.sendFile(absolutePath)
});

app.get('/json', function(req, res) {
  style = process.env.MESSAGE_STYLE
  if(style == "uppercase"){
    res.json({"message": "HELLO JSON"})
  }
  res.json({"message": "Hello json"})
});


































 module.exports = app;
