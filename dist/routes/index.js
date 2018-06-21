'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _index = require('../dummy_data/controllers/index');

var _index2 = require('../dummy_data/middleware/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// defines routes
router.get('/', function (req, res) {
    res.send('Hello, Welcome to Ride-My-Way App');
});

// routes for ride-my-way
router.get('/rides', _index.AllRides.getAllRides);
router.get('/rides/:rideId', _index.GetSingleRide.singleRide);
router.post('/rides', _index2.PostRideValidator.postRideValidator, _index.PostRide.newRide);
router.post('/rides/:rideId/request', _index.PostRideRequest.rideRequest);

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