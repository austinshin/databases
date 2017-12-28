DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `usersID` INTEGER NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`usersID`),
  UNIQUE KEY (`username`)
);


DROP TABLE IF EXISTS `messages`;

CREATE TABLE `messages` (
  `textID` INTEGER NOT NULL AUTO_INCREMENT,
  `text` MEDIUMTEXT NULL DEFAULT NULL,
  `createdAt` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `usersID` INTEGER NOT NULL,
  `roomname` MEDIUMTEXT NOT NULL,
  PRIMARY KEY (`textID`),
KEY (`usersID`)
);


ALTER TABLE `messages` ADD FOREIGN KEY (usersID) REFERENCES `users` (`usersID`);

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
