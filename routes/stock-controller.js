var express = require('express');
var router = express.Router();
var stock = require('../model/stock-model');

/* GET ALL stock */
router.get('/', function (req, res, next) {
  stock.getAllstock((results) => { res.status(200).json(results) });
});

/* GET stock BY ID */
router.get('/:id', function (req, res, next) {
  var id = req.params.id;
  if (id != null && id != undefined && id != "") {
      stock.getstockById(id, (results) => { res.status(200).json(results) });
  }
});

/* ADD stock */
router.post('/', function (req, res, next) {
  var stockObj = req.body;
  if (stockObj != null && stockObj != undefined && stockObj != "") {
      stock.addstock(stockObj, (results) => { res.status(201).json(results) });
  }
});

/* UPDATE stock */
router.put('/', function (req, res, next) {
  var stockObj = req.body;
  if (stockObj != null && stockObj != undefined && stockObj != "") {
      stock.updatestock(stockObj, (results) => { res.status(204).json(results) });
  }
});

module.exports = router;