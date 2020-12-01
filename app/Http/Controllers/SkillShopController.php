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

        // //return view('skillshop.index');
        // $response = Http::withHeaders([
        //     "content-type"  => "application/json",
        //     "authorization" => "Basic " . base64_encode($apikey),

        // ])->get('https://webservices.lightspeedvt.net/REST/V1/courses',[
        //     "page"          => "1",
        //     "itemsPerPage"  => "100",
        //     "systemId"      => $sysid
        // ]);


        // if($response->failed())
        // {
        //     $res = $response->body();
        //     $res = json_decode($res, true);
        //     return Inertia::render('Skillshop/index', compact('res'));
        // }
       
        //$courses = json_decode($response, true);
        return Inertia::render('Skillshop/form', compact('sysid', 'apikey'));

    

    }

    function submit(Request $request){
    
       Mail::to('chrishcodes@gmail.com')->send(new SkillshopMailer($request));

       
    }
       
    
}
