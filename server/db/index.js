var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


const connection = mysql.createConnection({
//  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'chat',
  // TODO password: '', no pw with root. make sure this is proper 
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  } else {
      console.log('listening...');  
      console.log('connected as id: ' + connection.threadId); 
    }
});


connection.query('SELECT 1', function(error, results, fields) {
  if (error) {
    throw error;
  }
  console.log('success!');
});

module.exports = connection;


//info to create connection taken from
//https://www.npmjs.com/package/mysql#establishing-connections
//you can do a connection.query?
