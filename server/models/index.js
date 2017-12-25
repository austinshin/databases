//models
var db = require('../db/index.js');

module.exports = {
  messages: {
    get: function (callback) {
      //fetch all messages 
      //id, text, roomname, and username
      var queryStr = "SELECT messages.textID, messages.message, messages.createdAt, users.user, rooms.room FROM messages LEFT OUTER JOIN users ON (users.usersID = messages.usersID) LEFT OUTER JOIN rooms ON (rooms.roomsID = messages.roomsID) ORDER BY messages.textID desc"; 
      console.log('hello');
      //ORDER BY messages.createdAt desc';  
      //desc = descending (aka the newest one is at the top). asc = ascending (aka the oldest is at the top)
      db.query(queryStr, function(err, results) {
        if (err) throw err;
        callback(err, results); 
      });

    }, // a function which produces all the messages


    post: function (params, callback) {
      //create all messages
      var queryStr = 'INSERT INTO USERS (user) VALUE (?)';
      // you can apply a subquery to a query. the limit literally limits it to the first one we find.
      db.query(queryStr, params, function(err, results) {
        if (err) throw err;
        console.log('im here', params);
        console.log(results);
        callback(err, results); 
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      //get all users   
      var queryStr = 'SELECT * FROM users';
      db.query(queryStr, function(err, results) {
        if (err) throw err;
        callback(err, results); 
      });


    },
    post: function (paramas, callback) {
     
      var queryStr = 'INSERT INTO users (user) VALUES (?)';
      db.query(queryStr, params, function(err, results) {
        if (err) throw err;
        console.log(params);
        console.log(results);
        callback(err, results); 
      });
      //create all users 
      
    }
  }
};

