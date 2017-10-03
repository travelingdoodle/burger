### Schema

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
    burger_name varchar (30) NOT NULL,
    devoured TINYINT NOT NULL,
    date TIMESTAMP,
	PRIMARY KEY (id)
);