// Define dependencies.
var express = require('express');
var app     = express();
var fs      = require('fs');
var busboy  = require('connect-busboy');
var exec    = require('child_process').exec;

app.use(busboy());
app.use(express.static('public'));

// Handling routes.
app.get('/', function (req, res) {
	res.sendFile(__dirname + '/public/index.html');
});

app.get('/emotion', function (req, res) {
	res.sendFile(__dirname + '/public/emotion.html');
});

app.post('/upload', function (req, res) {
	var fstream;
	req.pipe(req.busboy);
	req.busboy.on('file', function (fieldname, file, filename) {
		console.log('Uploading: ' + filename);
		fstream = fs.createWriteStream(__dirname + '/files/' + filename);
		file.pipe(fstream);
		fstream.on('close', function () {
			console.log('Upload: ' + filename + ' Done!');

			// find out .mp4 file name
			var resFilename = filename.replace('.webm', '.mp4');

			// transcode .webm to .mp4 with ffmpeg
			exec('ffmpeg -i ' + __dirname + '/files/' + filename + ' -qscale 0 ' + __dirname + '/files/' + resFilename, function (error, stdout, stderr) {
				console.log('ffmpeg "' + filename + '" transcoding done!');

				exec('rm ' + __dirname + '/files/' + filename, function () {
					console.log('File "' + filename + '" deleted!');
				});
			});


			res.end('success');
		});
	});
});

// Run the server.
app.listen(4000, function () {
	console.log('Working on port 4000');
});