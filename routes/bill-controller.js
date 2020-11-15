var express = require('express');
var router = express.Router();
var _ = require('underscore');
var bill = require('../model/bill-model');

/* GET ALL Bill */
router.get('/', function (req, res, next) {
    bill.getAllBill((results) => { res.status(200).json(results) });
});

/* GET Bill BY ID */
router.get('/:id', function (req, res, next) {
    var id = req.params.id;
    if (id != null && id != undefined && id != "") {
        bill.getBillById(id, (results) => { res.status(200).json(results) });
    }
});

/* ADD Bill */
router.post('/', function (req, res, next) {
    var billObj = req.body;
    if (billObj != null && billObj != undefined && billObj != "") {
        bill.addBill(billObj, (results) => { res.status(201).json(results) });
    }
});

/* UPDATE Bill */
router.put('/', function (req, res, next) {
    var billObj = req.body;
    if (billObj != null && billObj != undefined && billObj != "") {
        bill.updateBill(billObj, (results) => { res.status(204).json(results) });
    }
});

module.exports = router;