'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RideRequestValidation = function () {
    function RideRequestValidation() {
        _classCallCheck(this, RideRequestValidation);
    }

    _createClass(RideRequestValidation, null, [{
        key: 'rideRequest',
        value: function rideRequest(req, res, next) {
            var error = [];
            if (req.body.ride_request === undefined || req.body.ride_request.toString().trim() === '') {
                return res.send({
                    valid: false,
                    status: 400,
                    message: 'Ride Request should not be empty...'
                });
            }
        }
    }]);

    return RideRequestValidation;
}();

exports.default = RideRequestValidation;