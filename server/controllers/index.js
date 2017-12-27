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
      module.exports.users.post(req, res);
      var params;
      req.on('data', (data) => {
        console.log(data);
        let parsedData = JSON.parse(data);

        params = [parsedData.text, parsedData.username, parsedData.roomname];
        console.log(parsedData);
        console.log(params);
        models.messages.post(params, function(err, result) {
          // data.results = result;
          res.sendStatus(201);
          // res.writeHead(201, {'Content-Type': 'application/json'});
          // res.write(JSON.stringify({results: result}));
          // res.end();
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
      var params;
      req.on('data', function(data) {
        let parsedData = JSON.parse(data);
        params = [parsedData.username];
        models.users.post(params, function(err, result) {
          // res.sendStatus(201);
        });
      });
    }
  }
};
