"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require("../db/index");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RideRequestController = function () {
    function RideRequestController() {
        _classCallCheck(this, RideRequestController);
    }

    _createClass(RideRequestController, null, [{
        key: "getAllRideRequest",
        value: function getAllRideRequest(req, res, next) {
            _index2.default.query("SELECT * FROM riderequests WHERE  rideId =$1", [req.params.rideId], function (err, data) {
                if (data) {
                    var rideRequest = [];
                    //console.log(data.rows)
                    data.rows.map(function (request) {
                        console.log(request);
                        if (request.id == parseInt(req.params.rideId, 10)) {
                            //console.log(request.rideId);
                            rideRequest.push(request);
                        }
                    });
                    if (rideRequest.length == 0) {
                        return res.status(404).json({
                            message: "Ride Request not found"
                        });
                    } else {
                        return res.status(200).json({
                            rideRequest: rideRequest
                        });
                    }
                } else {
                    return next(err);
                }
            });
        }
    }, {
        key: "postRideRequest",
        value: function postRideRequest(req, res, next) {
            var text = "INSERT INTO rideRequests (accept, reject, userId, rideId, created_at) VALUES ($1, $2, $3, $4, Now()) RETURNING *";
            var values = [req.body.accept, req.body.reject, req.decoded.userId, req.params.rideId];
            _index2.default.query(text, values, function (err, data) {
                if (err) {
                    return res.status(400).json({
                        success: false,
                        message: 'Bad request! Ride does not exist.'
                    });
                };
                res.status(201).json({
                    success: 'true',
                    message: "Ride Request has been posted.",
                    data: data.rows[0]
                });
            });
        }
        // UPDATE rideRequests SET RIDEREQUEST = $1, UPDATED_AT = $2 VALUES ($1, Now()) WHERE ID= $3 AND ID= $4"

    }, {
        key: "putRideRequest",
        value: function putRideRequest(req, res, next) {
            var text = "SELECT * FROM rideRequests WHERE userId = $1 AND rideId = $2";
            var values = [req.decoded.userId, req.params.rideId];
            _index2.default.query(text, values, function (err, data) {
                if (data) {
                    if (!data) {
                        return res.status(404).json({
                            error: { form: "Ride does not exist" }
                        });
                    } else {
                        var _text = "UPDATE riderequests SET accept = $1, reject = $2, updated_at = Now() WHERE ID = $3";
                        var _values = [req.body.accept, req.body.reject, req.params.id];
                        console.log(req.body.accept, req.body.reject, req.params.id);
                        _index2.default.query(_text, _values, function (err, data) {
                            console.log(data.rows);
                            if (data) {
                                console.log(req.body.accept);
                                if (req.body.accept === 'true') {
                                    console.log('================================');
                                    return res.status(200).json({
                                        success: true,
                                        message: 'rides has been accepted.'
                                    });
                                } else {
                                    return res.status(200).json({
                                        success: true,
                                        message: 'rides have be rejected'
                                    });
                                }
                            } else {
                                //console.log(data)
                                return res.status(500).json(err.message);
                            }
                        });
                    }
                }
            });
        }
    }]);

    return RideRequestController;
}();

exports.default = RideRequestController;