<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CaptchaController extends Controller
{
   public function index(){
    
    return view('index');
   }
   public function reloadCaptcha(){

      return response()->json(['captcha' => captcha_img('math')]);
   }

   public function post(Request $request){
      
      $request->validate([
         'email' => 'required',
         'password' => 'required|min:6',
         'captcha' => 'required|captcha',
      ]);

      return "the form has been successfully submitted";
   }
}
