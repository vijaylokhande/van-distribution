var pool = require('./db');
var _ = require('underscore');

const GET_KEY_VAL = 'SELECT * FROM "APP_CONFIG"';
const GET_KEY_VAL_BY_TYPE = 'SELECT * FROM "APP_CONFIG" WHERE "PROPERTY_TYPE"=$1';
const ADD_KEY_VAL = 'INSERT INTO "APP_CONFIG" ("PROPERTY_TYPE","PROPERTY_VALUE") VALUES ($1,$2)';
const UPDATE_KEY_VAL = 'UPDATE "APP_CONFIG" SET "PROPERTY_TYPE"=$2,"PROPERTY_VALUE"=$3 WHERE "PROPERTY_ID"=$1';
const DELETE_BY_ID = 'DELETE FROM "APP_CONFIG" WHERE "PROPERTY_ID"=$1';


module.exports.getAllKeyVal = (callback) => {
    pool.query(GET_KEY_VAL, (error, results) => {
        if (error) {
            throw error
        }
        callback(results.rows)
    });
};

module.exports.getKeyValByType = (type, callback) => {
    if (type != null && type != undefined && type != "") {
        pool.query(GET_KEY_VAL_BY_TYPE, [type], (error, results) => {
            if (error) {
                throw error
            }
            callback(results.rows)
        });
    }
};

module.exports.addKeyVal = (keyValObj, callback) => {
    if (keyValObj != null && keyValObj != undefined && keyValObj != "") {
        pool.query(ADD_KEY_VAL, [keyValObj.PROPERTY_TYPE,keyValObj.PROPERTY_VALUE], (error, results) => {
            if (error) {
                throw error
            }
            callback(results.rows)
        });
    }
};

module.exports.updateKeyVal = (keyValObj, callback) => {
    if (keyValObj != null && keyValObj != undefined && keyValObj != "") {
        pool.query(UPDATE_KEY_VAL, [keyValObj.PROPERTY_ID,keyValObj.PROPERTY_TYPE,keyValObj.PROPERTY_VALUE], (error, results) => {
            if (error) {
                throw error
            }
            callback(results.rows)
        });
    }
};

module.exports.deleteKeyVal = (id, callback) => {
    if (id != null && id != undefined && id != "") {
        pool.query(DELETE_BY_ID, [id], (error, results) => {
            if (error) {
                throw error
            }
            callback(results.rows)
        });
    }
};