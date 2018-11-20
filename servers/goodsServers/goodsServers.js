var goodsDao = require("../../dao/goodsDao/goodsDao");

var md = {};

md.queryAllGoods = function(cb) {
  goodsDao.findAll(cb);
};

md.addGoods = function(addParams, cb) {
  goodsDao.insert(addParams, cb);
};

// delete by id
md.deleteById = function(id, cb) {
  goodsDao.deleteById(id, cb);
};

md.updateGoods = function(option, cb) {
  goodsDao.update(option, cb)
}

module.exports = md;
