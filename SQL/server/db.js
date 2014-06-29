var mysql = require('mysql');

var db = {};

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

  var queryString = "select * from rooms";

  connection.query(queryString, function(err, rows) {
    if(err) { throw err; }
    console.log("ROWS LENGTH: ", rows.length);
    for(var i = 0; i < rows.length; i++) {
      console.log(rows[i]);
    }
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




module.exports = db;
