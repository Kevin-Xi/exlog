// This is not a good design, because when visitor
// click an item on homepage, what s/he want is the
// article before refresh(say, if there are updates
// during the visitor looking through the homepage),
// so when a /articles/:no request comes in, we should
// work on the articleList when visitor visit the homepage.

var fs = require('fs');

var articleList = function() {
  var mdList = [];

  var update = function() {
    mdList.length = 0;
    mdList = fs.readdirSync('./posts/');

    mdList.sort(function(a, b) {
      var statA = fs.statSync('./posts/'+a);
      var statB = fs.statSync('./posts/'+b);
      return statB.mtime.getTime()-statA.mtime.getTime();
    });	
  }

  var get = function() {
	return mdList;
  }

  return ({
	update: update,
	get: get
  });
}

module.exports = {
  list: articleList()
  //updateArticleList: articleList().update,
  //getArticleList: articleList().get
}
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
/*function articleListUpdater() {
  mdList.length = 0;
  mdList = fs.readdirSync('./posts/');

  mdList.sort(function(a, b) {
    var statA = fs.statSync('./posts/'+a);
    var statB = fs.statSync('./posts/'+b);

    return statB.mtime.getTime()-statA.mtime.getTime();
  });
});

function articleListGetter() {
	return articleList;
}*/
