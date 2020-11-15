var express = require('express');
var _ = require('underscore');
var router = express.Router();
var customer = require('../model/customer-model');

/* GET ALL CUSTOMER */
router.get('/', function (req, res, next) {
  customer.getAllCustomer((results) => { res.status(200).json(results) });
});

/* GET ALL CUSTOMER BY ID */
router.get('/:id', function (req, res, next) {
  var id = req.params.id;
  if (id != null && id != undefined && id != "") {
    customer.getCustomerById(id, (results) => { res.status(200).json(results) });
  }
});

/* ADD CUSTOMER */
router.post('/', function (req, res, next) {
  var customerObj = req.body;
  if (customerObj != null && customerObj != undefined && customerObj != "") {
    customer.addCustomer(customerObj, (results) => { res.status(201).json(results) });
  }
});

/* UPDATE CUSTOMER */
router.put('/:id', function (req, res, next) {
  var customerObj = req.body;
  var customerId=req.params.id;
  if (customerObj != null && customerObj != undefined && customerObj != "" &&
      customerId != null && customerId != undefined && customerId != "") {
    customer.updateCustomer(customerId,customerObj, (results) => { res.status(204).json(results) });
  }
});

module.exports = router;