const mongoose = require('mongoose');

module.exports =  function(){

    var personSchema = mongoose.Schema({
        name: String,
        gender: String,
        age: Number,
        lastLocation: {
            latitude: String,
            longitude: String
        },
        inventory: {
            water: Number,
            food: Number,
            medication: Number,
            ammunition: Number
        },
        infected: Boolean,
        infectionReports: [
            {
                reporter: String,
                date: Date
            }
        ]
    });

    return mongoose.model('Person', personSchema);
};
