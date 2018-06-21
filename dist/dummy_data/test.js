'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

var _mocha = require('mocha');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai2.default.expect.expect;

var request = (0, _supertest2.default)(_app2.default);

var data = {};
var ride_request = ['Tolu requested to join your ride', 'Ade requested to join your ride'];

(0, _mocha.describe)('API Endpoints testing', function () {
    (0, _mocha.describe)('Get all Rides in the application', function () {
        (0, _mocha.beforeEach)(function () {
            data = {
                id: 1,
                name: 'Ajayi Samuel',
                from: 'ccHub, Herbert Macaulay Road, Lagos Mainland',
                to: 'Adetokunbo Ademola Street, Eti-Osa',
                departure_time: '4pm',
                ride_request: []
            }, {
                id: 2,
                name: 'Samuel Tutu',
                from: 'CMS, Lagos Island',
                to: 'Adetokunbo Ademola Street, Eti-Osa',
                departure_time: '5pm',
                ride_request: []
            }, {
                id: 3,
                name: 'Ezeh Chika',
                from: 'Gwarinpa Estate, Abuja, Federal Capital Territory, Nigeria',
                to: 'Danube Street, Abuja, Federal Capital Territory, Nigeria',
                departure_time: '2pm',
                ride_request: []
            }, {
                id: 4,
                name: 'Jennifer Dickson',
                from: 'Herbert Macaulay Road, Lagos Mainland',
                to: 'Amuwo Odofin',
                departure_time: '8pm',
                ride_request: []
            }, {
                id: 5,
                name: 'Beulah Isaac',
                from: 'Campus Mini Stadium, Lagos Island',
                to: 'Victoria Island, Eti-Osa',
                departure_time: '3pm',
                ride_request: []
            }, {
                id: 6,
                name: 'Jeffery Owolabi',
                from: 'Ikoyi Club 1938 Road, Lagos Island',
                to: 'Omole Bus Stop, Isheri Road, Ikeja',
                departure_time: '7pm',
                ride_request: []
            };
        });
        (0, _mocha.it)('Should GET all the rides in the application', function () {
            request.get('/api/v1/rides').end(function (err, res) {
                expect(res.status).to.equal(200);
                expect(res).to.be.an('object');
            });
        });
        (0, _mocha.it)('Should GET a single ride from the application', function () {
            request.get('/api/v1/rides/1').end(function (err, res) {
                //console.log("request: ", res, 'error: ', err)
                expect(res.status).to.equal(200);
                expect(res).to.be.an('object');
            });
        });
        (0, _mocha.it)('Should CREATE a new Ride in the application', function () {
            request.post('/api/v1/rides').send(data).end(function (err, res) {
                //console.log("request: ", res, 'error: ', err)
                expect(res.status).to.equal(201);
                expect(res).to.be.an('object');
            });
        });
        (0, _mocha.it)('Should POST a Ride Request to join a ride by the given id', function () {
            request.post('/api/v1/rides/1/request').send(ride_request).end(function (err, res) {
                //console.log("request: ", res, 'error: ', err)
                expect(res.status).to.equal(201);
                expect(res).to.be.an('object');
            });
        });
    });
});