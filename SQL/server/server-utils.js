var utils = {};

utils.headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};

utils.sendResponse = function(res, data, statusCode) {
  statusCode = statusCode || 200;
  response.writeHead(statusCode, this.headers);
  response.end(JSON.stringify(data));
};

return module.exports = utils;
