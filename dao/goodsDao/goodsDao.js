var db = require("../../config/db");
var common = require("../common");
var utils = require("../../utils/utils");

var sql = {
  findAll: "SELECT * FROM goods",
  insert: function() {
    return `INSERT INTO goods(id,name,price,src,spec,\`index\`,checked,unit) VALUES('${utils.uuid()}',?,?,?,?,?,?,?)`;
  },
  deleteById: function(id) {
    return `DELETE FROM goods WHERE id='${id}'`;
  },
  update: option => {
    const { id, name, price, src, spec, index, checked, unit } = option;
    return `
    UPDATE goods 
    SET 
    name='${name}', 
    price='${price}', 
    src='${src}', 
    spec='${spec}',
    \`index\`='${index}', 
    checked='${checked}', 
    unit='${unit}'
    WHERE id='${id}';
    `;
  }
};

var md = {};

md.findAll = function(callback) {
  var s = sql.findAll;
  db(s, function(err, data) {
    common.handleDataWithStatus({ err, data, callback, s });
  });
};

md.insert = function(addParam, callback) {
  var s = sql.insert();
  db(
    s,
    function(err, data) {
      common.handleDataWithStatus({ err, data, callback, s });
    },
    addParam
  );
};

md.deleteById = function(id, callback) {
  var s = sql.deleteById(id);
  db(s, function(err, data) {
    common.handleDataWithStatus({ err, data, callback, s });
  });
};

md.update = function(option, callback) {
  var s = sql.update(option);
  db(
    s,
    function(err, data) {
      common.handleDataWithStatus({ err, data, callback, s });
    }
  );
};

module.exports = md;
