var express = require('express');
var router = express.Router();

var fs = require('fs');
var path = require('path');

var articleList= require('../modules/articles/articleList');

/* GET home page. */
router.get('/', function(req, res, next) {
  articleList.list.update();
  process.nextTick(function(){
	res.render('index', { parser: path.parse, title: 'Kevin\'s Blog', articleList: articleList.list.get(), fsStatSync: fs.statSync, statHome: "active", statAbout: "" });
  });
});

router.get('/about', function(req, res, next) {
  res.render('about', {statAbout: "active", statHome: "", title: "About Kevin"});
});

module.exports = router;
