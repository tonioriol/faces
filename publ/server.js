var connect = require('connect');
var serveStatic = require('serve-static');
var min = 8000, max = 9000;
var port = Math.floor(Math.random() * (max - min + 1)) + min;
port = 4000;
connect().use(serveStatic(__dirname)).listen(port);
console.log('http://localhost:' + port);