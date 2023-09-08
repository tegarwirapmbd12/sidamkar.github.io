<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CaptchaController;
use App\Http\Controllers\FrontController;
use App\Http\Controllers\PegawaiController;
use App\Http\Controllers\RegisterController;
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

Route::get('/', [FrontController::class,'index']);
// Route::get('filter_provinsi', [FrontController::class, 'provinsi'])->name('provinsi.index');
// Route::get('selectRegenc/{id}', [FrontController::class, 'regency']);
Route::get('/search',[FrontController::class,'search'])->name('search');
Route::get('/biodata/{id}/show', [FrontController::class, 'show'])->name('biodata.show');;
Route::get('/pegawai',[PegawaiController::class,'index'])->middleware('auth');
Route::get('/pegawai/create',[PegawaiController::class,'create'])->middleware('auth');
Route::get('selectProv', [PegawaiController::class, 'provinsi'])->name('provinsi.index');
Route::get('selectRegenc/{id}', [PegawaiController::class, 'regency']);
Route::post('/pegawai/store',[PegawaiController::class,'store'])->middleware('auth');
Route::get('/pegawai/{id}/edit',[PegawaiController::class,'edit'])->name('pegawai.edit')->middleware('auth');
Route::post('/pegawai/{id}/update',[PegawaiController::class,'update'])->middleware('auth');
Route::get('/pegawai/{id}/delete',[PegawaiController::class,'destroy'])->middleware('auth');
Route::get('/pegawai/{id}/show', [PegawaiController::class, 'show'])->middleware('auth');
Route::get('/pegawai/search',[PegawaiController::class,'search'])->middleware('auth');
Route::get('/login',[AuthController::class,'index'])->name('login')->middleware('guest');
Route::post('/login',[AuthController::class,'authenticate']);
Route::get('/reload-captcha',[AuthController::class, 'reloadCaptcha']);
Route::post('/logout',[AuthController::class,'logout']);
Route::get('/register',[RegisterController::class,'index'])->middleware('admin');
Route::post('/register',[RegisterController::class,'store'])->middleware('admin');
Route::get('/profil',[ProfilController::class,'index']);

// Route::get('login', [LoginController::class, 'index'])->name('login')->middleware('guest');
// Route::post('login', [LoginController::class, 'authenticate']);
// Route::post('/logout', [LoginController::class, 'logout']);
