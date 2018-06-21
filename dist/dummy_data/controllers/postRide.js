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
 * @class PostRide
 * @classdesc controller class that post a ride
 */

var PostRide = function () {
    function PostRide() {
        _classCallCheck(this, PostRide);
    }

    _createClass(PostRide, null, [{
        key: 'newRide',

        /**
        *@returns {object} data
        * @param {*} req
        * @param {*} res
        */
        value: function newRide(req, res) {
            data.push({
                id: data.length + 1,
                name: req.body.name,
                from: req.body.from,
                to: req.body.to,
                departure_time: req.body.departure_time,
                ride_request: []
            });
            res.status(201).json({
                message: 'Success!! Ride has been Created. ',
                rides: data

            });
        }
    }]);

    return PostRide;
}();

exports.default = PostRide;