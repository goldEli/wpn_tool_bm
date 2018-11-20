var usersDao = require('../../dao/usersDao/usersDao');

var md = {};

// login
md.login = function(option, cb) {
    usersDao.findByPwdAndName(option, cb)
}



module.exports = md;