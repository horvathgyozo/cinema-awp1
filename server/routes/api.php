<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\MovieController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get("/movies", [MovieController::class, "index"]);
Route::get("/movies/{movie}", [MovieController::class, "show"]);
Route::post("/movies", [MovieController::class, "store"]);

// Auth endpoints
Route::post("/register", [AuthController::class, "register"]);
Route::post("/login", [AuthController::class, "login"]);
Route::post("/logout", [AuthController::class, "logout"])->middleware('auth:sanctum');;
Route::get('/user', [AuthController::class, "user"])->middleware('auth:sanctum');
