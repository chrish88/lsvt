const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .js('resources/js/Pages/Skillshop/form.vue', 'public/js/Pages/Skillshop')
    .js('resources/js/Pages/Skillshop/index.vue', 'public/js/Pages/Skillshop')


.postCss('resources/css/app.css', 'public/css', [
        require('tailwindcss'),
    ])
    .postCss('resources/css/main.css', 'public/css')