var pool = require('./db').getPool();
var _ = require('underscore');
var util = require('../util/util');

const GET_WAREHOUSE_PRODUCT_ENTRY = 'SELECT * FROM "WAREHOUSE_PRODUCT_ENTRY"';
const GET_WAREHOUSE_PRODUCT_ENTRY_BY_ID = 'SELECT * FROM "WAREHOUSE_PRODUCT_ENTRY" WHERE "WPE_ID"=$1';
const ADD_WAREHOUSE_PRODUCT_ENTRY = 'INSERT INTO "WAREHOUSE_PRODUCT_ENTRY" ("WPE_ID","WPE_WAREHOUSE_ID","WPE_PRODUCT_ID","WPE_PRODUCT_QUANTITY","ENTRY_DATE","ENTRY_TIME","RECEIVED_BY_EMP_ID","ENTRY_STATUS") VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING "WPE_ID","WPE_WAREHOUSE_ID","WPE_PRODUCT_ID","WPE_PRODUCT_QUANTITY","ENTRY_DATE","ENTRY_TIME","RECEIVED_BY_EMP_ID","ENTRY_STATUS"';
const UPDATE_WAREHOUSE_PRODUCT_ENTRY = 'UPDATE "WAREHOUSE_PRODUCT_ENTRY" SET "WPE_WAREHOUSE_ID"=$2,"WPE_PRODUCT_ID"=$3,"WPE_PRODUCT_QUANTITY"=$4,"ENTRY_DATE"=$5,"ENTRY_TIME"=$6,"RECEIVED_BY_EMP_ID"=$7,"ENTRY_STATUS"=$8 WHERE "WPE_ID"=$1 RETURNING "WPE_ID","WPE_WAREHOUSE_ID","WPE_PRODUCT_ID","WPE_PRODUCT_QUANTITY","ENTRY_DATE","ENTRY_TIME","RECEIVED_BY_EMP_ID","ENTRY_STATUS"';

createWPEID = () => {
  return "WPE" + Date.now();
}

module.exports.getWarehouseProductList = (callback) => {
  pool.query(GET_WAREHOUSE_PRODUCT_ENTRY, (error, results) => {
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

module.exports.getWPEById = (id, callback) => {
  if (id != null && id != undefined && id != "") {
    pool.query(GET_WAREHOUSE_PRODUCT_ENTRY_BY_ID, [id], (error, results) => {
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

module.exports.addProductToWarehouse = (wpeObj, callback) => {
  if (wpeObj != null && wpeObj != undefined && wpeObj != "") {

    const wpeId=createWPEID();
    const datetime=util.getCurrentDateTime();

    
  if (wpeId != null && wpeId != undefined && wpeId != "" && 
      datetime != null && datetime != undefined && datetime != "") {

    var dataArray=[      
      wpeId,
      wpeObj.WPE_WAREHOUSE_ID,
      wpeObj.WPE_PRODUCT_ID,
      wpeObj.WPE_PRODUCT_QUANTITY,
      datetime["date"],
      datetime["time"],
      wpeObj.RECEIVED_BY_EMP_ID,
      wpeObj.ENTRY_STATUS
    ];


    pool.query(ADD_WAREHOUSE_PRODUCT_ENTRY,dataArray, (error, results) => {
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

module.exports.updateWarehouseProduct = (wpeId,wpeObj, callback) => {
  if (wpeId != null && wpeId != undefined && wpeId != "" && 
      wpeObj != null && wpeObj != undefined && wpeObj != "") {
    var dataArray=[      
      wpeId,
      wpeObj.WPE_WAREHOUSE_ID,
      wpeObj.WPE_PRODUCT_ID,
      wpeObj.WPE_PRODUCT_QUANTITY,
      wpeObj.ENTRY_DATE,
      wpeObj.ENTRY_TIME,
      wpeObj.RECEIVED_BY_EMP_ID,
      wpeObj.ENTRY_STATUS
    ];
    pool.query(UPDATE_WAREHOUSE_PRODUCT_ENTRY, dataArray, (error, results) => {
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