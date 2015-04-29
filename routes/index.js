var express = require('express');
var router = express.Router();

var fs = require('fs');
var path = require('path');
var doc_process = require('child_process');

var articleList = require('../modules/articles/articleList');

/* GET home page. */
router.get('/', function(req, res, next) {
  articleList.update();
  process.nextTick(function(){
	res.render('index', { parser: path.parse, title: 'Kevin\'s Blog', articleList: articleList.get(), fsStatSync: fs.statSync, statHome: 'active', statAbout: '' });
  });
});

router.get('/about', function(req, res, next) {
  res.render('about', { statAbout: 'active', statHome: '', title: 'About Kevin' });
});

router.get('/showdoc', function(req, res, next) {
  doc_process.exec('unoconv --stdout --format=html ./test.docx', function(err, stdout, stderr) {
	if(err){
	  res.render('error_real', { title: 'Error', error:err });
	} else {
	  res.render('doc', { title: 'Test doc', data: stdout });
	}
  });
});

module.exports = {
  router: router,
  articleList: articleList
};
