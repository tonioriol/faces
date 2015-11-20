var elixir = require('laravel-elixir');

elixir(function (mix) {

	var sections = [
		'index'
	];

	for (var i = 0; i < sections.length; ++i) {
		mix.less([
			sections[i] + '.less'
		], 'public/assets/css/' + sections[i] + '.less');

		mix.browserify([
			sections[i] + '.js'
		], 'public/assets/js/' + sections[i] + '.js');
	}

	mix.browserSync({
		proxy: 'localhost:4000'
	});
});