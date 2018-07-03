'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_dotenv2.default.config();

var secret = process.env.SECRET;

var UserController = function () {
    function UserController() {
        _classCallCheck(this, UserController);
    }

    _createClass(UserController, null, [{
        key: 'signUp',
        value: function signUp(req, res, next) {
            var query = 'INSERT INTO users(firstname, lastname, about, email, password, confirmpassword, created_at) VALUES($1, $2, $3, $4, $5, $6, Now() ) RETURNING *';
            var values = [req.body.firstname, req.body.lastname, req.body.about, req.body.email, _bcrypt2.default.hashSync(req.body.password, 10), _bcrypt2.default.hashSync(req.body.confirmPassword, 10)];
            _db2.default.query(query, values, function (err, data) {
                if (err) return res.status(409).send({
                    success: false,
                    message: 'User already exist.'
                });else {
                    var token = _jsonwebtoken2.default.sign({
                        id: data.rows.id
                    }, secret, { expiresIn: 1440 });
                    res.status(201).json({
                        message: 'User registration successful',
                        data: data.rows[0],
                        token: token
                    });
                }
            });
        }
    }, {
        key: 'signInUser',
        value: function signInUser(req, res, next) {
            var text = "SELECT * FROM users WHERE email = $1";
            var values = [req.body.email];
            // console.log("meme")
            _db2.default.query(text, values, function (err, data) {
                if (data) {
                    if (!data) {
                        return res.status(404).json({
                            success: false,
                            message: 'Authentication failed. User not found'
                        });
                    } else if (data) {
                        //console.log(data.rows.password)
                        var dataPassword = '';
                        var dataEmail = '';
                        var dataUserId = 0;

                        //console.log(data.rows)
                        data.rows.map(function (user) {
                            //console.log(user)
                            console.log(user.id);
                            dataUserId += user.id;
                            dataEmail += user.email;
                            //console.log(datauserIdNum)
                        });

                        //console.log(dataUserId)
                        data.rows.map(function (user) {
                            if (req.body.password == user.password) {
                                dataPassword += user.password;
                            }
                        });
                        if (dataPassword !== req.body.password) {
                            //console.log(dataPassword)
                            res.status(400).json({
                                success: false,
                                message: 'Authentication failed, wrong Password'
                            });
                        } else {
                            _bcrypt2.default.compare(req.body.password, dataPassword, function (err, response) {
                                if (err) {
                                    return res.status(500).json({
                                        error: err.message
                                    });
                                } else {
                                    var token = _jsonwebtoken2.default.sign({
                                        email: dataEmail,
                                        userId: dataUserId
                                    }, secret, { expiresIn: 1440 });
                                    return res.status(200).json({
                                        success: true,
                                        message: "Welcome User You are now Logged In",
                                        token: token
                                    });
                                }
                            });
                        }
                    }
                } else {
                    return next(err);
                }
            });
        }
    }]);

    return UserController;
}();

module.exports = UserController;