var express = require('express');
var router = express.Router();
var _ = require('underscore');
var van = require('../model/van-model');

/* GET ALL van */
router.get('/', function (req, res, next) {
    van.getAllVan((results) => { res.status(200).json(results) });
});

/* GET van BY ID */
router.get('/:id', function (req, res, next) {
    var id = req.params.id;
    if (id != null && id != undefined && id != "") {
        van.getVanById(id, (results) => { res.status(200).json(results) });
    }
});

/* ADD van */
router.post('/', function (req, res, next) {
    var vanObj = req.body;
    if (vanObj != null && vanObj != undefined && vanObj != "") {
        van.addVan(vanObj, (results) => { res.status(201).json(results) });
    }
});

/* UPDATE van */
router.put('/:id', function (req, res, next) {
    var vanObj = req.body;
    var vanId = req.params.id;
    if (vanObj != null && vanObj != undefined && vanObj != "" &&
        vanId != null && vanId != undefined && vanId != "") {
        van.updateVan(vanId, vanObj, (results) => { res.status(204).json(results) });
    }
});

module.exports = router;