var pool = require('./db');
var _ = require('underscore');

const GET_ALL_PRODUCT = 'SELECT * FROM "PRODUCT_DETAILS"';
const GET_PRODUCT_BY_ID = 'SELECT * FROM "PRODUCT_DETAILS" WHERE "PRODUCT_ID"=$1';
const ADD_PRODUCT = 'INSERT INTO "PRODUCT_DETAILS" ' +
  '("PRODUCT_CODE","PRODUCT_NAME","HSN_CODE","PRODUCT_DESC","PROD_COMPANY_ID","PROD_UNIT_ID","PROD_UNIT_QUANTITY","PRODUCT_MRP","PROD_CGST_PER","PROD_SGST_PER","ACTIVE_STATUS","PRODUCT_RATE") ' +
  'VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)';
const UPDATE_PRODUCT = 'UPDATE "PRODUCT_DETAILS" SET ' +
  '"PRODUCT_CODE"=$2,"PRODUCT_NAME"=$3,"HSN_CODE"=$4,"PRODUCT_DESC"=$5,"PROD_COMPANY_ID"=$6,"PROD_UNIT_ID"=$7,"PROD_UNIT_QUANTITY"=$8,"PRODUCT_MRP"=$9,"PROD_CGST_PER"=$10,"PROD_SGST_PER"=$11,"ACTIVE_STATUS"=$12,"PRODUCT_RATE"=$13 ' +
  'WHERE "PRODUCT_ID"=$1';

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
    var dataArray = [
      productObj.PRODUCT_CODE,
      productObj.PRODUCT_NAME,
      productObj.HSN_CODE,
      productObj.PRODUCT_DESC,
      productObj.PROD_COMPANY_ID,
      productObj.PROD_UNIT_ID,
      productObj.PROD_UNIT_QUANTITY,
      productObj.PRODUCT_MRP,
      productObj.PROD_CGST_PER,
      productObj.PROD_SGST_PER,
      productObj.ACTIVE_STATUS,
      JSON.stringify(productObj.PRODUCT_RATE)
    ];
    pool.query(ADD_PRODUCT, dataArray, (error, results) => {
      if (error) {
        throw error
      }
      callback(results.rows)
    });
  }
};

module.exports.updateProduct = (productId, productObj, callback) => {
  if (productId != undefined && productId != null && productId != "" &&
    productObj != null && productObj != undefined && productObj != "") {

    var dataArray = [
      productId,
      productObj.PRODUCT_CODE,
      productObj.PRODUCT_NAME,
      productObj.HSN_CODE,
      productObj.PRODUCT_DESC,
      productObj.PROD_COMPANY_ID,
      productObj.PROD_UNIT_ID,
      productObj.PROD_UNIT_QUANTITY,
      productObj.PRODUCT_MRP,
      productObj.PROD_CGST_PER,
      productObj.PROD_SGST_PER,
      productObj.ACTIVE_STATUS,
      JSON.stringify(productObj.PRODUCT_RATE)
    ];

    pool.query(UPDATE_PRODUCT, dataArray, (error, results) => {
      if (error) {
        throw error
      }
      callback(results.rows)
    });
  }
};
