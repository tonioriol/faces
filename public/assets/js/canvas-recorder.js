function CanvasRecorder(canvas, fps) {
	this.fps     = undefined != fps ? fps : 15;
	this.video   = new Whammy.Video(this.fps);
	this.canvas  = canvas;
	this._stop   = false;
	this.result  = null;
}

CanvasRecorder.prototype = {
	constructor: CanvasRecorder,
	capture    : function (callback) {
		this.video.add(this.canvas);
		if (!this._stop) {
			requestAnimationFrame(this.capture.bind(this));
		} else {
			requestAnimationFrame(this._finish.bind(this, callback));
		}
	},
	_finish    : function (callback) {
		var start_time = +new Date;
		var output     = this.video.compile();
		var end_time   = +new Date;
		var url        = (window.webkitURL || window.URL).createObjectURL(output);

		this.result = {
			output          : output,
			url             : url,
			compilation_time: (end_time - start_time),
			kb              : Math.ceil(output.size / 1024)
		};

		document.getElementById('rec-vid').src = url;
		document.getElementById('rec-down').href = url;

		callback(this.result);
	},
	stop       : function (callback) {
		this._stop = true;
		this.capture(callback);
	}
};