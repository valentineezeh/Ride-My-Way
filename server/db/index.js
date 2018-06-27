const postgresPromise = require('pg-promise');
const promise = require('bluebird');

const dbObject = {
    initOptions: {
        promiseLib: promise
    },
    connection: {
        host: 'localhost',
        port: 5432,
        database: 'rideMyWay',
        user: 'postgres',
        password: 'Sagemode2',
    }
};
const pgp = postgresPromise(dbObject.initOptions);
const db = pgp(dbObject.connection)

module.exports = db;