var express = require('express');
const { getDirector } = require('../controllers/user.controller');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get("/getDirector", getDirector)

module.exports = router;
