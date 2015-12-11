var express = require("express");
var router = express.Router()

// function songRoutes(router) {
  router.get('/', function(req, res) {
    res.render('index');
  });

  router.get('/edit', function(req, res) {
    res.render('edit');
  });

  router.get('/update', function(req, res) {
    if (req.query.verse1 !== undefined) {
      song.verse1 = req.query.verse1;
      song.verse2 = req.query.verse2;
      song.verse3 = req.query.verse3;
    }
    res.redirect('/');
  })

  router.get('/1', function(req, res) {
    res.render('song', {
      pageInfo: song.verse1,
      nextPage: '1/2',
    });
  });

  router.get('/1/2', function(req, res) {
    res.render('song', {
      pageInfo: song.verse2,
      nextPage: '2/3',
    });
  });

  router.get('/1/2/3', function(req, res) {
    res.render('song', {
      pageInfo: song.verse3,
      nextPage: '1',
    });
  });
// }

module.exports = router;

