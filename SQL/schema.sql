CREATE DATABASE chat;

USE chat;


CREATE TABLE users (
  username VARCHAR(20),
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT
);

CREATE TABLE rooms (
  roomname VARCHAR(20),
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT
  -- PRIMARY KEY (id)
);

CREATE TABLE messages (
  message TEXT,
  createdAt TIMESTAMP(6),
  username INT NOT NULL,
  roomname INT NOT NULL,
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  INDEX users_ind (username),
  FOREIGN KEY (username)
        REFERENCES users(id)
        ON DELETE CASCADE,
  INDEX rooms_ind (roomname),
  FOREIGN KEY (roomname)
        REFERENCES rooms(id)
        ON DELETE CASCADE
);
/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql < schema.sql
 *  to create the database and the tables.*/




