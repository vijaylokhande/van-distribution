var pool = require('./db');
var _ = require('underscore');

const GET_ALL_PRODUCT = 'SELECT * FROM "PRODUCT_DETAILS"';
const GET_PRODUCT_BY_ID = 'SELECT * FROM "PRODUCT_DETAILS" WHERE "PRODUCT_ID"=$1';
const ADD_PRODUCT = 'SELECT * FROM "PRODUCT_DETAILS" WHERE "PRODUCT_ID"=$1';
const UPDATE_PRODUCT = 'SELECT * FROM "PRODUCT_DETAILS" WHERE "PRODUCT_ID"=$1';

module.exports.getAllProduct = (callback) => {
  pool.query(GET_ALL_PRODUCT, (error, results) => {
    if (error) {
      throw error
    }
    callback(results.rows)
  });
};

module.exports.getProductById = (id, callback) => {
  if (id != null && id != undefined && id != "") {
    pool.query(GET_PRODUCT_BY_ID, [id], (error, results) => {
      if (error) {
        throw error
      }
      callback(results.rows)
    });
  }
};


module.exports.addProduct = (productObj, callback) => {
  if (productObj != null && productObj != undefined && productObj != "") {
    pool.query(ADD_PRODUCT, [productObj], (error, results) => {
      if (error) {
        throw error
      }
      callback(results.rows)
    });
  }
};

module.exports.updateProduct = (productObj, callback) => {
  if (productObj != null && productObj != undefined && productObj != "") {
    pool.query(UPDATE_PRODUCT, [productObj], (error, results) => {
      if (error) {
        throw error
      }
      callback(results.rows)
    });
  }
};
