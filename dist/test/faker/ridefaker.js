'use strict';

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rideFaker = {
   ride: {
      destinationstartpoint: 'ccHub, Herbert Macaulay Road, Lagos Mainland',
      destinationstoppoint: 'Adetokunbo Ademola Street, Eti-Osa',
      departuretime: '06:00 PM'
   },
   ride2: {
      destinationstartpoint: 'Gwarinpa Estate, Abuja, Federal Capital Territory, Nigeria',
      destinationstoppoint: 'Danube Street, Abuja, Federal Capital Territory, Nigeria',
      departuretime: '05:00 PM'
   },
   ride3: {
      destinationstartpoint: 'Gwarinpa Estate, Abuja, Federal Capital Territory, Nigeria',
      destinationstoppoint: 'Danube Street, Abuja, Federal Capital Territory, Nigeria',
      departuretime: '05:00 PM'
   },
   ride4: {
      destinationstartpoint: '',
      destinationstoppoint: 'Danube Street, Abuja, Federal Capital Territory, Nigeria',
      departuretime: '05:00 PM'
   },
   ride5: {
      destinationstartpoint: 'Gwarinpa Estate, Abuja, Federal Capital Territory, Nigeria',
      destinationstoppoint: '',
      departuretime: '05:00 PM'
   },
   ride6: {
      destinationstartpoint: 'Gwarinpa Estate, Abuja, Federal Capital Territory, Nigeria',
      destinationstoppoint: " Danube Street, Abuja, Federal Capital Territory, Nigeria",
      departuretime: ''
   }
};