var express = require('express');
var router = express.Router();
var _ = require('underscore');
var wpe = require('../model/warehouse-action-model');

/* GET ALL Warehouse */
router.get('/', function (req, res, next) {
    wpe.getWarehouseProductList((results) => { res.status(200).json(results) });
});

/* GET Warehouse BY ID */
router.get('/:id', function (req, res, next) {
    var id = req.params.id;
    if (id != null && id != undefined && id != "") {
        wpe.getWPEById(id, (results) => { res.status(200).json(results) });
    }
});

/* ADD Warehouse */
router.post('/', function (req, res, next) {
    var wpeObj = req.body;
    if (wpeObj != null && wpeObj != undefined && wpeObj != "") {
        wpe.addProductToWarehouse(wpeObj, (results) => { res.status(201).json(results) });
    }
});

/* UPDATE Warehouse */
router.put('/:id', function (req, res, next) {
    var wpeObj = req.body;
    var id = req.params.id;
    if (wpeObj != null && wpeObj != undefined && wpeObj != "") {
        wpe.updateWarehouseProduct(id, wpeObj, (results) => { res.status(204).json(results) });
    }
});

module.exports = router;