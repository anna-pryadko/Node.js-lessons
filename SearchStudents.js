//const products = require('./Products.js');

var mysql=require('mysql');

var con=mysql.createConnection({
    host:"localhost",
    port: 8889,
    user:"root",
    password:"root",
    database:"students"
});

module.exports.searchStudFun = function(minAge,maxAge) {
    
    

    return JSON.stringify(foundStudent);
};