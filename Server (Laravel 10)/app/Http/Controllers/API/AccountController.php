<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AccountController extends Controller
{
    public function login()
    {
        $account = request(['username', 'password']);

        if (! $token = auth()->attempt($account)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return response()->json([
            'me' => auth()->user(),
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 10
        ]);    
    }

    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

}
