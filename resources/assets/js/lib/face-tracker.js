export default class FaceTracker {

	video;
	overlay;
	overlayCC;

	constructor(videoId, overlayId) {
		this.recorder  = document.getElementById(videoId);
		this.overlay   = document.getElementById(overlayId);
		this.overlayCC = overlay.getContext('2d');
		this.enableCameraStream();
	}

	enableCameraStream(errorCallback) {

		navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
		window.URL             = window.URL || window.webkitURL || window.msURL || window.mozURL;

		navigator.getUserMedia({recorder: true}, function (stream) {

			this.recorder.src = (window.URL && window.URL.createObjectURL(stream)) || stream;
			this.recorder.play();

		}.bind(this), function (e) {
			console.log('Rejected', e);
		}.bind(this));
	}
}