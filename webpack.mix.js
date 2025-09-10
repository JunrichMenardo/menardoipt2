const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js') // your React JS
   .react() // enables JSX compilation
   .sass('resources/sass/menardo.scss', 'public/css') // your menardo.scss
   .sass('resources/sass/app.scss', 'public/css'); // optional extra SCSS
