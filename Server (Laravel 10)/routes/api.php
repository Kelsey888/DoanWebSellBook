<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AccountController;
use App\Http\Controllers\API\BookController;
use App\Http\Controllers\API\FilterController;

use App\Http\Controllers\API\CartController;

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

Route::post('/admin/dang-nhap', [AccountController::class, 'login']);


Route::get('/admin/danh-sach-sach', [BookController::class, 'danhSachSach']);
Route::get('/chi-tiet-san-pham/{id}', [BookController::class, 'chiTietSanPham']);

Route::group([
    'middleware' => 'auth:api',
], function () {

    Route::post('/admin/dang-xuat', [AccountController::class, 'logout']);
});

Route::post('/gio-hang', [CartController::class, 'gioHang_id']);


Route::get('/danh-sach-sach',[BookController::class, 'danhSachSach']);
Route::post('/them-sach-yeu-thich/{id}',[BookController::class, 'themSachYeuThich']);
Route::delete('/xoa-sach-yeu-thich/{id}',[BookController::class, 'xoaSachYeuThich']);
Route::get('/the-loai-sach',[FilterController::class, 'theoTheLoaiSach']);
Route::get('/tac-gia-sach',[FilterController::class, 'theoTacGia']);
Route::get('/nha-cung-cap-sach',[FilterController::class, 'theoNhaCungCap']);
