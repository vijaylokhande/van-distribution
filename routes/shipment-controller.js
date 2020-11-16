var express = require('express');
var router = express.Router();
var _ = require('underscore');
var shipment = require('../model/shipment-model');

/* GET ALL Shipment */
router.get('/', function (req, res, next) {
    shipment.getAllShipment((results) => { res.status(200).json(results) });
});

/* GET Shipment BY ID */
router.get('/:id', function (req, res, next) {
    var id = req.params.id;
    if (id != null && id != undefined && id != "") {
        shipment.getShipmentById(id, (results) => { res.status(200).json(results) });
    }
});

/* ADD Shipment */
router.post('/', function (req, res, next) {
    var shipmentObj = req.body;
    if (shipmentObj != null && shipmentObj != undefined && shipmentObj != "") {
        shipment.addShipment(shipmentObj, (results) => { res.status(201).json(results) });
    }
});

/* UPDATE Shipment */
router.put('/:id', function (req, res, next) {
    var shipmentObj = req.body;
    var shipmentId = req.params.id;
    if (shipmentObj != null && shipmentObj != undefined && shipmentObj != "") {
        shipment.updateShipment(shipmentId, shipmentObj, (results) => { res.status(200).json(results) });
    }
});

module.exports = router;