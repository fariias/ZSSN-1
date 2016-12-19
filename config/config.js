/* global process, module, __dirname */

var path = require('path');
var rootPath = path.normalize(__dirname + '/../');

if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD){
    var OPENSHIFT_MONGODB_CONNECTION = "mongodb://" + process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
        process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
        process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
        process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
        process.env.OPENSHIFT_APP_NAME;
}

module.exports = {
    development: {
        ip: "127.0.0.1",
        rootPath: rootPath,
        db: 'mongodb://127.0.0.1/zssn',
        port: 3030,
        log: "dev"
    },
    test: {
        ip: "127.0.0.1",
        rootPath: rootPath,
        db: 'mongodb://127.0.0.1/zssn-test-db',
        port: 3030,
        log: "disabled"
    },
    production: {
        ip: process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1",
        rootPath: rootPath,
        db: OPENSHIFT_MONGODB_CONNECTION || 'mongodb://127.0.0.1/zssn',
        port: process.env.OPENSHIFT_NODEJS_PORT || 8080,
        log: "combined"
    }
};
