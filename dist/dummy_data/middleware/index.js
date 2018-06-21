'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RideRequestValidation = exports.PostRideValidator = undefined;

var _postRideValidate = require('./postRideValidate');

var _postRideValidate2 = _interopRequireDefault(_postRideValidate);

var _postRideRequestValidate = require('./postRideRequestValidate');

var _postRideRequestValidate2 = _interopRequireDefault(_postRideRequestValidate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.PostRideValidator = _postRideValidate2.default;
exports.RideRequestValidation = _postRideRequestValidate2.default;