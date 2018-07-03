'use strict';

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _app = require('../../app');

var _app2 = _interopRequireDefault(_app);

var _ridefaker = require('../faker/ridefaker');

var _ridefaker2 = _interopRequireDefault(_ridefaker);

var _user = require('../../test/test/user.test');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai2.default.expect;


describe('Ride-My-Way Rides Test', function () {
    it('should load the api home page', function (done) {
        (0, _supertest2.default)(_app2.default).get('/api/v1').expect(200).end(function (err) {
            if (err) {
                done(err);
            }
            done();
        });
    });
    it('should return error if token is not present when creating a ride', function (done) {
        (0, _supertest2.default)(_app2.default).post('/api/v1/users/rides').send(_ridefaker2.default.ride).end(function (error, res) {
            expect(401);
            expect(res.body.message).to.include('No token provided');
            if (error) done(error);
            done();
        });
    });
    it('should return error if token is not valid when creating RIDE', function (done) {
        (0, _supertest2.default)(_app2.default).post('/api/v1/users/rides').send(_ridefaker2.default.ride).set('authorization', 'fghfghfghfgh').end(function (error, res) {
            expect(401);
            expect(res.body.message).to.include('You do not have permission to this page.');
            if (error) done(error);
            done();
        });
    });
    // Not Passing DOnt know why?
    it('should save ride to database if login is valid' + 'User and body is filled correctly', function (done) {
        (0, _supertest2.default)(_app2.default).post('/api/v1/users/rides').send(_ridefaker2.default.ride).set('authorization', _user2.default.token).end(function (error, res) {
            expect(201);
            console.log(res.body);
            expect(res.body.data);
            if (error) done(error);
            done();
        });
    });
    it('should return error if login as User and destination start point is empty', function (done) {
        (0, _supertest2.default)(_app2.default).post('/api/v1/users/rides').send(_ridefaker2.default.ride4).set('authorization', _user2.default.token).end(function (error, res) {
            expect(400);
            //console.log(res.body)
            expect(res.body.message).to.include('destination start point is required');
            if (error) done(error);
            done();
        });
    });
    it('should return error if destination stop point is empty', function (done) {
        (0, _supertest2.default)(_app2.default).post('/api/v1/users/rides').send(_ridefaker2.default.ride5).set('authorization', _user2.default.token).end(function (error, res) {
            expect(400);
            expect(res.body.message).to.include('destination start point is required');
            if (error) done(error);
            done();
        });
    });
    it('should return error if destination time is empty', function (done) {
        (0, _supertest2.default)(_app2.default).post('/api/v1/users/rides').send(_ridefaker2.default.ride6).set('authorization', _user2.default.token).end(function (error, res) {
            expect(400);
            expect(res.body.message).to.include('destination start point is required');
            if (error) done(error);
            done();
        });
    });
    it('should return 401 if no token', function (done) {
        (0, _supertest2.default)(_app2.default).get('/api/v1/rides').end(function (error, res) {
            expect(401);
            //console.log(res.body)
            expect(res.body.message).to.include('No token provided');
            if (error) done(error);
            done();
        });
    });
    it('should return error if ride route is incorrect', function (done) {
        (0, _supertest2.default)(_app2.default).get('/api/v1/ride').set('authorization', _user2.default.token).end(function (error, res) {
            expect(404);
            //console.log(res.body)
            expect(res.body.message).to.include('Invalid Route');
            if (error) done(error);
            done();
        });
    });
});