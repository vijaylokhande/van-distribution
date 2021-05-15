const config = require('../config.json');
const jwt = require('jsonwebtoken');
const Role = require('../_helpers/role');
const user = require('../model/user-model');
const { result } = require('underscore');



module.exports = {
    authenticate
};

async function authenticate(data, callback) {
    //const user = users.find(u => u.username === data.username && u.password === data.password);
    if (data.username !== null && data.username !== undefined && data.username!=="" &&
        data.password !== null && data.password !== undefined && data.password!=="") {

        user.getUserByNameAndPass(data.username, data.password, (results) => {

            if (results !== undefined &&
                results.data !== undefined && results.data !== null &&
                results.data[0] !== undefined && results.data[0] !== null) {

                const token = jwt.sign({ loginId: results.data[0].EMP_USERNAME, role: results.data[0].EMP_ROLE, id: results.data[0].LOGIN_DETAILS_EMP_ID }, config.secret);
                const { password, ...userWithoutPassword } = results.data[0];

                callback({
                    ...userWithoutPassword,
                    token
                });
            }
            else{
                callback({ 
                    error:"invalid user"              
                });
            }
        });
    }
    else{
        callback({ 
            error:"invalid user name and password"              
        });
    }
}

