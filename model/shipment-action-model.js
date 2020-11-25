var pool = require('./db').getPool();
var _ = require('underscore');
var util = require('../util/util');

const GET_PRODUCT_SHIPMENT = 'SELECT * FROM "PRODUCT_SHIPMENT"';
const GET_PRODUCT_SHIPMENT_BY_ID = 'SELECT * FROM "PRODUCT_SHIPMENT" WHERE "PS_ID"=$1';
const ADD_PRODUCT_SHIPMENT = 'INSERT INTO "PRODUCT_SHIPMENT" ("PS_ID","PS_PRODUCT_ID","PS_PRODUCT_QUANTITY","PS_SHIPMENT_ID","PS_DATE","PS_TIME","PS_STATUS") VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING "PS_ID","PS_PRODUCT_ID","PS_PRODUCT_QUANTITY","PS_SHIPMENT_ID","PS_DATE","PS_TIME","PS_STATUS"';
const UPDATE_PRODUCT_SHIPMENT = 'UPDATE "PRODUCT_SHIPMENT" SET "PS_PRODUCT_ID"=$2,"PS_PRODUCT_QUANTITY"=$3,"PS_SHIPMENT_ID"=$4,"PS_DATE"=$5,"PS_TIME"=$6,"PS_STATUS"=$7 WHERE "PS_ID"=$1 RETURNING "PS_ID","PS_PRODUCT_ID","PS_PRODUCT_QUANTITY","PS_SHIPMENT_ID","PS_DATE","PS_TIME","PS_STATUS"';


createProductShipmentId = () => {
  return "PSID" + Date.now();
}

module.exports.getAllProductShipment = (callback) => {
  pool.query(GET_PRODUCT_SHIPMENT, (error, results) => {
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

module.exports.getProductShipmentById = (id, callback) => {
  if (id != null && id != undefined && id != "") {
    pool.query(GET_PRODUCT_SHIPMENT_BY_ID, [id], (error, results) => {
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

module.exports.addProductShipment = (shipmentObj, callback) => {
  if (shipmentObj != null && shipmentObj != undefined && shipmentObj != "") {

    var datetime = util.getCurrentDateTime();
    var psId = createProductShipmentId();

    if (datetime != undefined && datetime != null &&
      psId != undefined && psId != null && psId != "") {

      var dataArray = [
        psId,
        shipmentObj.PS_PRODUCT_ID,
        shipmentObj.PS_PRODUCT_QUANTITY,
        shipmentObj.PS_SHIPMENT_ID,
        datetime["date"],
        datetime["time"],
        shipmentObj.PS_STATUS
      ];

      pool.query(ADD_PRODUCT_SHIPMENT, dataArray, (error, results) => {
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

module.exports.updateProductShipment = (psId, shipmentObj, callback) => {
  if (shipmentObj != null && shipmentObj != undefined && shipmentObj != "" &&
    psId != null && psId != undefined && psId != "") {

    var datetime = util.getCurrentDateTime();

    if (datetime != undefined && datetime != null) {

      var dataArray = [
        psId,
        shipmentObj.PS_PRODUCT_ID,
        shipmentObj.PS_PRODUCT_QUANTITY,
        shipmentObj.PS_SHIPMENT_ID,
        datetime["date"],
        datetime["time"],
        shipmentObj.PS_STATUS
      ];
      pool.query(UPDATE_PRODUCT_SHIPMENT, dataArray, (error, results) => {
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