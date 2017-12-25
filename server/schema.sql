DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;
-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'users'
-- 
-- ---

DROP TABLE IF EXISTS `users`;
    
CREATE TABLE `users` (
  `usersID` INTEGER NOT NULL AUTO_INCREMENT,
  `user` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`usersID`),
  UNIQUE KEY (`user`)
);

-- ---
-- Table 'messages'
-- 
-- ---

DROP TABLE IF EXISTS `messages`;
    
CREATE TABLE `messages` (
  `textID` INTEGER NOT NULL AUTO_INCREMENT,
  `message` MEDIUMTEXT NULL DEFAULT NULL,
  `createdAt` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `usersID` INTEGER NOT NULL,
  `room` MEDIUMTEXT NOT NULL,
  `roomsID` INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (`textID`),
KEY (`usersID`),
KEY (`roomsID`)
);

-- ---
-- Table 'rooms'
-- 
-- ---

DROP TABLE IF EXISTS `rooms`;
    
CREATE TABLE `rooms` (
  `roomsID` INTEGER NOT NULL AUTO_INCREMENT,
  `room` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`roomsID`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `messages` ADD FOREIGN KEY (usersID) REFERENCES `users` (`usersID`);
ALTER TABLE `messages` ADD FOREIGN KEY (roomsID) REFERENCES `rooms` (`roomsID`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `rooms` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `users` (`usersID`,`user`) VALUES
-- ('','');
-- INSERT INTO `messages` (`textID`,`message`,`createdAt`,`usersID`,`roomsID`) VALUES
-- ('','','','','');
-- INSERT INTO `rooms` (`roomsID`,`room`) VALUES
-- ('','');



