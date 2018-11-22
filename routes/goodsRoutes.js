var express = require("express");
var router = express.Router();
var goodsServers = require("../servers/goodsServers/goodsServers");

router.post("/queryAll", function(req, res, next) {
  goodsServers.queryAllGoods(function(data) {
    res.send(data);
  });
});

router.get("/queryAll", function(req, res, next) {
  goodsServers.queryAllGoods(function(data) {
    res.send(data);
  });
});

router.post("/add", function(req, res, next) {
  var { name, price, src, spec, index, checked, unit } = req.body;
  var addParams = [name, price, src, spec, index, checked, unit];

  goodsServers.addGoods(addParams, function(data) {
    res.json(data);
  });
});

router.post("/del", function(req, res, next) {
  var id = req.body.id;
  goodsServers.deleteById(id, function(data) {
    res.json(data);
  });
});

router.post("/update", function(req, res, next) {
  var { id, name, price, src, spec, index, checked, unit } = req.body;
  goodsServers.updateGoods(
    {
      id,
      name,
      price,
      src,
      spec,
      index,
      checked,
      unit
    },
    function(data) {
      res.json(data);
    }
  );
});

module.exports = router;
