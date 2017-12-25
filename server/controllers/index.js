var models = require('../models');


var userFields = ['user'];
var messageFields = ['message', 'user', 'room'];

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, results) {
        if (err) { 
          console.error(err);
        }
        res.json(results);
      });

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      req.on('data', (data) => {
        data = JSON.parse(data);
        var params = [data.text, data.username, data.roomname];
        console.log(params);
        models.messages.post(params, function(err, results) {
          console.log('post params', params);
          res.sendStatus(201);
      });
      });
      }
    // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(err, results) {
        if (err) {
          console.error(err);
        }
        res.json(results);
      });
    },
    post: function (req, res) {
      req.on('data', function(data) {
        data = JSON.parse(data);
        var params = [data.username];
        models.users.post(params, function(err, results) {
          res.sendStatus(201);
        });
      });
    }
  }
};

