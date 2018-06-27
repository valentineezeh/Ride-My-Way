'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SignUp = function () {
    function SignUp() {
        _classCallCheck(this, SignUp);
    }

    _createClass(SignUp, null, [{
        key: 'createUser',
        value: function createUser(req, res, next) {
            _db2.default.none('insert into users(firstname, lastname, sex, email, password, confirmPassword)' + 'values(${firstname}, ${lastname}, ${sex}, ${email}, ${password}, ${confirmPassword})', req.body).then(function () {
                res.status(201).json({
                    status: 'Success!!',
                    message: 'New User successfully created.'
                });
            }).catch(function (err) {
                return next(err);
            });
        }
    }]);

    return SignUp;
}();

module.exports = SignUp;