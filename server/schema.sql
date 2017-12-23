DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'user'
-- 
-- ---

DROP TABLE IF EXISTS `users`;
    
CREATE TABLE `users` (
  `userID` INTEGER NOT NULL AUTO_INCREMENT,
  `user` MEDIUMTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`userID`)
);

-- ---
-- Table 'messages'
-- 
-- ---

DROP TABLE IF EXISTS `messages`;
    
CREATE TABLE `messages` (
  `textID` INTEGER NOT NULL AUTO_INCREMENT,
  `message` MEDIUMTEXT NULL DEFAULT NULL,
  `userID` INTEGER NOT NULL,
  PRIMARY KEY (`textID`),
KEY (`userID`)
);

-- ---
-- Table 'room'
-- 
-- ---

DROP TABLE IF EXISTS `room`;
    
CREATE TABLE `room` (
  `roomID` INTEGER NOT NULL AUTO_INCREMENT,
  `room` MEDIUMTEXT NULL DEFAULT NULL,
  `userID` INTEGER NOT NULL,
  PRIMARY KEY (`roomID`),
KEY (`userID`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `messages` ADD FOREIGN KEY (userID) REFERENCES `users` (`userID`);
ALTER TABLE `room` ADD FOREIGN KEY (userID) REFERENCES `users` (`userID`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `room` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `users` (`userID`,`user`) VALUES
-- ('','');
-- INSERT INTO `messages` (`textID`,`message`,`userID`) VALUES
-- ('','','');
-- INSERT INTO `room` (`roomID`,`room`,`userID`) VALUES
-- ('','','');

-- INSERT INTO users (user) VALUES ('Austin');
-- INSERT INTO messages (message, userID) VALUES ('Hello!', 1); 
-- Is there an easy way to keep track of the user ID?
--  SELECT userID from user 
--  WHERE user = 'Austin';  -> outputs 1
-- INSERT INTO room (room, userID) VALUES ('lobby', 1);

-- CREATE TABLE messages (
--    Describe your table here.

  
-- );

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/



