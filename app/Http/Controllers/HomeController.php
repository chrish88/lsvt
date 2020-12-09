<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class HomeController extends Controller
{
    function index()
    {
        return view('welcome');
    }

    function show(Request $request)
    {
        $request->validate([
            'sysid'     =>  'required',
            'apikey'    =>  'required'  
        ]);

        $sysid  = request('sysid');
        $apikey = request('apikey');

        return Inertia::render('Skillshop/form', compact('sysid', 'apikey'));

    

    }
       
    
}
