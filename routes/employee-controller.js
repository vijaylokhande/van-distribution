var express = require('express');
var router = express.Router();
var _ = require('underscore');
var employee = require('../model/employee-model');
const authorize = require('../_helpers/authorize');
const Role = require('../_helpers/role');

/* GET ALL EMPLOYEE */
router.get('/', authorize([Role.Admin,Role.User]),function (req, res, next) {
    employee.getAllEmployee((results) => { res.status(200).json(results) });
});

/* GET EMPLOYEE BY ID */
router.get('/:id', authorize([Role.Admin,Role.User]), function (req, res, next) {
    const id = req.params.id;
    const currentUser=req.user;
    if (id != null && id != undefined && id != "" && currentUser.id==id) {
        employee.getEmployeeById(id, (results) => { res.status(200).json(results) });
    }
});

/* ADD EMPLOYEE */
router.post('/', authorize([Role.Admin]), function (req, res, next) {
    var empObj = req.body;
    if (empObj != null && empObj != undefined && empObj != "") {
        employee.addEmployee(empObj, (results) => { res.status(201).json(results) });
    }
});

/* UPDATE EMPLOYEE */
router.put('/:id', authorize([Role.Admin]), function (req, res, next) {
    var empObj = req.body;
    var empId = req.params.id;
    if (empObj != null && empObj != undefined && empObj != "") {
        employee.updateEmployee(empId, empObj, (results) => { res.status(204).json(results) });
    }
});

module.exports = router;