var pool = require('./db').getPool();
var _ = require('underscore');
var util = require('../util/util');

const GET_STOCK = 'SELECT * FROM "WAREHOUSE_PRODUCT_STOCK"';
const GET_STOCK_BY_ID = 'SELECT * FROM "WAREHOUSE_PRODUCT_STOCK" WHERE "SKU_ID"=$1';
const ADD_STOCK = 'INSERT INTO "WAREHOUSE_PRODUCT_STOCK" ("WPS_PRODUCT_ID","WPS_PRODUCT_QUANTITY","RACK_NUMBER","CREATED_DATE","CREATED_TIME","UPDATED_DATE","UPDATED_TIME","ACTIVE_STATUS") VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING "SKU_ID" "WPS_PRODUCT_ID","WPS_PRODUCT_QUANTITY","RACK_NUMBER","CREATED_DATE","CREATED_TIME","UPDATED_DATE","UPDATED_TIME","ACTIVE_STATUS"';
const UPDATE_STOCK = 'UPDATE "WAREHOUSE_PRODUCT_STOCK" SET "WPS_PRODUCT_ID"=$2,"WPS_PRODUCT_QUANTITY"=$3,"RACK_NUMBER"=$4,UPDATED_DATE"=$5,"UPDATED_TIME"=$6,"ACTIVE_STATUS"=$7 WHERE "SKU_ID"=$1 RETURNING "SKU_ID" "WPS_PRODUCT_ID","WPS_PRODUCT_QUANTITY","RACK_NUMBER","CREATED_DATE","CREATED_TIME","UPDATED_DATE","UPDATED_TIME","ACTIVE_STATUS"';

module.exports.getAllStock = (callback) => {
  pool.query(GET_STOCK, (error, results) => {
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

module.exports.getStockById = (id, callback) => {
  if (id != null && id != undefined && id != "") {
    pool.query(GET_STOCK_BY_ID, [id], (error, results) => {
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

module.exports.addStock = (stockObj, callback) => {
  if (stockObj != null && stockObj != undefined && stockObj != "") {

    var datetime = util.getCurrentDateTime();

    if (datetime != undefined && datetime != null && datetime != "") {

      var dataArray = [
        stockObj.WPS_PRODUCT_ID,
        stockObj.WPS_PRODUCT_QUANTITY,
        stockObj.RACK_NUMBER,
        datetime["date"],
        datetime["time"],
        datetime["date"],
        datetime["time"],
        stockObj.ACTIVE_STATUS
      ];


      pool.query(ADD_STOCK, dataArray, (error, results) => {
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
  }
};

module.exports.updateStock = (skuId, stockObj, callback) => {
  if (stockObj != null && stockObj != undefined && stockObj != "" &&
    skuId != null && skuId != undefined && skuId != "") {

    var datetime = util.getCurrentDateTime();

    if (datetime != undefined && datetime != null && datetime != "") {

      var dataArray = [
        skuId,
        stockObj.WPS_PRODUCT_ID,
        stockObj.WPS_PRODUCT_QUANTITY,
        stockObj.RACK_NUMBER,
        datetime["date"],
        datetime["time"],
        stockObj.ACTIVE_STATUS
      ];

      pool.query(UPDATE_STOCK, dataArray, (error, results) => {
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
  }
};