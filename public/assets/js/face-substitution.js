/*********** Setup of video/webcam and checking for webGL support *********/

var vid       = document.getElementById('videoel');
var overlay   = document.getElementById('overlay');
var overlayCC = overlay.getContext('2d');

var images = [
	{
		name: 'toni',
		mask: [[410.7543917553904, 257.01595678424235], [408.31294680967534, 302.81654947635786], [414.56941692648974, 345.8044222867453], [424.83288068782326, 389.0678672292469], [442.2767027797527, 425.22860802300147], [467.2458094287645, 454.99481558203723], [498.26283886613146, 477.67231048032545], [536.0944438238214, 486.50191099514825], [574.1073190674101, 478.584929281986], [605.9741275657799, 457.048329091162], [632.4888320660949, 428.4336600386534], [651.8828078522288, 393.1847377297625], [664.1580725467869, 350.1881647916554], [671.8276947189742, 307.01318895468137], [670.8346342294263, 260.52270946846346], [644.7401968817088, 229.66425481512144], [626.5476341273321, 219.8864680852939], [597.1551303155713, 219.97571935578824], [573.5193164913866, 224.51312335637627], [437.82039636101, 227.97505430020024], [456.04329683009144, 218.64039387987458], [485.3281111676467, 219.21857668293532], [508.8057810741426, 224.05925886975717], [454.8985772116057, 255.97630273391263], [478.32359495766576, 244.26753125230445], [503.11761846835657, 257.5930055242629], [477.9906291456919, 263.4916016600237], [478.81565949278985, 253.19849745335188], [626.2655693840386, 257.263696142061], [603.0348281337946, 245.1940582628444], [578.038462905403, 258.16448559957234], [603.1326038527606, 264.47124210779714], [602.5534881610513, 254.14166599972947], [540.6097781864565, 250.71282953833648], [512.3466087654322, 310.3472733639906], [500.2695629298797, 331.1912906408395], [510.8070491035394, 346.02856098627143], [539.1466252702538, 351.56247713881606], [567.5737021935042, 346.6076084114599], [578.4976416902925, 332.166946634947], [566.8608127302443, 310.9123626622882], [539.9592375841976, 290.94224080819737], [518.5256100796422, 337.6381356618421], [559.8688737692187, 337.94207387137584], [491.74469736687513, 397.5580856634191], [507.77425932926377, 388.3755713430154], [525.4888391857535, 384.5109310770531], [538.0346808209239, 387.3548602305858], [550.6121742269718, 384.7103983044078], [568.0577347895139, 388.8760884450091], [583.7606670073936, 398.3106614338718], [572.1674703563754, 409.98227832188485], [556.701152765054, 417.3005933931571], [537.284704577787, 419.6062853562876], [517.903445451332, 417.12716862744986], [502.5120357131175, 409.4559809656494], [515.2273682191054, 401.165389614457], [537.5174427289551, 403.89010552041725], [559.9174456189759, 401.3443109726362], [560.297603108263, 395.5592473480863], [537.8637060481325, 396.26626175419165], [515.5056694305902, 395.1925357168354], [539.3644625731608, 329.43887072307257], [464.3797514706702, 247.5128486984719], [493.14710550163636, 248.1135307026375], [491.141596002122, 261.1741137912304], [465.1833861398757, 260.90570533107604], [616.9739889827121, 248.66270407196018], [588.1120410902859, 248.84792745485922], [589.9494020803784, 261.94239753831346], [615.8836272154335, 262.084000550696]],
		path: '/assets/img/toni.jpg'
	},
	{
		name: 'pippen',
		mask: [[35.96303040428561,87.06503285729309],[35.23505211645965,109.00267196706785],[38.41608140063311,130.1354389156013],[43.468377063095865,151.0601101966374],[49.97826687835403,169.74748252697017],[61.64231754632449,185.57611842924092],[76.27204889489808,193.450318044],[95.71504719455073,193.837738533],[115.48452650967492,192.288056577],[134.38207879283462,177.2563664596324],[145.59477861655742,159.9223875220967],[151.75599838609247,141.63333028341452],[154.79817445772775,124.25249840202505],[156.05943331228403,100.1983960300495],[153.1547262255711,81.07725178061503],[139.17709269639764,72.03001732973645],[132.36975434377933,66.19562024572515],[121.75579654170967,65.97947226659173],[108.53718666785298,71.01751028532948],[43.495038222090116,76.32626387929116],[50.2620063829033,68.70922449238616],[62.83665839974446,68.63894005494622],[73.27420677145642,72.17214793249826],[50.73783192958758,87.30160323859698],[61.222568816747234,81.17091727194571],[75.22992562263269,86.06501698335731],[62.11360155083016,89.78666228376774],[62.2941484086916,84.87142168133295],[138.71498401811755,83.52679550887613],[124.43467298130217,78.41456443847699],[112.26106040250721,84.89886677958495],[125.25376975356856,87.2437686473941],[125.07357738147952,82.2735745750312],[90.63863843283332,81.46264118553266],[81.10313851196902,110.85752313190412],[74.80374320614206,120.4128464059567],[80.43388252561019,129.83519299551338],[90.95989022543023,128.3217200014432],[102.80423302460453,129.21202158414434],[111.69858372427815,120.85240012383258],[106.25699268485614,110.84178331072228],[90.95460359071615,101.00150823346496],[84.86209422433924,124.69840620372852],[98.14235430857423,124.65369144168815],[67.91636446171347,147.02473961575907],[76.24922881318531,142.17698126205664],[84.65883405460532,139.73538890760094],[90.87107139691658,142.58895629266587],[98.40097384408456,139.6277521237717],[109.36476060144629,143.57736249229146],[117.61555175241453,147.01423219324568],[110.55127215538435,153.45858258643028],[103.3786312406065,157.50254979416087],[92.4320608104312,158.26679905290106],[82.13554959793105,157.61967435233507],[75.5732979229965,155.49143085839486],[80.87392733195588,148.51545468039757],[91.99534340476283,149.07752124451127],[105.30333579818888,147.00339324051617],[105.66873157394632,147.79623948525904],[91.97611925202932,148.7659074765143],[80.63594530349147,148.5255213673177],[90.98515924238475,118.33772910196654],[54.734852156989035,83.13043235987774],[69.0729194720199,82.14404721350628],[68.85549643191587,88.29631269721365],[55.75949987787274,89.09494489859512],[132.33553550758847,79.68909258755347],[116.94181384576702,80.35342276665952],[118.32519780098168,86.36887219362282],[132.2516997280215,86.01672872876456]],
		path: '/assets/img/pippen.png'
	}
];

var currentMask = 0;

var videoReady  = false;
var imagesReady = false;

$('body').imagesLoaded(function () {
	// images have loaded
	imagesReady = true;
	enableStart()
});

function enableStart() {
	if (videoReady && imagesReady) {
		var startbutton      = document.getElementById('startbutton');
		startbutton.value    = "start";
		startbutton.disabled = null;
		//startVideo();
	}
}

$(window).load(function () {
	imagesReady = true;
	enableStart();
});

var insertAltVideo = function (video) {
	if (supports_video()) {
		if (supports_ogg_theora_video()) {
			video.src = "/assets/img/media/cap13_edit2.ogv";
		} else if (supports_h264_baseline_video()) {
			video.src = "/assets/img/media/cap13_edit2.mp4";
		} else {
			return false;
		}
		//video.play();
		return true;
	} else return false;
};

// check whether browser supports webGL
var webGLContext;
var webGLTestCanvas = document.createElement('canvas');
if (window.WebGLRenderingContext) {
	webGLContext = webGLTestCanvas.getContext('webgl') || webGLTestCanvas.getContext('experimental-webgl');
	if (!webGLContext || !webGLContext.getExtension('OES_texture_float')) {
		webGLContext = null;
	}
}
if (webGLContext == null) {
	alert("Your browser does not seem to support WebGL. Unfortunately this face mask example depends on WebGL, so you'll have to try it in another browser. :(");
}

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
window.URL             = window.URL || window.webkitURL || window.msURL || window.mozURL;

// check for camerasupport
if (navigator.getUserMedia) {
	// set up stream

	// chrome 19 shim
	var videoSelector = {video: true};
	if (window.navigator.appVersion.match(/Chrome\/(.*?) /)) {
		var chromeVersion = parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10);
		if (chromeVersion < 20) {
			videoSelector = "video";
		}
	}
	;

	navigator.getUserMedia(videoSelector, function (stream) {
		if (vid.mozCaptureStream) {
			vid.mozSrcObject = stream;
		} else {
			vid.src = (window.URL && window.URL.createObjectURL(stream)) || stream;
		}
		vid.play();
	}, function () {
		insertAltVideo(vid);
		alert("There was some problem trying to fetch video from your webcam, using a fallback video instead.");
	});
} else {
	insertAltVideo(vid);
	alert("Your browser does not seem to support getUserMedia, using a fallback video instead.");
}

vid.addEventListener('canplay', function () {
	videoReady = true;
	enableStart();
}, false);

/*********** Code for face substitution *********/

var animationRequest;
var positions;

var ctrack = new clm.tracker();
ctrack.init(pModel);

document.getElementById('selectmask').addEventListener('change', updateMask, false);

function updateMask(el) {
	currentMask   = parseInt(el.target.value, 10);
	var positions = ctrack.getCurrentPosition(vid);
	if (positions) {
		switchMasks(positions);
	}
}

function startVideo() {
	// start video
	vid.play();
	// start tracking
	ctrack.start(vid);
	// start drawing face grid
	drawGridLoop();

	//record.capture();
	nextFrame();
}

var fd = new faceDeformer();
fd.init(document.getElementById('webgl'));
var wc1 = document.getElementById('webgl').getContext('webgl') || document.getElementById('webgl').getContext('experimental-webgl');
wc1.clearColor(0, 0, 0, 0);

var fd2 = new faceDeformer();
fd2.init(document.getElementById('webgl2'));
var wc2 = document.getElementById('webgl2').getContext('webgl', {preserveDrawingBuffer: true}) || document.getElementById('webgl2').getContext('experimental-webgl', {preserveDrawingBuffer: true});
wc2.clearColor(0, 0, 0, 0);

// canvas for copying the warped face to
var newcanvas    = document.createElement('canvas');
newcanvas.width  = vid.width;
newcanvas.height = vid.height;
// canvas for copying videoframes to
var videocanvas    = document.createElement('canvas');
videocanvas.width  = vid.width;
videocanvas.height = vid.height;
// canvas for masking
var maskcanvas    = document.createElement('canvas');
maskcanvas.width  = vid.width;
maskcanvas.height = vid.height;
// create canvases for all the faces
var imageCanvases = {};

$('.masks').each(function (i, obj) {
	var elementId = obj.id;
	// copy the images to canvases
	var imageCanvas    = document.createElement('canvas');
	imageCanvas.width  = obj.width;
	imageCanvas.height = obj.height;
	imageCanvas.getContext('2d').drawImage(obj, 0, 0);
	imageCanvases[elementId] = imageCanvas;
});

var extended_vertices = [
	[0, 71, 72, 0],
	[0, 72, 1, 0],
	[1, 72, 73, 1],
	[1, 73, 2, 1],
	[2, 73, 74, 2],
	[2, 74, 3, 2],
	[3, 74, 75, 3],
	[3, 75, 4, 3],
	[4, 75, 76, 4],
	[4, 76, 5, 4],
	[5, 76, 77, 5],
	[5, 77, 6, 5],
	[6, 77, 78, 6],
	[6, 78, 7, 6],
	[7, 78, 79, 7],
	[7, 79, 8, 7],
	[8, 79, 80, 8],
	[8, 80, 9, 8],
	[9, 80, 81, 9],
	[9, 81, 10, 9],
	[10, 81, 82, 10],
	[10, 82, 11, 10],
	[11, 82, 83, 11],
	[11, 83, 12, 11],
	[12, 83, 84, 12],
	[12, 84, 13, 12],
	[13, 84, 85, 13],
	[13, 85, 14, 13],
	[14, 85, 86, 14],
	[14, 86, 15, 14],
	[15, 86, 87, 15],
	[15, 87, 16, 15],
	[16, 87, 88, 16],
	[16, 88, 17, 16],
	[17, 88, 89, 17],
	[17, 89, 18, 17],
	[18, 89, 90, 18],
	[18, 90, 22, 18],
	[22, 90, 21, 22],
	[21, 90, 91, 21],
	[21, 20, 91, 21],
	[20, 91, 92, 20],
	[20, 92, 19, 20],
	[19, 92, 93, 19],
	[19, 93, 71, 19],
	[19, 0, 71, 19],
	[44, 61, 56, 44],
	[60, 61, 56, 60],
	[60, 56, 57, 60],
	[60, 59, 57, 60],
	[58, 59, 57, 58],
	[58, 59, 50, 58]
];

function drawGridLoop() {
	// get position of face
	positions = ctrack.getCurrentPosition(vid);

	overlayCC.clearRect(0, 0, 640, 480);
	if (positions) {
		// draw current grid
		ctrack.draw(overlay);
	}
	// check whether mask has converged
	var pn = ctrack.getConvergence();
	if (pn < 0.4) {
		switchMasks(positions);
	} else {
		requestAnimFrame(drawGridLoop);
	}
}

function switchMasks(pos) {
	videocanvas.getContext('2d').drawImage(vid, 0, 0, videocanvas.width, videocanvas.height);

	// we need to extend the positions with new estimated points in order to get pixels immediately outside mask
	var newMaskPos = images[currentMask].mask.slice(0);
	var newFacePos = pos.slice(0);
	var extInd     = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 22, 21, 20, 19];
	var newp;
	for (var i = 0; i < 23; i++) {
		newp    = [];
		newp[0] = (newMaskPos[extInd[i]][0] * 1.3) - (newMaskPos[62][0] * 0.3);// short for ((newMaskPos[extInd[i]][0]-newMaskPos[62][0])*1.1)+newMaskPos[62][0]
		newp[1] = (newMaskPos[extInd[i]][1] * 1.3) - (newMaskPos[62][1] * 0.3);
		newMaskPos.push(newp);
		newp    = [];
		newp[0] = (newFacePos[extInd[i]][0] * 1.3) - (newFacePos[62][0] * 0.3);
		newp[1] = (newFacePos[extInd[i]][1] * 1.3) - (newFacePos[62][1] * 0.3);
		newFacePos.push(newp);
	}
	// also need to make new vertices incorporating area outside mask
	var newVertices = pModel.path.vertices.concat(extended_vertices);

	// deform the mask we want to use to face form
	fd2.load(imageCanvases[images[currentMask].name], newMaskPos, pModel, newVertices);
	fd2.draw(newFacePos);
	// and copy onto new canvas
	newcanvas.getContext('2d').drawImage(document.getElementById('webgl2'), 0, 0);

	// create masking
	var tempcoords = positions.slice(0, 18);
	tempcoords.push(positions[21]);
	tempcoords.push(positions[20]);
	tempcoords.push(positions[19]);
	createMasking(maskcanvas, tempcoords);

	/*document.body.appendChild(newcanvas);
	 document.body.appendChild(videocanvas);
	 document.body.appendChild(maskcanvas);
	 debugger;*/

	// do poisson blending
	Poisson.load(newcanvas, videocanvas, maskcanvas, function () {
		var result = Poisson.blend(30, 0, 0);
		// render to canvas
		newcanvas.getContext('2d').putImageData(result, 0, 0);
		// get mask

		fd.load(newcanvas, pos, pModel);
		requestAnimFrame(drawMaskLoop);
	});
}

function drawMaskLoop() {
	// get position of face
	positions = ctrack.getCurrentPosition();

	//for (var i = 0; i < positions.length; i++) {
	//	positions[i][1] += 1;
	//}

	overlayCC.clearRect(0, 0, 640, 480);
	if (positions) {
		// draw mask on top of face
		fd.draw(positions);
	}
	animationRequest = requestAnimFrame(drawMaskLoop);
}

function createMasking(canvas, modelpoints) {
	// fill canvas with black
	var cc       = canvas.getContext('2d');
	cc.fillStyle = "#000000";
	cc.fillRect(0, 0, canvas.width, canvas.height);
	cc.beginPath();
	cc.moveTo(modelpoints[0][0], modelpoints[0][1]);
	for (var i = 1; i < modelpoints.length; i++) {
		cc.lineTo(modelpoints[i][0], modelpoints[i][1]);
	}
	cc.lineTo(modelpoints[0][0], modelpoints[0][1]);
	cc.closePath();
	cc.fillStyle = "#ffffff";
	cc.fill();
}