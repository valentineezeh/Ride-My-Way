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
 * @class AllRides
 * @classdesc controller class to get all rides
 */

var AllRides = function () {
    function AllRides() {
        _classCallCheck(this, AllRides);
    }

    _createClass(AllRides, null, [{
        key: 'getAllRides',

        /**
        *@returns {object} data
        * @param {*} req
        * @param {*} res
        */
        value: function getAllRides(req, res) {
            res.status(200).json({
                error: false,
                rides: data
            });
        }
    }]);

    return AllRides;
}();

exports.default = AllRides;