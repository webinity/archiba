let mix = require('laravel-mix');


mix.js('resources/js/app.js', 'public/assets/js')
    .sass('resources/scss/styles.scss', 'public/assets/css');