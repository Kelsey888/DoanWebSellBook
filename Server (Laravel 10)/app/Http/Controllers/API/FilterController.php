<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Genre;
use App\Models\Author;
use App\Models\Supplier;
use Illuminate\Support\Facades\DB;

class FilterController extends Controller
{
    public function theoTheLoaiSach() {

        $genres = Genre::with('genres_books')->get();

        return response()->json([
            'success' => true,
            'msg' => 'the loai sach',
            'data' => $genres,
        ]);
    }
    public function theoTacGia() {

        $authors = Author::with('books')->get();

        return response()->json([
            'success' => true,
            'msg' => 'tac gia sach',
            'data' => $authors,
        ]);
    }
    public function theoNhaCungCap() {

        $suppliers = Supplier::all();

        return response()->json([
            'success' => true,
            'msg' => 'nha cung cap',
            'data' => $suppliers,
        ]);
    }
}