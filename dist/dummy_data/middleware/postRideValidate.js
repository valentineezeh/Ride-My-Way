'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PostRideValidator = function () {
    function PostRideValidator() {
        _classCallCheck(this, PostRideValidator);
    }

    _createClass(PostRideValidator, null, [{
        key: 'postRideValidator',
        value: function postRideValidator(req, res) {
            if (!_validator2.default.isAlpha(req.body.name.toString())) {
                return res.send({
                    valid: false,
                    status: 400,
                    message: 'Name should be alphabetic..'
                });
            }
            if (req.body.name === undefined || req.body.name.toString().trim() === '') {
                return res.send({
                    valid: false,
                    status: 400,
                    message: 'Name should not be empty...'
                });
            }
            if (req.body.from === undefined || req.body.from.toString().trim() === '') {
                return res.send({
                    valid: false,
                    status: 400,
                    message: 'Destination start point should not be empty...'
                });
            }
            if (req.body.to === undefined || req.body.to.toString().trim() === '') {
                return res.send({
                    valid: false,
                    status: 400,
                    message: 'Destination stop point should not be empty...'
                });
            }
            if (req.body.departure_time === undefined || req.body.departure_time.toString().trim() === '') {
                return res.send({
                    valid: false,
                    status: 400,
                    message: 'Destination time should not be empty...'
                });
            }
        }
    }]);

    return PostRideValidator;
}();

exports.default = PostRideValidator;