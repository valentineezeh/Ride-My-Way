'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();
var secret = process.env.SECRET;

var Auth = {
    // function to authenticate to users with token
    verify: function verify(req, res, next) {
        var token = req.headers.authorization;
        if (token) {
            _jsonwebtoken2.default.verify(token, secret, function (err, decoded) {
                if (err) {
                    console.log(err);
                    return res.status(401).send({
                        message: 'You do not have permission to this page.'
                    });
                } else {
                    // if everything is good, save to request for use in other routes
                    req.decoded = decoded;
                    next();
                }
            });
        } else {
            return res.status(401).send({ message: 'No token provided' });
        }
    }
};
exports.default = Auth;