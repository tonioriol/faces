// Define dependencies.

var express    = require("express");
var app        = express();
var fs = require('fs');
var busboy = require('connect-busboy');
app.use(busboy());

app.use(express.static('public'));


// Handling routes.
app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.post('/upload', function (req, res) {
	var fstream;
	req.pipe(req.busboy);
	req.busboy.on('file', function (fieldname, file, filename) {
		console.log("Uploading: " + filename);
		fstream = fs.createWriteStream(__dirname + '/files/' + filename);
		file.pipe(fstream);
		fstream.on('close', function () {
			res.end('success');
		});
	});
	//console.log(req);
	//res.end('fail.');
});

// Run the server.
app.listen(3000, function () {
	console.log('Working on port 3000');
});