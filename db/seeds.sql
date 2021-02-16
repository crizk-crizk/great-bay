CREATE DATABASE greatbay_db;

USE greatbay_db;

CREATE TABLE items(
  id INTEGER NOT NULL AUTO_INCREMENT,

  items VARCHAR(30) NOT NULL,

  category VARCHAR(30) NOT NULL,
  
  bid INT,

  PRIMARY KEY (id)
);