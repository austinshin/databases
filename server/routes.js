var controller = require('./controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/messages', controller.messages.get);

router.post('/messages', controller.messages.post);

router.get('/users', controller.users.get);

router.post('/users', controller.users.post);


module.exports = router;

SELECT messages.textID, messages.message, messages.createdAt, users.user, rooms.room
    FROM messages, users, rooms
    ON (users.usersID = messages.usersID) AND (rooms.roomsID = messages.roomsID)
    ORDER BY messages.createdAt desc;
