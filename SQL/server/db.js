var mysql = require('mysql');

var db = {};

var Chat = function(roomname, username, text) {
  this.roomname = roomname;
  this.username = username;
  this.text = text;
};

var Chats = function(chatsArr) {
  this.results = [];
  this.addChatsToData = function() {
    for(var i = 0; i < chatsArr.length; i++) {
      this.results.push(chatsArr[i]);
    }
  };
};

// var parseMessages = function(messages) {

//   for(var i)
// };

db.createSQLConnection = function() {
  var connection = mysql.createConnection({
    database : 'chat',
    user : 'root',
    password : 'i'
  });
  return connection;
};

db.selectAllChats = function() {
  var connection = this.createSQLConnection();
  // console.log("Def Got here");
  connection.connect();
  // console.log("Got here");

  var queryString = "select * from messages";

  connection.query(queryString, function(err, messages) {
    if(err) { throw err; }
    console.log("ROWS LENGTH: ", messages.length);
    return messages;
  });
  // console.log("Got here...?");
};

db.insertRoom = function() {
  var connection = this.createSQLConnection();
  connection.connect();

  var queryString = "insert into rooms (roomname) values ('Dorothy')";

  connection.query(queryString, function(err, results) {
    console.log("INSIDE insert room");
    if(err) { throw err; }
    console.log(results);
  });
};

// db.insertChats = function() {

// };



module.exports = db;
