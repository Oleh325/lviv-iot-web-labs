CREATE SCHEMA IF NOT EXISTS `cats`;
USE `cats`;

DROP TABLE IF EXISTS `cat`;

CREATE TABLE `cat` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NOT NULL,
    `description` VARCHAR(1000) NULL DEFAULT NULL,
    `cuteness` INT NOT NULL,
    `weight` DOUBLE NOT NULL,
    `price` INT NOT NULL,
    `color` VARCHAR(45) NOT NULL,
    `options` VARCHAR(200) NOT NULL,
    `imagesrc` VARCHAR(200) NULL DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB;