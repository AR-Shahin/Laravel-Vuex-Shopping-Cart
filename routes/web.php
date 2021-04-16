<?php

use Illuminate\Support\Facades\Route;

Route::get('/{name}', function () {
    return redirect('/');
})->where('name', '[A-Za-z]+');
Route::get('/', function () {
    return view('welcome');
});
