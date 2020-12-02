<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <link href="{{ asset('/css/app.css')}}" rel="stylesheet">
        <link href="{{ asset('/css/main.css')}}" rel="stylesheet">
        
        <style>
            body {
                font-family: 'Nunito';
            }
            input::-webkit-outer-spin-button,
            input::-webkit-inner-spin-button {
                /* display: none; <- Crashes Chrome on hover */
                -webkit-appearance: none;
                margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
            }

            input[type=number] {
                -moz-appearance:textfield; /* Firefox */
            }
        </style>
    </head>
    <body class="antialiased">
        <div id="app">
            @yield('header')

            @yield('content')

            @yield('footer')
        </div>
        <script defer src="{{ mix('/js/app.js') }}"></script>
    </body>
</html>
    