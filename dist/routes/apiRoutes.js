'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _index = require('../middleware/index');

var _index2 = require('../controller/index');

var _rideRequest = require('../controller/rideRequest');

var _rideRequest2 = _interopRequireDefault(_rideRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// defines routes
router.get('/', function (req, res) {
    res.send('Hello, Welcome to Ride-My-Way App');
});

// routes for ride-my-way
router.post('/auth/signup', _index.SignUpValidation.signUp, _index2.UserController.signUp);
router.post('/auth/login', _index.SignInValidation.signIn, _index2.UserController.signInUser);

// Routes for rides
router.get('/rides', _index.Auth.verify, _index2.RidesController.getAllRides);
router.get('/rides/:rideId', _index.Auth.verify, _index2.RidesController.getARide);

router.post('/users/rides', _index.Auth.verify, _index.PostValidation.rideValidator, _index2.RidesController.postRide);

//Routes for Ride Request
router.get('/users/rides/:rideId/requests', _index.Auth.verify, _rideRequest2.default.getAllRideRequest);

router.post('/rides/:rideId/requests', _index.Auth.verify, _rideRequest2.default.postRideRequest);

router.put('/users/rides/:rideId/requests/:id', _index.Auth.verify, _rideRequest2.default.putRideRequest);

// catch all invalid routes
router.get('*', function (req, res) {
    return res.status(404).json({
        message: 'Invalid Route'
    });
});

router.post('*', function (req, res) {
    return res.status(404).json({
        message: 'Invalid Route'
    });
});

exports.default = router;