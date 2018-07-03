'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SignInValidation = function () {
    function SignInValidation() {
        _classCallCheck(this, SignInValidation);
    }

    _createClass(SignInValidation, null, [{
        key: 'signIn',
        value: function signIn(req, res, next) {
            var errors = [];
            if (req.body.email == '') {
                errors.push('Email should not be empty');
                return res.status(400).send({
                    status: 'Error',
                    message: errors
                });
            }
            if (!_validator2.default.isEmail(req.body.email)) {
                errors.push('Email must be valid..');
                return res.status(400).send({
                    status: 'Error',
                    message: errors
                });
            }
            if (req.body.email == undefined) {
                errors.push('Email is required..');
                return res.status(400).send({
                    status: 'Error',
                    message: errors
                });
            }
            if (req.body.password == undefined) {
                errors.push('Password is required...');
                return res.status(400).send({
                    status: 'Error',
                    message: errors
                });
            }
            if (req.body.password == '') {
                errors.push('Password should not be empty.');
                return res.status(400).send({
                    status: 'Error',
                    message: errors
                });
            }
            return next();
        }
    }]);

    return SignInValidation;
}();

exports.default = SignInValidation;