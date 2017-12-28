var db = require('../db');
module.exports = {
  messages: {
    get: function(req, res){
      db.Message.findAll({include: [db.User]})
      .then(function(results) {
        res.json(results);
      })
      .catch(function(err) {
        console.error(err);
        db.close();
      });
    },

    post: function(req, res){
      req.on('data', function(data) {
        let parsedData = JSON.parse(data);
        let params = [parsedData.text, parsedData.username, parsedData.roomname];
        db.User.findOrCreate({where: {username: parsedData.username}})
        .spread(function(user, created) {
          db.Message.create({
            userid: user.get('id'),
            text: parsedData.text,
            roomname: parsedData.roomname
          })
          .then(function(message) {
            res.sendStatus(201);
          })
          .catch(function(err) {
            console.error(err);
            db.close();
          });
        });
        //if user doesn't exist find or create it
        //create message after.
      });

    }
  },

  users: {
    get: function(req, res){
      db.User.findAll()
      .then(function(results) {
        res.json(results);
      })
      .catch(function(err) {
        console.error(err);
        db.close();
      });
    },

    post: function(req, res) {
      req.on('data', function(data) {
        let parsedData = JSON.parse(data);
        db.User.findOrCreate({where: {username: parsedData.username}})
        .spread(function(user, created) {
          res.sendStatus(created ? 201 : 200);
        });
      });
    }
  }
};
