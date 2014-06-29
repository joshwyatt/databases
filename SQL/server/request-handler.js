var db = require("./db.js");
var url = require("url");
var utils = require("./server-utils.js");

exports.handleRequest = function(request, response) {

  console.log("Serving request type " + request.method + " for url " + request.url);

  var statusCode = 200;

  var headers = utils.headers;
  headers["Content-Type"] = "application/json";

  if( request.method === "OPTIONS" ){
    response.writeHead(statusCode, headers);
    response.end(JSON.stringify({}));
  }else if( request.method === "GET" ){
    console.log("GETTING");
    response.writeHead(statusCode, headers);
    var chats = db.selectAllChats();
    console.log('r-h.js, chats -----------------------> ', chats);
    response.write(JSON.stringify(chats));
    response.end();
  }else if( request.method === "POST" ){
    console.log("POSTING");
    response.writeHead(statusCode, headers);
    db.insertRoom();
    response.end(JSON.stringify({}));
  }

  response.end(JSON.stringify({}));
};
