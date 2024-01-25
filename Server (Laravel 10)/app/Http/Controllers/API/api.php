<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


//admin
Route::post('/admin/dang-nhap', [AccountController::class, 'login']);


Route::get('/admin/danh-sach-sach', [BookController::class, 'danhSachSach']);

Route::group([
    'middleware' => 'auth:api',
], function () {

    Route::post('/admin/dang-xuat', [AccountController::class, 'logout']);
});



//user


