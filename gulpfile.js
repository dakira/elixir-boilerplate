var elixir = require('laravel-elixir');

// assets are assumed to be in resources/assets/(sass/less/js)
// public targets are assumed to be public/(css/js)
// to change, use this:
// elixir.config.assetsPath = './assets'
// elixir.config.publicPath = './web'
// for more options see node_modules/laravel-elixir/Config.js

elixir(function(mix) {
    mix.sass('app.scss')
        .browserify('app.js')
        .copy('node_modules/font-awesome/fonts', 'public/fonts')
    ;

    // assumes public folder is served on a local webserver at the
    // adress specified, e.g.
    // php -S localhost:8000 -t public
    mix.browserSync({
        proxy: 'localhost:8000',
        notify: false
    });
});
