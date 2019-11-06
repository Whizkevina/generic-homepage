var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Generic Homepage' });
});

router.get('/colorizier', function(req, res, next) {
  res.render('colorizier', { title: 'Colorizier Page' });
});

module.exports = router;
