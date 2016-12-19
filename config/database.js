const mongoose = require('mongoose');

module.exports = function (app, config) {
    mongoose.Promise = global.Promise;
    mongoose.connect(config.db);
    
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', () => {
        if (config.log !== "disabled"){
            console.log('ZSSN MongoDB connection opened');
        }
    });
};
