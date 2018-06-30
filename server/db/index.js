import dotenv from 'dotenv';

const {Pool} = require('pg');

dotenv.config();

const client = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    port: process.env.DATABASEPORT,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
  })
  
  client.connect((err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Connected');
    }
  });
  
module.exports = client;