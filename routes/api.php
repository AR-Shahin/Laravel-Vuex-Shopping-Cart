<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

    Route::get('/products', 'ProductController@index');
    Route::get('/products/{product}', 'ProductController@show');

    Route::get('/cart', 'CartController@index');
    Route::post('/cart', 'CartController@store');
    Route::delete('/cart/{productId}', 'CartController@destroy');
    Route::delete('/cart', 'CartController@destroyAll');
