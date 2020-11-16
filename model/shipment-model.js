var pool = require('./db');
var _ = require('underscore');
var util = require('../util/util');

const GET_SHIPMENT = 'SELECT * FROM "SHIPMENT"';
const GET_SHIPMENT_BY_ID = 'SELECT * FROM "SHIPMENT" WHERE "SHIP_ID"=$1';
const ADD_SHIPMENT = 'INSERT INTO "SHIPMENT" ("SHIP_ID","SHIP_DATE","SHIP_TIME","SHIP_VAN_ID","SHIP_EMP_ID","SHIP_WAREHOUSE_ID","SHIP_STATUS") VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING "SHIP_ID","SHIP_DATE","SHIP_TIME","SHIP_VAN_ID","SHIP_EMP_ID","SHIP_WAREHOUSE_ID","SHIP_STATUS"';
const UPDATE_SHIPMENT = 'UPDATE "SHIPMENT" SET "SHIP_DATE"=$2,"SHIP_TIME"=$3,"SHIP_VAN_ID"=$4,"SHIP_EMP_ID"=$5,"SHIP_WAREHOUSE_ID"=$6,"SHIP_STATUS"=$7 WHERE "SHIP_ID"=$1 RETURNING "SHIP_ID","SHIP_DATE","SHIP_TIME","SHIP_VAN_ID","SHIP_EMP_ID","SHIP_WAREHOUSE_ID","SHIP_STATUS"';


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

    var datetime = util.getCurrentDateTime();
    var shipId = createShipmentId();

    if (datetime != undefined && datetime != null && shipId != undefined && shipId != null && shipId != "") {

      var dataArray = [
        shipId,
        datetime["date"],
        datetime["time"],
        shipmentObj.SHIP_VAN_ID,
        shipmentObj.SHIP_EMP_ID,
        shipmentObj.SHIP_WAREHOUSE_ID,
        shipmentObj.SHIP_STATUS
      ];

      pool.query(ADD_SHIPMENT, dataArray, (error, results) => {
        if (error) {
          throw error
        }

        callback(results)

      });
    }
  }
};

module.exports.updateShipment = (shipmentId, shipmentObj, callback) => {
  if (shipmentObj != null && shipmentObj != undefined && shipmentObj != "" &&
    shipmentId != null && shipmentId != undefined && shipmentId != "") {

    var datetime = util.getCurrentDateTime();


    if (datetime != undefined && datetime != null) {

      var dataArray = [
        shipmentId,
        datetime["date"],
        datetime["time"],
        shipmentObj.SHIP_VAN_ID,
        shipmentObj.SHIP_EMP_ID,
        shipmentObj.SHIP_WAREHOUSE_ID,
        shipmentObj.SHIP_STATUS
      ];
      pool.query(UPDATE_SHIPMENT, dataArray, (error, results) => {
        if (error) {
          throw error
        }
        callback(results)

      });
    }
  }
};