var request = require("supertest");
var chai = require("chai");
var app = require('../server');

global.app = app;
global.request = request;
global.agent = request(app);
global.expect = chai.expect;
global.testData = {
    notInfectedPerson: {
        name: "Test Survivor",
        gender: "male",
        age: "21",
        lastLocation: {
            latitude: "-16.686882",
            longitude: "-49.264789"
        },
        inventory: {
            water: 120,
            food: 180,
            medication: 220,
            ammunition: 280
        },
        infected: false,
        infectionReports: []
    },
    almostInfectedPerson: {
        name: "Test Survivor",
        gender: "male",
        age: "21",
        lastLocation: {
            latitude: "-16.686882",
            longitude: "-49.264789"
        },
        inventory: {
            water: 120,
            food: 180,
            medication: 220,
            ammunition: 280
        },
        infected: false,
        infectionReports: [
            {
                reporter: "Someone",
                date: new Date()
            },
            {
                reporter: "Not the same person",
                date: new Date()
            }
        ]
    }
};

