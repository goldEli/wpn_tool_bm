var db = require("../../config/db");
var common = require("../common");

var sql = {
  findByPwdAndName: (pwd, name) => {
    return `select * from users where pwd=${pwd} and name='${name}'`;
  },
};

var md = {};

md.findByPwdAndName = function(option, callback) {
  const { pwd, name } = option;
  var s = sql.findByPwdAndName(pwd, name);
  db(s, function(err, data) {
    common.handleDataWithStatus({ err, data, callback, s });
  });
};

module.exports = md;
