var pool = require('./db').getPool();

const GET_USER = 'SELECT "EMP_LOGIN_ID","LOGIN_DETAILS_EMP_ID","EMP_USERNAME","EMP_ROLE" FROM "EMP_LOGIN"';
const GET_USER_BY_ID = 'SELECT "EMP_LOGIN_ID","LOGIN_DETAILS_EMP_ID","EMP_USERNAME","EMP_ROLE" FROM "EMP_LOGIN" WHERE "EMP_USERNAME"=$1';
const GET_USER_BY_ID_AND_PASS = 'SELECT "EMP_LOGIN_ID","LOGIN_DETAILS_EMP_ID","EMP_USERNAME","EMP_ROLE" FROM "EMP_LOGIN" WHERE "EMP_USERNAME"=$1 AND "EMP_PASSWORD"=$2';
const ADD_USER = 'INSERT INTO "EMP_LOGIN" ("LOGIN_DETAILS_EMP_ID","EMP_USERNAME","EMP_PASSWORD","EMP_ROLE","CREATED_DATE","CREATED_TIME","UPDATED_DATE","UPDATED_TIME","ACTIVE_STATUS") VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING "EMP_LOGIN_ID","LOGIN_DETAILS_EMP_ID","EMP_USERNAME","EMP_ROLE","CREATED_DATE","CREATED_TIME","UPDATED_DATE","UPDATED_TIME","ACTIVE_STATUS"';
const UPDATE_USER = 'UPDATE "EMP_LOGIN" SET "EMP_PASSWORD"=$2,"EMP_ROLE"=$3,"UPDATED_DATE"=$4,"UPDATED_TIME"=$5,"ACTIVE_STATUS"=$6 WHERE "EMP_USERNAME"=$1 RETURNING "EMP_LOGIN_ID","LOGIN_DETAILS_EMP_ID","EMP_USERNAME","EMP_ROLE","CREATED_DATE","CREATED_TIME","UPDATED_DATE","UPDATED_TIME","ACTIVE_STATUS"';

module.exports.getAllUser = (callback) => {
    pool.query(GET_USER, (error, results) => {
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
  
  module.exports.getUserById = (id, callback) => {
    if (id != null && id != undefined && id != "") {
      pool.query(GET_USER_BY_ID, [id], (error, results) => {
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

  module.exports.getUserByNameAndPass = (id,pass, callback) => {
    if (id != null && id != undefined && id != "") {
      pool.query(GET_USER_BY_ID_AND_PASS, [id,pass], (error, results) => {
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
  
  module.exports.addUser = (userObj, callback) => {
    if (userObj != null && userObj != undefined && userObj != "") {
  
      var dataArray=[userObj.LOGIN_DETAILS_EMP_ID,
                    userObj.EMP_USERNAME,
                    userObj.EMP_PASSWORD,
                    userObj.EMP_ROLE,
                    userObj.CREATED_DATE,
                    userObj.CREATED_TIME,
                    userObj.UPDATED_DATE,
                    userObj.UPDATED_TIME,
                    userObj.ACTIVE_STATUS];
  
      pool.query(ADD_USER,dataArray , (error, results) => {
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
  
  module.exports.updateUser = (username,userObj, callback) => {
    if (username!=undefined && username !=null && username!="" && 
        userObj != null && userObj != undefined && userObj != "") {
  
            var dataArray=[username,
                userObj.EMP_PASSWORD,
                userObj.EMP_ROLE,
                userObj.UPDATED_DATE,
                userObj.UPDATED_TIME,
                userObj.ACTIVE_STATUS];
  
      pool.query(UPDATE_USER, dataArray, (error, results) => {
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
