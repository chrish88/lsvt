<?php

namespace App\Http\Controllers;

use App\Mail\SkillshopMailer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class SkillshopController extends Controller
{
    function index()
    {
        return Inertia::render('Skillshop/index');
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

    function submit(Request $request){
        //dd($request);

        $params = $request->json();
        
        $request->validate([
            'sysid'             => 'required',
            'productName'       => 'required',
            'overview'          => 'required',
            'selectedCourses'   => 'required',
            'pricePoints'       => 'required',
            'sme'               => 'required',
            'bio'               => 'required',
            'imgLink'           => 'required'
        ]);
        

       //Mail::to('chrishcodes@gmail.com')->send(new SkillshopMailer($request));

       
    }
       
    
}
