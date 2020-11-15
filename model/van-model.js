var pool = require('./db');
var _ = require('underscore');

const GET_VAN = 'SELECT * FROM "VAN_DETAILS"';
const GET_VAN_BY_ID = 'SELECT * FROM "VAN_DETAILS" WHERE "VAN_ID"=$1';
const ADD_VAN = 'INSERT INTO "VAN_DETAILS" ("VAN_NUMBER","VAN_NAME","ACTIVE_STATUS") VALUES ($1,$2,$3)';
const UPDATE_VAN = 'UPDATE "VAN_DETAILS" SET "VAN_NUMBER"=$2,"VAN_NAME"=$3,"ACTIVE_STATUS"=$4 WHERE "VAN_ID"=$1';


module.exports.getAllVan = (callback) => {
  pool.query(GET_VAN, (error, results) => {
    if (error) {
      throw error
    }
    callback(results.rows)
  });
};

module.exports.getVanById = (id, callback) => {
  if (id != null && id != undefined && id != "") {
    pool.query(GET_VAN_BY_ID, [id], (error, results) => {
      if (error) {
        throw error
      }
      callback(results.rows)
    });
  }
};

module.exports.addVan = (vanObj, callback) => {
  if (vanObj != null && vanObj != undefined && vanObj != "") {

    var dataArray=[
      vanObj.VAN_NUMBER,
      vanObj.VAN_NAME,
      vanObj.ACTIVE_STATUS
    ];

    pool.query(ADD_VAN, dataArray, (error, results) => {
      if (error) {
        throw error
      }
      callback(results.rows)
    });
  }
};

module.exports.updateVan = (vanId,vanObj, callback) => {
  if (vanObj != null && vanObj != undefined && vanObj != "" &&
      vanId != null && vanId != undefined && vanId != "") {
    var dataArray=[
      vanId,
      vanObj.VAN_NUMBER,
      vanObj.VAN_NAME,
      vanObj.ACTIVE_STATUS
    ];
    pool.query(UPDATE_VAN, dataArray, (error, results) => {
      if (error) {
        throw error
      }
      callback(results.rows)
    });
  }
};