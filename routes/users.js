var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource dude');
});

router.get('/cool', function(req, res, next) {
  res.send('YOU ARE COOL DUDEE');
});

module.exports = router;
