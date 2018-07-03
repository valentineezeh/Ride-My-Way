'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PostValidation = function () {
    function PostValidation() {
        _classCallCheck(this, PostValidation);
    }

    _createClass(PostValidation, null, [{
        key: 'rideValidator',
        value: function rideValidator(req, res, next) {
            var error = [];
            if (req.body.destinationstartpoint === undefined) {
                return res.status(400).send({
                    message: 'destination start point is required'
                });
            }
            if (req.body.destinationstoppoint === undefined) {
                return res.status(400).send({
                    message: 'destination stop point is required'
                });
            }
            if (req.body.departuretime === undefined) {
                return res.status(400).send({
                    message: 'departure time is required'
                });
            }
            if (req.body.destinationstartpoint.toString().trim() === '') {
                error.push('destination start point is required...');
            }
            if (req.body.destinationstoppoint.toString().trim() === '') {
                error.push('destination stop point is required.');
            }
            if (req.body.departuretime.toString().trim() === '') {
                error.push('departure time is required.');
            }
            if (error.length > 0) {
                return res.status(400).send({
                    message: error
                });
            }
            return next();
        }
    }]);

    return PostValidation;
}();

exports.default = PostValidation;