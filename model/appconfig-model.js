var pool = require('./db').getPool();
var _ = require('underscore');

const GET_KEY_VAL = 'SELECT * FROM "APP_CONFIG"';
const GET_KEY_VAL_BY_TYPE = 'SELECT * FROM "APP_CONFIG" WHERE "PROPERTY_TYPE"=$1';
const ADD_KEY_VAL = 'INSERT INTO "APP_CONFIG" ("PROPERTY_TYPE","PROPERTY_VALUE") VALUES ($1,$2) RETURNING "PROPERTY_ID","PROPERTY_TYPE","PROPERTY_VALUE","ACTIVE_STATUS"';
const UPDATE_KEY_VAL = 'UPDATE "APP_CONFIG" SET "PROPERTY_TYPE"=$2,"PROPERTY_VALUE"=$3 WHERE "PROPERTY_ID"=$1 RETURNING "PROPERTY_ID","PROPERTY_TYPE","PROPERTY_VALUE","ACTIVE_STATUS"';
const DELETE_BY_ID = 'DELETE FROM "APP_CONFIG" WHERE "PROPERTY_ID"=$1';


module.exports.getAllKeyVal = (callback) => {

    pool.query(GET_KEY_VAL, (error, results) => {
        
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

module.exports.getKeyValByType = (type, callback) => {
    if (type != null && type != undefined && type != "") {
        pool.query(GET_KEY_VAL_BY_TYPE, [type], (error, results) => {
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

module.exports.addKeyVal = (keyValObj, callback) => {
    if (keyValObj != null && keyValObj != undefined && keyValObj != "") {
        pool.query(ADD_KEY_VAL, [keyValObj.PROPERTY_TYPE,keyValObj.PROPERTY_VALUE], (error, results) => {
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

module.exports.updateKeyVal = (id,keyValObj, callback) => {
    if (keyValObj != null && keyValObj != undefined && keyValObj != "" && 
        id != null && id != undefined && id != "") {
        pool.query(UPDATE_KEY_VAL, [id,keyValObj.PROPERTY_TYPE,keyValObj.PROPERTY_VALUE], (error, results) => {
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

module.exports.deleteKeyVal = (id, callback) => {
    if (id != null && id != undefined && id != "") {
        pool.query(DELETE_BY_ID, [id], (error, results) => {
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