var express = require('express');
var router = express.Router();
var _ = require('underscore');
var employee = require('../model/employee-model');

/* GET ALL EMPLOYEE */
router.get('/', function (req, res, next) {
    employee.getAllEmployee((results) => { res.status(200).json(results) });
});

/* GET EMPLOYEE BY ID */
router.get('/:id', function (req, res, next) {
    var id = req.params.id;
    if (id != null && id != undefined && id != "") {
        employee.getEmployeeById(id, (results) => { res.status(200).json(results) });
    }
});

/* ADD EMPLOYEE */
router.post('/', function (req, res, next) {
    var empObj = req.body;
    if (empObj != null && empObj != undefined && empObj != "") {
        employee.addEmployee(empObj, (results) => { res.status(201).json(results) });
    }
});

/* UPDATE EMPLOYEE */
router.put('/:id', function (req, res, next) {
    var empObj = req.body;
    var empId = req.params.id;
    if (empObj != null && empObj != undefined && empObj != "") {
        employee.updateEmployee(empId, empObj, (results) => { res.status(204).json(results) });
    }
});

module.exports = router;