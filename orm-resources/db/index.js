var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'root', '');

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const User = db.define('User', {
  username: Sequelize.STRING
});

const Message = db.define('Message', {
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});

Message.belongsTo(User);
User.hasMany(Message);

User.sync();
Message.sync();

exports.User = User;
exports.Message = Message;
