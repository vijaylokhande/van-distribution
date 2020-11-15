var pool = require('./db');
var _ = require('underscore');
var util = require('../util/util');

const GET_SHIPMENT = 'SELECT * FROM "SHIPMENT"';
const GET_SHIPMENT_BY_ID = 'SELECT * FROM "SHIPMENT" WHERE "SHIP_ID"=$1';
const ADD_SHIPMENT = 'INSERT INTO "SHIPMENT" ("SHIP_ID","SHIP_DATE","SHIP_TIME","SHIP_VAN_ID","SHIP_EMP_ID","SHIP_WAREHOUSE_ID","SHIP_STATUS") VALUES ($1,$2,$3,$4,$5,$6,$7)';
const UPDATE_SHIPMENT = 'UPDATE "SHIPMENT" SET "SHIP_DATE"=$2,"SHIP_TIME"=$3,"SHIP_VAN_ID"=$4,"SHIP_EMP_ID"=$5,"SHIP_WAREHOUSE_ID"=$6,"SHIP_STATUS"=$7 WHERE "SHIP_ID"=$1';


createShipmentId = () => {
  return "SID" + Date.now();
}

module.exports.getAllShipment = (callback) => {
  pool.query(GET_SHIPMENT, (error, results) => {
    if (error) {
      throw error
    }
    callback(results.rows)
  });
};

module.exports.getShipmentById = (id, callback) => {
  if (id != null && id != undefined && id != "") {
    pool.query(GET_SHIPMENT_BY_ID, [id], (error, results) => {
      if (error) {
        throw error
      }
      callback(results.rows)
    });
  }
};

module.exports.addShipment = (shipmentObj, callback) => {
  if (shipmentObj != null && shipmentObj != undefined && shipmentObj != "") {

    var dt = util.getCurrentDateTime();
    var shipId = createShipmentId();

    if (dt != undefined && dt != null && dt != "" && shipId != undefined && shipId != null && shipId != "") {
      var datetime = dt.split("T");

      if (datetime != undefined && datetime != null && datetime.length > 0) {

        var dataArray = [
          shipId,
          datetime[0],
          datetime[1],
          shipmentObj.SHIP_VAN_ID,
          shipmentObj.SHIP_EMP_ID,
          shipmentObj.SHIP_WAREHOUSE_ID,
          shipmentObj.SHIP_STATUS
        ];

        pool.query(ADD_SHIPMENT, dataArray, (error, results) => {
          if (error) {
            throw error
          }
          callback(results.rows)
        });
      }
    }
  }
};

module.exports.updateShipment = (shipmentId, shipmentObj, callback) => {
  if (shipmentObj != null && shipmentObj != undefined && shipmentObj != "" &&
    shipmentId != null && shipmentId != undefined && shipmentId != "") {

    var dt = util.getCurrentDateTime();

    if (dt != undefined && dt != null && dt != "") {
      var datetime = dt.split("T");

      if (datetime != undefined && datetime != null && datetime.length > 0) {

        var dataArray = [
          shipmentId,
          datetime[0],
          datetime[1],
          shipmentObj.SHIP_VAN_ID,
          shipmentObj.SHIP_EMP_ID,
          shipmentObj.SHIP_WAREHOUSE_ID,
          shipmentObj.SHIP_STATUS
        ];
        pool.query(UPDATE_SHIPMENT, [shipmentObj], (error, results) => {
          if (error) {
            throw error
          }
          callback(results.rows)
        });
      }
    }
  }
};