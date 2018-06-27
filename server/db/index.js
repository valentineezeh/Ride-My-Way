const {Client} = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'ridemyway',
    password: 'Sagemode2',
  })
  client.connect()

  client.query('SELECT NOW()', (err, res) => {
    //console.log(err, res)
    client.end()
  })


module.exports = client;