var express = require('express');
var router = express.Router();
var fs = require('fs');
var file = './app/comments/data/comments.json';

router.get('/', function(req, res, next) {
  res.render('index', { title: 'React Comments' });
});

router.get('/json', function(req, res, next){
  fs.readFile(file, function(err, data) {
    if(err){ return console.log(err)}
    res.json(JSON.parse(data))  
  });
});

router.post('/json', function(req, res, next){
  fs.readFile(file, function(err, data) {
    var comments = JSON.parse(data);
    comments.push(req.body);
    fs.writeFile(file, JSON.stringify(comments, null, 4), function(err) {
      res.setHeader('Cache-Control', 'no-cache');
      res.json(comments);
    });
  });
});

module.exports = router;