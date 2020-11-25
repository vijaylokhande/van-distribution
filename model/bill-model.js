var pool = require('./db').getPool();
var _ = require('underscore');

const GET_BILL = 'SELECT * FROM "APP_CONFIG"';
const GET_BILL_BY_ID = 'SELECT * FROM "APP_CONFIG" WHERE "PROPERTY_TYPE"=$1';
const ADD_BILL = 'SELECT * FROM "APP_CONFIG" WHERE "PROPERTY_TYPE"=$1';
const UPDATE_BILL = 'SELECT * FROM "APP_CONFIG" WHERE "PROPERTY_TYPE"=$1';

module.exports.getAllBill = (callback) => {
  pool.query(GET_BILL, (error, results) => {
    var responseData={};
    if (error) {
        responseData["error"]=error.message;
    }
    else{
        responseData["data"]=results.rows;
    }
    callback(responseData)
  });
};

module.exports.getBillById = (id, callback) => {
  if (id != null && id != undefined && id != "") {
    pool.query(GET_BILL_BY_ID, [id], (error, results) => {
      var responseData={};
      if (error) {
          responseData["error"]=error.message;
      }
      else{
          responseData["data"]=results.rows;
      }
      callback(responseData)
    });
  }
};

module.exports.addBill = (billObj, callback) => {
  if (billObj != null && billObj != undefined && billObj != "") {
    pool.query(ADD_BILL, [billObj], (error, results) => {
      var responseData={};
      if (error) {
          responseData["error"]=error.message;
      }
      else{
          responseData["data"]=results.rows;
      }
      callback(responseData)
    });
  }
};

module.exports.updateBill = (billObj, callback) => {
  if (billObj != null && billObj != undefined && billObj != "") {
    pool.query(UPDATE_BILL, [billObj], (error, results) => {
      var responseData={};
      if (error) {
          responseData["error"]=error.message;
      }
      else{
          responseData["data"]=results.rows;
      }
      callback(responseData)
    });
  }
};