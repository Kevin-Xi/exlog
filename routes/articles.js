var express = require('express');
var router = express.Router();

var fs = require('fs');
var path = require('path');
var markdown = require('markdown').markdown;

var articleList= require('../modules/articles/articleList');

/* GET users listing. */
router.get('/random', function(req, res, next) {
  var rand = Math.floor(Math.random()*(articleList.list.get().length-1));
  res.redirect('/articles/'+rand);
});


router.post('/:no', function(req, res, next) {
  res.send('I\'m Here! '+req.params.no);
});

router.get('/:no', function(req, res, next) {
  var filename = (articleList.list.get())[req.params.no];

  fs.readFile('./posts/'+filename, 'utf-8', function(err, data) {
	if(err){
	  res.render('error_real', { title: 'Error', error: err });
	  console.log(err);
	} else {
	  res.render('post', { title: path.parse(filename).name, article: markdown.toHTML(data) });
	}
  })
});


module.exports = router;
