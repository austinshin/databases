//models
var db = require('../db/index.js');

module.exports = {
  messages: {
    get: function (callback) {
      //fetch all messages
      //id, text, roomname, and usernamevar queryStr = "SELECT messages.textID, messages.message, users.user, rooms.room FROM messages LEFT OUTER JOIN users ON (users.usersID = messages.usersID) ORDER BY messages.createdAt desc";
      var queryStr = 'SELECT messages.textID, messages.text, users.username, messages.roomname FROM messages LEFT OUTER JOIN users ON (users.usersID = messages.usersID) ORDER BY messages.createdAt desc';
      //desc = descending (aka the newest one is at the top). asc = ascending (aka the oldest is at the top)
      db.query(queryStr, function(err, results) {
        if (err) {
          console.error(err);
        }
        callback(err, results);
      });

    }, // a function which produces all the messages


    post: function (params, callback) {
      //create all messages
      // (text, user, room)
      // textID, message, createdAt, usersID, room

      var queryStr = 'INSERT INTO MESSAGES (text, usersID, roomname) VALUES (?, (SELECT users.usersID FROM users WHERE users.username = ? limit 1), ?)';
      // you can apply a subquery to a query. the limit literally limits it to the first one we find.
      db.query(queryStr, params, function(err, results) {
        if (err) {
          console.error(err);
        }
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
        console.log('123');
        if (err) {
          console.error(err);
        }
        callback(err, results);
      });


    },
    post: function (params, callback) {

      var queryStr = 'INSERT INTO users (username) VALUES (?)';
      db.query(queryStr, params, function(err, results) {
        if (err) {
          console.error(err);
        }
        console.log('sup');
        console.log(params);
        console.log(results);
        callback(err, results);
      });
      //create all users

    }
  }
};
