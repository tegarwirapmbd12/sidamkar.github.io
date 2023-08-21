<?php

use App\Http\Controllers\AsuController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CaptchaController;
use App\Http\Controllers\PegawaiController;
use App\Models\Asu;
use App\Models\Pegawai;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/pegawai',[PegawaiController::class,'index']);
Route::get('/pegawai/create',[PegawaiController::class,'create']);
Route::post('/pegawai/store',[PegawaiController::class,'store']);
Route::get('/pegawai/{id}/edit',[PegawaiController::class,'edit'])->name('pegawai.edit');
Route::post('/pegawai/{id}/update',[PegawaiController::class,'update']);
Route::get('/pegawai/{id}/delete',[PegawaiController::class,'destroy']);
Route::get('/pegawai/{id}/show', [PegawaiController::class, 'show']);
Route::get('/pegawai/search',[PegawaiController::class,'search']);
Route::get('/admin',[AuthController::class,'login']);
Route::get('/admin',[CaptchaController::class,'index']);
Route::get('/reload-captcha',[CaptchaController::class, 'reloadCaptcha']);
Route::post('/post',[CaptchaController::class,'post']);