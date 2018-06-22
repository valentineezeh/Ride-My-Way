'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PostRideValidator = function () {
    function PostRideValidator() {
        _classCallCheck(this, PostRideValidator);
    }

    _createClass(PostRideValidator, null, [{
        key: 'postRideValidator',
        value: function postRideValidator(req, res, next) {
            if (req.body.name === undefined || req.body.name.toString().trim() === '') {
                return res.status(400).send({
                    valid: false,
                    message: 'Name should not be empty...'
                });
            }
            if (req.body.from === undefined || req.body.from.toString().trim() === '') {
                return res.status(400).send({
                    valid: false,
                    message: 'Destination start point should not be empty...'
                });
            }
            if (req.body.to === undefined || req.body.to.toString().trim() === '') {
                return res.status(400).send({
                    valid: false,
                    message: 'Destination stop point should not be empty...'
                });
            }
            if (req.body.departure_time === undefined || req.body.departure_time.toString().trim() === '') {
                return res.status(400).send({
                    valid: false,
                    message: 'Destination time should not be empty...'
                });
            }
            next();
        }
    }]);

    return PostRideValidator;
}();

exports.default = PostRideValidator;