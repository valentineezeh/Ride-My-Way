'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require('../db/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RidesController = function () {
    function RidesController() {
        _classCallCheck(this, RidesController);
    }

    _createClass(RidesController, null, [{
        key: 'getAllRides',
        value: function getAllRides(req, res, next) {
            _index2.default.query("select * from rides", function (err, data) {
                if (err) return next(err);
                res.status(200).json({
                    success: true,
                    message: 'All Rides has been retrieve.',
                    data: data.rows
                });
            });
        }
    }, {
        key: 'getARide',
        value: function getARide(req, res, next) {
            _index2.default.query('SELECT * FROM rides WHERE id = $1', [req.params.rideId], function (err, data) {
                if (data) {
                    console.log(data.rows);
                    var newRide = [];
                    // let newRideNum = parseInt(newRide, 10);
                    // console.log(newRideNum)
                    data.rows.map(function (ride) {
                        console.log(ride.id);
                        if (ride.id === parseInt(req.params.rideId, 10)) {
                            newRide.push(ride);
                        }
                    });
                    if (newRide.length == 0) {
                        return res.status(404).json({
                            success: false,
                            message: "Ride Record does not exist"
                        });
                    } else {
                        return res.status(200).json({
                            success: true,
                            message: " Ride has been retrieve",
                            ride: newRide
                        });
                    }
                } else {
                    return next(err);
                }
            });
        }
    }, {
        key: 'postRide',
        value: function postRide(req, res, next) {

            var text = "INSERT INTO rides(destinationstartpoint, destinationstoppoint, departuretime, userId, created_at) VALUES ($1, $2, $3, $4, Now()) RETURNING *";
            var values = [req.body.destinationstartpoint, req.body.destinationstoppoint, req.body.departuretime, req.decoded.userId];
            console.log(req);
            _index2.default.query(text, values, function (err, data) {
                if (err) return res.status(500).json({
                    success: false,
                    message: 'Internal Server error',
                    error: next(err)
                });
                //console.log(data)
                res.status(201).json({
                    success: true,
                    message: 'Ride have been Created',
                    data: data.rows
                });
            });
        }
    }]);

    return RidesController;
}();

exports.default = RidesController;