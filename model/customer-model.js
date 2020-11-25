var pool = require('./db').getPool();
var _ = require('underscore');

const GET_ALL_CUSTOMER = 'SELECT * FROM "CUSTOMER_DETAILS"';
const GET_CUSTOMER_BY_ID = 'SELECT * FROM "CUSTOMER_DETAILS" WHERE "CUST_ID"=$1';
const ADD_CUSTOMER = 'INSERT INTO "CUSTOMER_DETAILS" ' +
  '("CUST_NAME","SHOP_NAME","CUST_CONTACT","CUST_GST_NO","CUST_ADDRESS","OUTSTANDING","CUST_DOB","ACTIVE_STATUS") ' +
  'VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING "CUST_ID","CUST_NAME","SHOP_NAME","CUST_CONTACT","CUST_GST_NO","CUST_ADDRESS","OUTSTANDING","CUST_DOB","ACTIVE_STATUS"';
const UPDATE_CUSTOMER = 'UPDATE "CUSTOMER_DETAILS" SET ' +
  '"CUST_NAME"=$2,"SHOP_NAME"=$3,"CUST_CONTACT"=$4,"CUST_GST_NO"=$5,"CUST_ADDRESS"=$6,"OUTSTANDING"=$7,"CUST_DOB"=$8,"ACTIVE_STATUS"=$9 ' +
  'WHERE "CUST_ID"=$1 RETURNING "CUST_ID","CUST_NAME","SHOP_NAME","CUST_CONTACT","CUST_GST_NO","CUST_ADDRESS","OUTSTANDING","CUST_DOB","ACTIVE_STATUS"';

module.exports.getAllCustomer = (callback) => {
  pool.query(GET_ALL_CUSTOMER, (error, results) => {
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

module.exports.getCustomerById = (id, callback) => {
  if (id != null && id != undefined && id != "") {
    pool.query(GET_CUSTOMER_BY_ID, [id], (error, results) => {
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


module.exports.addCustomer = (customerObj, callback) => {
  if (customerObj != null && customerObj != undefined && customerObj != "") {
    var dataArray = [
      customerObj.CUST_NAME,
      customerObj.SHOP_NAME,
      customerObj.CUST_CONTACT,
      customerObj.CUST_GST_NO,
      customerObj.CUST_ADDRESS,
      customerObj.OUTSTANDING,
      customerObj.CUST_DOB,
      customerObj.ACTIVE_STATUS
    ];
    pool.query(ADD_CUSTOMER, dataArray, (error, results) => {
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

module.exports.updateCustomer = (customerId, customerObj, callback) => {
  if (customerId != undefined && customerId != null && customerId != "" &&
    customerObj != null && customerObj != undefined && customerObj != "") {

    var dataArray = [
      customerId,
      customerObj.CUST_NAME,
      customerObj.SHOP_NAME,
      customerObj.CUST_CONTACT,
      customerObj.CUST_GST_NO,
      customerObj.CUST_ADDRESS,
      customerObj.OUTSTANDING,
      customerObj.CUST_DOB,
      customerObj.ACTIVE_STATUS
    ];

    pool.query(UPDATE_CUSTOMER, dataArray, (error, results) => {
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
