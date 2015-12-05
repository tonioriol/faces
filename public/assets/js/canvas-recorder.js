/**
 * CanvasRecorder constructor function
 * @param canvas canvas to record
 * @param video video to record
 * @param fps the desired frames per second, leave empty for the default 15
 * @constructor
 */
function CanvasRecorder(canvas, video, fps) {
	//speak('clase CanvasRecorder construida');
	this.fps        = undefined != fps ? fps : 15;
	this.recorder   = new Whammy.Video(this.fps);
	this.canvas     = canvas;
	this.video      = video != undefined ? video : null;
	this._recording = true;
	this.rec        = false;
	this.blob       = null;
	this.time       = null;
}

CanvasRecorder.prototype = {
	constructor                 : CanvasRecorder,
	/**
	 * Starts the canvas recording
	 */
	capture                     : function () {
		this.rec = true;

		this.recorder.add(this._mergeCanvasAndVideoIfExists());

		if (this._recording) {
			requestAnimationFrame(this.capture.bind(this));
		}
	},
	_mergeCanvasAndVideoIfExists: function () {
		var canvas = document.createElement('canvas');

		if (null != this.video) {
			canvas.width  = this.video.width;
			canvas.height = this.video.height;
			canvas.getContext("2d").drawImage(this.video, 0, 0);
		} else {
			canvas.width  = this.canvas.width;
			canvas.height = this.canvas.height;
		}
		canvas.getContext("2d").drawImage(this.canvas, 0, 0);

		return canvas;
	},
	_finish                     : function () {
		var start = +new Date;
		this.blob = this.recorder.compile();
		var end   = +new Date;
		this.time = end - start;
	},
	/**
	 * Stops the canvas record and executes the callback when its done
	 * @param callback the callback t execute after stop the canvas recording
	 */
	stop                        : function (callback) {
		this._recording = false;
		this.rec = false;
		this._finish();
		callback(this.blob);
	}
};