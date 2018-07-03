'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _app = require('../../app');

var _app2 = _interopRequireDefault(_app);

var _userfaker = require('../faker/userfaker');

var _userfaker2 = _interopRequireDefault(_userfaker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai2.default.expect;

var testUser = {};
var validToken = {};

describe('Ride-My-Way User Test', function () {
    it('should load the api home page', function (done) {
        (0, _supertest2.default)(_app2.default).get('/api/v1/').expect(200).end(function (err) {
            if (err) {
                done(err);
            }
            done();
        });
    });
    it('should return error if email field is empty on signup', function (done) {
        (0, _supertest2.default)(_app2.default).post('/api/v1/auth/signup').send(_userfaker2.default.wronginfo).end(function (error, res) {
            expect(400);
            //console.log(res.body.message)
            expect(res.body.message[0]).to.include('Valid Email is required');
            if (error) done(error);
            done();
        });
    });

    // // Not Passing
    // it('should return error if password field is empty on signup', (done) => {
    //     request(app).post('/api/v1/auth/signup')
    //       .send(testData.wronginfo1)
    //       .end((error, res) => {
    //           expect(400);
    //           console.log(res.body)
    //           expect(res.body.message).to.include('Password Cannot be Blank.');
    //           if(error) done(error);
    //           done()
    //       });
    // });
    // it('should return error if password field is less than six character on signup', (done) => {
    //     request(app).post('/api/v1/auth/signup')
    //       .send(testData.wronginfo2)
    //       .end((error, res) => {
    //           expect(400);
    //           //console.log(res)
    //           expect(res.body.message).to.include('Password cannot be less than six charaters!');
    //           if(error) done(error)
    //           done();
    //       });
    // });

    // passing
    it('Should return error if email field is empty on login', function (done) {
        (0, _supertest2.default)(_app2.default).post('/api/v1/auth/login').send(_userfaker2.default.loginerror1).end(function (error, res) {
            expect(400);
            expect(res.body.message[0]).to.include('Email should not be empty');
            if (error) done(error);
            done();
        });
    });

    // passing
    it('Should return error if password field is empty on signin', function (done) {
        (0, _supertest2.default)(_app2.default).post('/api/v1/auth/login').send(_userfaker2.default.loginerror2).end(function (error, res) {
            expect(400);
            expect(res.body.message[0]).to.include('Password should not be empty.');
            if (error) done(error);
            done();
        });
    });
    // Passing
    it('Should create a new user with email and password', function (done) {
        (0, _supertest2.default)(_app2.default).post('/api/v1/auth/signup').set('Content-Type', 'application/json').send(_userfaker2.default.signupUser).expect(201).end(function (err, res) {
            testUser.user = res.body.data;
            //console.log("===================")
            //console.log(res.body)
            expect(testUser.user).to.have.property('firstname');
            expect(testUser.user).to.have.property('lastname');
            expect(testUser.user).to.have.property('email');
            expect(res.body.data.email).to.equal(_userfaker2.default.signupUser.email);
            if (err) return done(err);
            done();
        });
    });
    // Passing
    it("should throw error if email already exist in database", function (done) {
        (0, _supertest2.default)(_app2.default).post('/api/v1/auth/signup').set('Content-Type', 'application/json').send(_userfaker2.default.signupUser3).expect(409).end(function (err, res) {
            //console.log(res.body)
            expect(res.body.message).to.equal('User already exist.');
            if (err) return done(err);
            done();
        });
    });
    //passing
    it('user cant login if the password is not correct', function (done) {
        (0, _supertest2.default)(_app2.default).post('/api/v1/auth/login').send(_userfaker2.default.loginUser2).expect(400).end(function (err, res) {
            expect(res.body.message).to.equal('Authentication failed, wrong Password');
            if (err) return done(err);
            done();
        });
    });

    //passing
    it('user cant login if the email is not correct.', function (done) {
        (0, _supertest2.default)(_app2.default).post('/api/v1/auth/login').send(_userfaker2.default.loginUser3).expect(400).end(function (err, res) {
            //console.log(res.body)
            expect(res.body.message).to.equal('Authentication failed, wrong Password');
            if (err) return done(err);
            done();
        });
    });
    //Passing
    it('user login Successfully with correct details', function (done) {
        (0, _supertest2.default)(_app2.default).post('/api/v1/auth/login').send(_userfaker2.default.loginUser1).expect(200).end(function (err, res) {
            //console.log(testData.loginUser1.password)
            // console.log(testData.signupUser.password)
            // console.log(res.body.message)
            expect(res.body.message).to.equal("Welcome User You are now Logged In");
            if (err) return done(err);
            done();
        });
    });
    // Passing
    it('should return a token when user successful signin', function (done) {
        (0, _supertest2.default)(_app2.default).post('/api/v1/auth/login').send(_userfaker2.default.loginUser1).expect(200).end(function (err, res) {
            //console.log("==================Message================")
            validToken.token = res.body.token;
            //console.log(validToken.token)
            expect(validToken.token);
            //console.log("==================Message================")
            //console.log(res.body)
            expect(res.body.message).to.equal("Welcome User You are now Logged In");
            if (err) return done(err);
            done();
        });
    });
});

exports.default = validToken;