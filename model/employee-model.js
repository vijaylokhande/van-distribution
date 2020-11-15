var pool = require('./db');
var _ = require('underscore');

const GET_EMPLOYEE = 'SELECT * FROM "APP_CONFIG"';
const GET_EMPLOYEE_BY_ID = 'SELECT * FROM "APP_CONFIG" WHERE "PROPERTY_TYPE"=$1';
const ADD_EMPLOYEE = 'SELECT * FROM "APP_CONFIG" WHERE "PROPERTY_TYPE"=$1';
const UPDATE_EMPLOYEE = 'SELECT * FROM "APP_CONFIG" WHERE "PROPERTY_TYPE"=$1';

module.exports.getAllEmployee = (callback) => {
  pool.query(GET_EMPLOYEE, (error, results) => {
    if (error) {
      throw error
    }
    callback(results.rows)
  });
};

module.exports.getEmployeeById = (id, callback) => {
  if (id != null && id != undefined && id != "") {
    pool.query(GET_EMPLOYEE_BY_ID, [id], (error, results) => {
      if (error) {
        throw error
      }
      callback(results.rows)
    });
  }
};

module.exports.addEmployee = (empObj, callback) => {
  if (empObj != null && empObj != undefined && empObj != "") {
    pool.query(ADD_EMPLOYEE, [empObj], (error, results) => {
      if (error) {
        throw error
      }
      callback(results.rows)
    });
  }
};

module.exports.updateEmployee = (empObj, callback) => {
  if (empObj != null && empObj != undefined && empObj != "") {
    pool.query(UPDATE_EMPLOYEE, [empObj], (error, results) => {
      if (error) {
        throw error
      }
      callback(results.rows)
    });
  }
};