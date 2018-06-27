'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _userValidator = require('../middleware/userValidator');

var _userValidator2 = _interopRequireDefault(_userValidator);

var _user = require('../users/user.controller');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { AllRides, GetSingleRide, PostRide, PostRideRequest }  from '../dummy_data/controllers/index';
// import {PostRideValidator, RideRequestValidation} from '../dummy_data/middleware/index';
var router = _express2.default.Router();

// defines routes
router.get('/', function (req, res) {
    res.send('Hello, Welcome to Ride-My-Way App');
});

// routes for ride-my-way
router.post('/auth/signup', _userValidator2.default.signUp, _user2.default.createUser);
// router.get('/rides', AllRides.getAllRides);
// router.get('/rides/:rideId', GetSingleRide.singleRide);
// router.post('/rides', PostRideValidator.postRideValidator , PostRide.newRide);
// router.post('/rides/:rideId/request', PostRideRequest.rideRequest);

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