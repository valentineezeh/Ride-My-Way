import dotenv from 'dotenv';


dotenv.config();

const {Pool} = require('pg');

  const client = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    port: process.env.DATABASEPORT,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    dialect: 'postgres'
  })
  
  client.connect((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Connected');
    }
  });
  
module.exports = client;
