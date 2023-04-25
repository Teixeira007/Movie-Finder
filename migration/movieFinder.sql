CREATE DATABASE MOVIEFINDER;

USE MOVIEFINDER;

CREATE TABLE users (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at DATETIME DEFAULT NOW(),
  PRIMARY KEY (id)
);

CREATE TABLE favoriteMovies(
	id INT(11) NOT NULL auto_increment,
    idMovie INT(20) NOT NULL,
    idUser INT(11) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (idUser) REFERENCES users(id)
);

CREATE TABLE interestList(
	id INT(11) NOT NULL auto_increment,
    idMovie INT(20) NOT NULL,
    idUser INT(11) NOT NULL, 
    PRIMARY KEY (id),
    FOREIGN KEY (idUser) REFERENCES users(id)
);

CREATE TABLE rating(
	id INT(11) NOT NULL auto_increment,
    idMovie INT(20) NOT NULL,
    idUser INT(11) NOT NULL,
    note NUMERIC NOT NULL,
    
    PRIMARY KEY (id),
    FOREIGN KEY (idUser) REFERENCES users(id)
);
