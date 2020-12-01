<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SSMailController extends Controller
{
    function submit(Request $request){
        echo '<pre>';
        print_r(request('form'));
        echo '</pre>';
        
    }
}
