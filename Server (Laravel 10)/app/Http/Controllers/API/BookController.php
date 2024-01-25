<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Book;
use App\Models\Favorite;
use Illuminate\Support\Facades\DB;

class BookController extends Controller
{
    //
    public function chiTietSanPham($id){
        $books = Book::with('genres_books','images','author')->find($id);
        if(!empty($books))
        {
            return response()->json([
                'success' => true,
                'data' => $books,
            ]);
        }
    }
    public function danhSachSach() {

        $books = Book::with('genres_books','images','author')->get();

        return response()->json([
            'success' => true,
            'msg' => 'danh sach sach',
            'data' => $books,
        ]);
    }

    public function themSachYeuThich(Request $req, $id)
    {
      $favorites = Favorite::with('book','customer')->find($id);
      $favorites->book_id =$req->book_id;
      $favorites = new Favorite();
        if(!empty($favorites))
        {
            return response()->json([
                'success' =>false,
                'msg'=>"sach yeu thich da ton tai"
            ]);
        }
        $favorites->save();
        return response()->json([
            'success'=>true,
            'msg' => 'da them sach yeu thich',
            'data' => $favorites,
        ]);
    }

    public function xoaSachYeuThich(Request $req, $id)
    {
        $favorites = Favorite::with('book','customer')->find($id);
        $favorites->book_id =$req->book_id;
        if(empty($favorites))
        {
            return response()->json([
                'success' =>false,
                'msg'=>"sach yeu thich khong ton tai"
            ]);
        }
        $favorites->delete();
        return response()->json([
            'success'=>true,
            'msg' => 'da xoa sach yeu thich',
            'data' => $favorites,
        ]);
    }

}
