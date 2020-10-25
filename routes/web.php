<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\SkillShopController;

Route::get('/', [HomeController::class, 'index']);

Route::get('/skillshop', [SkillShopController::class, 'show']);
