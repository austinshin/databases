var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


const connection = mysql.createConnection({
  host: 'http://127.0.0.1:3000/classes/users',
  user: 'root',
  // TODO password: '', no pw with root. make sure this is proper 
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id: ' + connection.threadId);
});

//info to create connection taken from
//https://www.npmjs.com/package/mysql#establishing-connections