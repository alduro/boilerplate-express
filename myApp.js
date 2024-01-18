let express = require('express');
let app = express();

app.use('/public', express.static(__dirname + '/public'));

app.use(function (req, res, next){
  console.log(req.method + ' ' + req.path + ' - ' + req.ip)
  next()
})

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

app.get('/now', function(req, res, next){
  req.time = new Date().toString()
  next()
}, function(req, res){
  res.json({"time": req.time})
});

app.get('/:word/echo', function(req, res){
  const { word } = req.params
  res.json({"echo": word})
})

app.path('/name').get( function(req, res){
  const { first, last } = req.query
  res.json({"name": first + " " + last})
});



































 module.exports = app;
