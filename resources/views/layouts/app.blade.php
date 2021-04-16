<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Vuex Shopping Cart</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>
    <div id="app">
         <my-header></my-header>
         <div class="container">
            @yield('app_content')
         </div>
    </div>
<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
