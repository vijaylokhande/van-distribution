var pool = require('./db').getPool();
var _ = require('underscore');

const GET_WAREHOUSE = 'SELECT * FROM "WAREHOUSE_DETAILS"';
const GET_WAREHOUSE_BY_ID = 'SELECT * FROM "WAREHOUSE_DETAILS" WHERE "WAREHOUSE_ID"=$1';
const ADD_WAREHOUSE = 'INSERT INTO "WAREHOUSE_DETAILS" ("WAREHOUSE_NAME","WAREHOUSE_ADDRESS","WAREHOUSE_CONTACT","ACTIVE_STATUS") VALUES ($1,$2,$3,$4) RETURNING "WAREHOUSE_ID","WAREHOUSE_NAME","WAREHOUSE_ADDRESS","WAREHOUSE_CONTACT","ACTIVE_STATUS"';
const UPDATE_WAREHOUSE = 'UPDATE "WAREHOUSE_DETAILS" SET "WAREHOUSE_NAME"=$2,"WAREHOUSE_ADDRESS"=$3,"WAREHOUSE_CONTACT"=$4,"ACTIVE_STATUS"=$5 WHERE "WAREHOUSE_ID"=$1 RETURNING "WAREHOUSE_ID","WAREHOUSE_NAME","WAREHOUSE_ADDRESS","WAREHOUSE_CONTACT","ACTIVE_STATUS"';

module.exports.getAllWarehouse = (callback) => {
  pool.query(GET_WAREHOUSE, (error, results) => {
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

module.exports.getWarehouseById = (id, callback) => {
  if (id != null && id != undefined && id != "") {
    pool.query(GET_WAREHOUSE_BY_ID, [id], (error, results) => {
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

module.exports.addWarehouse = (warehouseObj, callback) => {
  if (warehouseObj != null && warehouseObj != undefined && warehouseObj != "") {
    pool.query(ADD_WAREHOUSE, [warehouseObj.WAREHOUSE_NAME,warehouseObj.WAREHOUSE_ADDRESS,warehouseObj.WAREHOUSE_CONTACT,warehouseObj.ACTIVE_STATUS], (error, results) => {
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

module.exports.updateWarehouse = (id,warehouseObj, callback) => {
  if (warehouseObj != null && warehouseObj != undefined && warehouseObj != "") {
    pool.query(UPDATE_WAREHOUSE, [id,warehouseObj.WAREHOUSE_NAME,warehouseObj.WAREHOUSE_ADDRESS,warehouseObj.WAREHOUSE_CONTACT,warehouseObj.ACTIVE_STATUS], (error, results) => {
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