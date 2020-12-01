<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\SkillshopController;
use App\Mail\SkillshopMailer;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class, 'index']);

Route::get('/skillshop', [SkillshopController::class, 'index']);

Route::get('/skillshop/form', [SkillshopController::class, 'show']);

Route::post('/skillshop/form/submit', [SkillshopController::class, 'submit']);
Route::get('/skillshop/email', function(){
    return new SkillshopMailer;
});