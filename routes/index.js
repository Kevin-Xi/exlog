var express = require('express');
var fs = require('fs');
var router = express.Router();
var markdown = require('markdown').markdown;
var path = require('path');

var mdList = [];

/*
 * Version 1
 * Use ASync for everything
 * Complete chaos
 */
/*var articleListUpdater = (function() {
  fs.readdir('./posts/', function(err, files) {
    mdList.length = 0;
    if(err){
	  res.render('error', err);
	  console.log(err);
    } else {
	  files.forEach(function(mdName) {
	    mdList.push(mdName);
      });

	  process.nextTick(function() {
	    mdList.sort(function(a, b) {
	      var statA = fs.statSync('./posts/'+a);
	      var statB = fs.statSync('./posts/'+b);

	      return statA.mtime.getTime()<statB.mtime.getTime() ? true : false;
	  });

	  });
    }
  });
});*/

/*
 * Version 2
 * Sync for everything but anonymous compare function
 * pass
 */
var articleListUpdater = (function() {
  mdList.length = 0;
  mdList = fs.readdirSync('./posts/');

  mdList.sort(function(a, b) {
    var statA = fs.statSync('./posts/'+a);
    var statB = fs.statSync('./posts/'+b);

    return statB.mtime.getTime()-statA.mtime.getTime();
  });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  articleListUpdater();
  process.nextTick(function(){
	res.render('index', { parser: path.parse, title: 'Kevin\'s Blog', mdList: mdList, fsStatSync: fs.statSync, statHome: "active", statAbout: "" });
  });
});

router.get('/about', function(req, res, next) {
  res.render('about', {statAbout: "active", statHome: "", title: "About Kevin"});
});

router.get('/random', function(req, res, next) {
  var rand = Math.floor(Math.random()*(mdList.length-1));
  res.redirect('/articles/'+rand);
});

router.post('/articles/:no', function(req, res, next) {
  res.send('I\'m Here! '+req.params.no);
});

router.get('/articles/:no', function(req, res, next) {
  var filename = mdList[req.params.no];

  fs.readFile('./posts/'+filename, 'utf-8', function(err, data) {
	if(err){
	  res.render('error', err);
	  console.log(err);
	} else {
	  res.render('post', { title: path.parse(filename).name, article: markdown.toHTML(data)});
	}
  })
});

module.exports = router;
