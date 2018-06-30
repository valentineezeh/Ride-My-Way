const {Pool} = require('pg');

const client = new Pool({
    user: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'ridemyway',
    password: 'Sagemode2',
  })
  
  client.connect((err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Connected');
    }
  });
  
module.exports = client;