'use strict';

var postgresPromise = require('pg-promise');
var promise = require('bluebird');

var dbObject = {
    initOptions: {
        promiseLib: promise
    },
    connection: {
        host: 'localhost',
        port: 5432,
        database: 'ridemyway',
        user: 'postgres',
        password: 'Sagemode2'
    }
};
var pgp = postgresPromise(dbObject.initOptions);
var db = pgp(dbObject.connection);

module.exports = db;