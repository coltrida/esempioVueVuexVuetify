<?php

use App\Http\Controllers\api\ProductController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});*/

Route::group(['middleware' => 'auth:sanctum'], function (){

});

/*Route::post('login', [UserController::class, 'login']);
Route::post('register', [UserController::class, 'register']);*/

Route::get('products', [ProductController::class, 'products']);
Route::post('addProduct', [ProductController::class, 'inserisci']);
