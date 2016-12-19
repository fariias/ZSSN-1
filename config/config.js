/* global process, module, __dirname */

var path = require('path');
var rootPath = path.normalize(__dirname + '/../');

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
        ip: "127.0.0.1",
        rootPath: rootPath,
        db: 'mongodb://127.0.0.1/zssn',
        port: 80,
        log: "combined"
    }
};
