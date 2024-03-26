var express = require('express');
var router = express.Router();

const {login} = require("../controllers/login.controller");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/login",login);
module.exports = router;
