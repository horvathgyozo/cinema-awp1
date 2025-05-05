<?php

use App\Http\Controllers\MovieController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get("/movies", [MovieController::class, "index"]);
Route::get("/movies/{movie}", [MovieController::class, "show"]);
Route::post("/movies", [MovieController::class, "store"]);

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
