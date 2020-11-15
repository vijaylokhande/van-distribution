var pool = require('./db');
var _ = require('underscore');

const GET_STOCK = 'SELECT * FROM "APP_CONFIG"';
const GET_STOCK_BY_ID = 'SELECT * FROM "APP_CONFIG" WHERE "PROPERTY_TYPE"=$1';
const ADD_STOCK = 'SELECT * FROM "APP_CONFIG" WHERE "PROPERTY_TYPE"=$1';
const UPDATE_STOCK = 'SELECT * FROM "APP_CONFIG" WHERE "PROPERTY_TYPE"=$1';

module.exports.getAllStock = (callback) => {
  pool.query(GET_STOCK, (error, results) => {
    if (error) {
      throw error
    }
    callback(results.rows)
  });
};

module.exports.getStockById = (id, callback) => {
  if (id != null && id != undefined && id != "") {
    pool.query(GET_STOCK_BY_ID, [id], (error, results) => {
      if (error) {
        throw error
      }
      callback(results.rows)
    });
  }
};

module.exports.addStock = (stockObj, callback) => {
  if (stockObj != null && stockObj != undefined && stockObj != "") {
    pool.query(ADD_STOCK, [stockObj], (error, results) => {
      if (error) {
        throw error
      }
      callback(results.rows)
    });
  }
};

module.exports.updateStock = (stockObj, callback) => {
  if (stockObj != null && stockObj != undefined && stockObj != "") {
    pool.query(UPDATE_STOCK, [stockObj], (error, results) => {
      if (error) {
        throw error
      }
      callback(results.rows)
    });
  }
};