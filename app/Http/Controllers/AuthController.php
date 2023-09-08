<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function index()
    {
        return view('user.login', [
            'title' => 'Login'
        ]);
        
    }
    public function authenticate(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required',
            'password' => 'required'
            // 'captcha' => 'required|captcha'
        ]);

        if(Auth::attempt($credentials)){
            $request->session()->regenerate();
            return redirect()->intended('/pegawai');
        }

        return back()->with('loginError');
        
    }
    // public function reloadCaptcha()
    // {
    //     return response()->json(['captcha'=> captcha_img('math')]);
    // }
    public function logout()
    {
        Auth::logout();
 
        request()->session()->invalidate();
     
        request()->session()->regenerateToken();
     
        return redirect('/login');
    }
}
