var express = require('express');
var router = express.Router();

var fs = require('fs');
var path = require('path');
var markdown = require('markdown').markdown;

//var articleList= require('../modules/articles/articleList');
var articleList = require('./index').articleList;

var checkLogin = function(req, res, next) {
  console.log('inside checkLogin');
  console.log(req.cookies);
  if(!req.cookies || !req.cookies.exaccess || req.cookies.exaccess!=='AOK') {
    res.redirect('/login');
  } else {
    next();
  }
}

router.all('/*', checkLogin, function(req, res, next) {
  next();
});

/* GET users listing. */
router.get('/random', function(req, res, next) {
  console.log('inside random');
  var rand = Math.floor(Math.random()*(articleList.get().length-1));
  res.redirect('/articles/'+rand);
});


router.post('/:no', function(req, res, next) {
  res.send('I\'m Here! '+req.params.no);
});

router.get('/:no', function(req, res, next) {
  var filename = (articleList.get())[req.params.no];

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
