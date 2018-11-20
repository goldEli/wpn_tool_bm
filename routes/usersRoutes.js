var express = require("express");
var router = express.Router();
var usersServers = require("../servers/usersServers/usersServers");
var utils = require("../utils/utils");

router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});


// login
router.post("/login", function(req, res, next) {
  var { pwd, name } = req.body;
  usersServers.login({ pwd, name }, function(data) {
    console.log(data)
    if (data.data.length > 0) {
      req.session.user = data.data[0];
      res.json({ status: 2, data: { url: "home" } });
    } else {
      res.json({ status: 1, msg: "账号密码错误" });
    }
  });
});

// log out
router.post("/logout", function(req, res, next) {
  req.session.user = null;
  res.json({ status: 2, data: { url: "login" } });
});

module.exports = router;

