<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Customer;
class CartController extends Controller
{
    public function gioHang_id(Request $req){
        $cart = Customer::where('id','=' , $req->customer_id)->with('cart')->first();
        return response()->json([
            'success'=>true,
            'data'=>$cart,

        ]);
    }


}
