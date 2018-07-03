'use strict';

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require('pg'),
    Pool = _require.Pool;

_dotenv2.default.config();

var client = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  port: process.env.DATABASEPORT,
  database: process.env.DATABASE,
  password: process.env.PASSWORD
});

client.connect(function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log('Connected');
  }
});

module.exports = client;