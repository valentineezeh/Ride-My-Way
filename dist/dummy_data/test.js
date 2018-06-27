'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

var _db = require('./model/db');

var _db2 = _interopRequireDefault(_db);

var _mocha = require('mocha');

var _assert = require('assert');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai2.default.expect.expect;

var request = (0, _supertest2.default)(_app2.default);

//let data = {};
var ride_request = ['Tolu requested to join your ride', 'Ade requested to join your ride'];

(0, _mocha.describe)('API Endpoints testing', function () {
    (0, _mocha.beforeEach)(function () {
        _db2.default;
    });
    /*
    * Test to Get all Rides in Application 
    */
    (0, _mocha.describe)('Get all Rides in the application', function () {
        (0, _mocha.it)('Should GET all the rides in the application', function () {
            request.get('/api/v1/rides').end(function (err, res) {
                expect(res.status).to.equal(200);
                expect(res).to.be.json;
                expect(res).to.be.an('object');
                expect(res.body.rides).to.be.an('array');
            });
        });
    });
    /*
    * Test the POST route
    */
    (0, _mocha.describe)('POST a Ride in the application', function () {
        (0, _mocha.it)('Should POST a rides in the application', function () {
            request.post('/api/v1/rides').send({
                id: 7,
                name: 'Tolu Mike',
                from: 'Ikorodu Town Hall, Saka Sonoiki Street Road, Lagos Mainland',
                to: 'Adetokunbo Ademola Street, Eti-Osa',
                departure_time: '5pm',
                ride_request: []
            }).end(function (err, res) {
                //console.log("request: ", res, 'error: ', err)
                expect(res.status).to.equal(201);
                expect(res).to.be.json;
                expect(res).to.be.an('object');
                expect(res.body.rides).to.be.an('array');
            });
        });
    });
    /*
    * Test to check for invalid Post
    */
    (0, _mocha.describe)('POST a Ride in the application', function () {
        (0, _mocha.it)('Respond with 400 Bad Request', function () {
            request.post('/api/v1/rides').send({
                from: 'Ikorodu Town Hall, Saka Sonoiki Street Road, Lagos Mainland',
                to: 'Adetokunbo Ademola Street, Eti-Osa',
                departure_time: '5pm',
                ride_request: []
            }).end(function (err, res) {
                if (err) {
                    expect(err).to.have.status(400);
                } else {
                    //console.log("request: ", res, 'error: ', err)
                    expect(res.status).to.equal(400);
                    expect(res).to.be.json;
                    expect(res).to.be.an('object');
                    expect(res.body.rides).to.be.an('array');
                }
            });
        });
    });
    /*
    * Test the Get a Single Ride from application
    */
    (0, _mocha.describe)('Get a Single Ride from the application', function () {
        (0, _mocha.it)('Should GET a single ride from the application', function () {
            request.get('/api/v1/rides/1').end(function (err, res) {
                //console.log("request: ", res, 'error: ', err)
                expect(res.status).to.equal(200);
                expect(res).to.be.json;
                expect(res).to.be.an('object');
                expect(res.body.rides).to.be.an('array');
            });
        });
    });
    /*
    * Test to check for invalid RoutenPage not found 
    */
    (0, _mocha.describe)('Get a Ride from the application', function () {
        (0, _mocha.it)('Should respond with Ride not found', function () {
            request.get('/api/v1/rides/88').end(function (err, res) {
                if (err) {
                    expect(err).to.have.status(404);
                } else {
                    //console.log("request: ", res, 'error: ', err)
                    expect(res.status).to.equal(200);
                    expect(res).to.be.json;
                    expect(res).to.be.an('object');
                    expect(res.body.rides).to.be.an('array');
                }
            });
        });
    });
    /*
    * Test to GET a ride from the application
    */
    (0, _mocha.describe)('Get a Ride from the application', function () {
        (0, _mocha.it)('Should GET a single ride from the application', function () {
            request.get('/api/v1/rides/2').end(function (err, res) {
                //console.log("request: ", res, 'error: ', err)
                expect(res.status).to.equal(200);
                expect(res).to.be.json;
                expect(res).to.be.an('object');
                expect(res.body.rides).to.be.an('array');
            });
        });
    });
    /*
    * Test to Post to join a ride 
    */
    (0, _mocha.describe)('Post to Join a Ride in the application', function () {
        (0, _mocha.it)('Should POST a Ride Request from the application', function () {
            request.post('/api/v1/rides/1/request').send({
                ride_request: ride_request
            }).end(function (err, res) {
                //console.log("request: ", res, 'error: ', err)
                expect(res.status).to.equal(201);
                expect(res).to.be.json;
                expect(res).to.be.an('object');
                expect(res.body.rides).to.be.an('array');
            });
        });
    });
    /*
    * Test to check for invalid Route 
    */
    (0, _mocha.describe)('Bad Request to POST a Ride in the application', function () {
        (0, _mocha.it)('Respond with 400 Bad Request', function () {
            request.post('/api/v1/rides').send({
                ride_request: ride_request
            }).end(function (err, res) {
                if (err) {
                    expect(err).to.have.status(400);
                } else {
                    //console.log("request: ", res, 'error: ', err)
                    expect(res.status).to.equal(400);
                    expect(res).to.be.json;
                    expect(res).to.be.an('object');
                    expect(res.body.rides).to.be.an('array');
                }
            });
        });
    });
});