var request = require("supertest");
var chai = require("chai");
var app = require('../server');
var DBTestData = require("./database-test-data");

global.app = app;
global.request = request;
global.agent = request(app);
global.expect = chai.expect;
global.DBTestData = DBTestData;
