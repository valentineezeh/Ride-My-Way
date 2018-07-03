'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SignUpValidation = function () {
  function SignUpValidation() {
    _classCallCheck(this, SignUpValidation);
  }

  _createClass(SignUpValidation, null, [{
    key: 'signUp',
    value: function signUp(req, res, next) {
      var errors = [];
      if (req.body.email == undefined) {
        errors.push('Email is required');
        return res.status(400).send({
          status: 'Error',
          message: errors
        });
      }
      if (!_validator2.default.isEmail(req.body.email.toString())) {
        errors.push('Valid Email is required');
        return res.status(400).send({
          status: 'Error',
          message: errors
        });
      }
      if (!_validator2.default.isAlpha(req.body.firstname.toString())) {
        errors.push('First name must be alphabetic');
        return res.status(400).send({
          status: 'Error',
          message: errors
        });
      }
      if (req.body.firstname === '') {
        errors.push('First name cannot be empty');
        return res.status(400).send({
          status: 'Error',
          message: errors
        });
      }
      if (req.body.firstname.length <= 1) {
        errors.push('Length of the first name should be greater than 1 character..');
        return res.status(400).send({
          status: 'Error',
          message: errors
        });
      }
      if (!_validator2.default.isAlpha(req.body.lastname.toString())) {
        errors.push('First name must be alphabetic');
        return res.status(400).send({
          status: 'Error',
          message: errors
        });
      }
      if (req.body.lastname == '') {
        errors.push('Last name cannot be empty');
        return res.status(400).send({
          status: 'Error',
          message: errors
        });
      }
      if (req.body.lastname.length <= 1) {
        errors.push('Length of the last name should be greater than 1 character..');
        return res.status(400).send({
          status: 'Error',
          message: errors
        });
      }
      if (req.body.about === '') {
        errors.push('About text cannot be empty');
        return res.status(400).send({
          status: 'Error',
          message: errors
        });
      }
      if (req.body.about.length <= 6) {
        errors.push('Length of the about should be greater than 1 character..');
        return res.status(400).send({
          status: 'Error',
          message: errors
        });
      }
      if (req.body.password == undefined) {
        errors.push('Valid Password required...');
        return res.status(400).send({
          status: 'Error',
          message: errors
        });
      }
      if (req.body.password == '') {
        errors.push('Password should not be empty');
        return res.status(400).send({
          status: 'Error',
          message: errors
        });
      }
      if (req.body.password.length <= 6) {
        errors.push('Password must exceed 6 characters..');
        return res.status(400).send({
          status: 'Errors',
          message: errors
        });
      }
      if (req.body.password != req.body.confirmPassword) {
        errors.push('Mismatch Password');
        return res.status(400).send({
          status: 'Error',
          message: errors
        });
      }
      if (errors.length > 0) {
        return res.status(400).send({
          status: 'Error',
          message: errors
        });
      }

      return next();
      //console.log(errors)
    }
  }]);

  return SignUpValidation;
}();

exports.default = SignUpValidation;