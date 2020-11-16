var express = require('express');
var router = express.Router();
var _ = require('underscore');
var warehouse = require('../model/warehouse-model');

/* GET ALL Warehouse */
router.get('/', function (req, res, next) {
    warehouse.getAllWarehouse((results) => { res.status(200).json(results) });
});

/* GET Warehouse BY ID */
router.get('/:id', function (req, res, next) {
    var id = req.params.id;
    if (id != null && id != undefined && id != "") {
        warehouse.getWarehouseById(id, (results) => { res.status(200).json(results) });
    }
});

/* ADD Warehouse */
router.post('/', function (req, res, next) {
    var warehouseObj = req.body;
    if (warehouseObj != null && warehouseObj != undefined && warehouseObj != "") {
        warehouse.addWarehouse(warehouseObj, (results) => { res.status(201).json(results) });
    }
});

/* UPDATE Warehouse */
router.put('/:id', function (req, res, next) {
    var warehouseObj = req.body;
    var id = req.params.id;
    if (warehouseObj != null && warehouseObj != undefined && warehouseObj != "") {
        warehouse.updateWarehouse(id, warehouseObj, (results) => { res.status(204).json(results) });
    }
});

module.exports = router;