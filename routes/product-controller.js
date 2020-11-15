var express = require('express');
var _ = require('underscore');
var router = express.Router();
var product = require('../model/product-model');

/* GET ALL PRODUCT */
router.get('/', function (req, res, next) {
  product.getAllProduct((results) => { res.status(200).json(results) });
});

/* GET ALL PRODUCT BY ID */
router.get('/:id', function (req, res, next) {
  var id = req.params.id;
  if (id != null && id != undefined && id != "") {
    product.getProductById(id, (results) => { res.status(200).json(results) });
  }
});

/* ADD PRODUCT */
router.post('/', function (req, res, next) {
  var productObj = req.body;
  if (productObj != null && productObj != undefined && productObj != "") {
    product.addProduct(productObj, (results) => { res.status(201).json(results) });
  }
});

/* UPDATE PRODUCT */
router.put('/', function (req, res, next) {
  var productObj = req.body;
  if (productObj != null && productObj != undefined && productObj != "") {
    product.updateProduct(productObj, (results) => { res.status(204).json(results) });
  }
});

module.exports = router;