'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _apiRoutes = require('./routes/apiRoutes.js');

var _apiRoutes2 = _interopRequireDefault(_apiRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Call express from a variable
var app = (0, _express2.default)();

// Setting Configurations
app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.text());
app.use(_bodyParser2.default.json({ type: 'application/json' }));
app.use(_bodyParser2.default.urlencoded({ extended: false }));

// Connect all routes to application
app.use('/api/v1', _apiRoutes2.default);

var port = +process.env.PORT || 3000;
app.set('port', port);

// Turn on the server
app.listen(port, function () {
    console.log('The server is listening on port ' + port);
});

exports.default = app;