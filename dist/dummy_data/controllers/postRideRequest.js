'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _db = require('../model/db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var data = _db2.default;
/**
 * @class PostRideRequest
 * @classdesc controller class that post a ride request.
 */

var PostRideRequest = function () {
    function PostRideRequest() {
        _classCallCheck(this, PostRideRequest);
    }

    _createClass(PostRideRequest, null, [{
        key: 'rideRequest',
        value: function rideRequest(req, res) {
            var rideId = req.params.rideId;

            var newRide = [];
            var ride_request = [];
            data.map(function (ride) {
                if (parseInt(rideId, 10) == ride.id) {
                    ride_request.push(req.body.ride_request);
                    newRide.push(ride_request);
                }
            });
            if (newRide.length == 0) {
                return res.status(404).json({
                    message: 'ride does not exist..'
                });
            } else {
                return res.status(201).json(newRide);
            }
        }
    }]);

    return PostRideRequest;
}();

exports.default = PostRideRequest;