var pool = require('./db').getPool();
var _ = require('underscore');

const GET_EMPLOYEE = 'SELECT * FROM "EMPLOYEE"';
const GET_EMPLOYEE_BY_ID = 'SELECT * FROM "EMPLOYEE" WHERE "EMP_ID"=$1';
const ADD_EMPLOYEE = 'INSERT INTO "EMPLOYEE" ("EMP_NAME","EMP_CONTACT","EMP_ADDRESS","DESIGNATION_ID","EMP_WAREHOUSE_ID","ID_PROOF_TYPE","ID_PROOF_DETAILS","EMP_DOB","ACTIVE_STATUS") VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING "EMP_ID","EMP_NAME","EMP_CONTACT","EMP_ADDRESS","DESIGNATION_ID","EMP_WAREHOUSE_ID","ID_PROOF_TYPE","ID_PROOF_DETAILS","EMP_DOB","ACTIVE_STATUS"';
const UPDATE_EMPLOYEE = 'UPDATE "EMPLOYEE" SET "EMP_NAME"=$2,"EMP_CONTACT"=$3,"EMP_ADDRESS"=$4,"DESIGNATION_ID"=$5,"EMP_WAREHOUSE_ID"=$6,"ID_PROOF_TYPE"=$7,"ID_PROOF_DETAILS"=$8,"EMP_DOB"=$9,"ACTIVE_STATUS"=$10 WHERE "EMP_ID"=$1 RETURNING "EMP_ID","EMP_NAME","EMP_CONTACT","EMP_ADDRESS","DESIGNATION_ID","EMP_WAREHOUSE_ID","ID_PROOF_TYPE","ID_PROOF_DETAILS","EMP_DOB","ACTIVE_STATUS"';

module.exports.getAllEmployee = (callback) => {
  pool.query(GET_EMPLOYEE, (error, results) => {
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

module.exports.getEmployeeById = (id, callback) => {
  if (id != null && id != undefined && id != "") {
    pool.query(GET_EMPLOYEE_BY_ID, [id], (error, results) => {
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

module.exports.addEmployee = (empObj, callback) => {
  if (empObj != null && empObj != undefined && empObj != "") {

    var dataArray=[empObj.EMP_NAME,
                  empObj.EMP_CONTACT,
                  empObj.EMP_ADDRESS,
                  empObj.DESIGNATION_ID,
                  empObj.EMP_WAREHOUSE_ID,
                  empObj.ID_PROOF_TYPE,
                  empObj.ID_PROOF_DETAILS,
                  empObj.EMP_DOB,
                  empObj.ACTIVE_STATUS];

    pool.query(ADD_EMPLOYEE,dataArray , (error, results) => {
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

module.exports.updateEmployee = (empId,empObj, callback) => {
  if (empId!=undefined && empId !=null && empId!="" && 
      empObj != null && empObj != undefined && empObj != "") {

    var dataArray=[empId,
                  empObj.EMP_NAME,
                  empObj.EMP_CONTACT,
                  empObj.EMP_ADDRESS,
                  empObj.DESIGNATION_ID,
                  empObj.EMP_WAREHOUSE_ID,
                  empObj.ID_PROOF_TYPE,
                  empObj.ID_PROOF_DETAILS,
                  empObj.EMP_DOB,
                  empObj.ACTIVE_STATUS];

    pool.query(UPDATE_EMPLOYEE, dataArray, (error, results) => {
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