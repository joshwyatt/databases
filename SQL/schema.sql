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
  users_id INT NOT NULL,
  rooms_id INT NOT NULL,
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  INDEX users_ind (users_id),
  FOREIGN KEY (users_id)
        REFERENCES users(id)
        ON DELETE CASCADE,
  INDEX rooms_ind (rooms_id),
  FOREIGN KEY (rooms_id)
        REFERENCES rooms(id)
        ON DELETE CASCADE
);
/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql < schema.sql
 *  to create the database and the tables.*/




