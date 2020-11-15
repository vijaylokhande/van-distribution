var express = require('express');
var _ = require('underscore');
var router = express.Router();
var appconfig = require('../model/appconfig-model');

/* GET ALL PROPERTY */
router.get('/', function (req, res, next) {
  appconfig.getAllKeyVal((results) => { res.status(200).json(results) });
});

/* GET ALL PROPERTY BY TYPE */
router.get('/:type', function (req, res, next) {
  var type = req.params.type;
  if (type != null && type != undefined && type != "") {
    appconfig.getKeyValByType(type, (results) => { res.status(200).json(results) });
  }
});

/* ADD KEY VAL */
router.post('/', function (req, res, next) {
  var keyValObj = req.body;
  if (keyValObj != null && keyValObj != undefined && keyValObj != "") {
    appconfig.addKeyVal(keyValObj, (results) => { res.status(201).json(results) });
  }
});

/* UPDATE KEY VAL */
router.put('/', function (req, res, next) {
  var keyValObj = req.body;
  if (keyValObj != null && keyValObj != undefined && keyValObj != "") {
    appconfig.updateKeyVal(keyValObj, (results) => { res.status(204).json(results) });
  }
});

router.delete('/:id', function (req, res, next) {
  var id = req.params.id;
  if (id != null && id != undefined && id != "") {
    appconfig.deleteKeyVal(id, (results) => { res.status(204).json(results) });
  }
});

module.exports = router;