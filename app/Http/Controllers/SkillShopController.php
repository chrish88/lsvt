<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class SkillShopController extends Controller
{
    function index(){

        return view('welcome');

    }

    function show(){

        $sysid  = request('sysid');
        $apikey = request('apikey'). ':lsvt';

        // return view('skillshop.index');
        $response = Http::withHeaders([
            "content-type"  => "application/json",
            "authorization" => "Basic " . base64_encode($apikey),

        ])->get('https://webservices.lightspeedvt.net/REST/V1/courses',[
            "page"          => "1",
            "itemsPerPage"  => "100",
            "systemId"      => $sysid
        ]);


        if($response->failed())
        {
            $res = $response->body();
            $res = json_decode($res, true);
            return view('welcome', compact('res'));
        }
       
        $courses = json_decode($response, true);
        return view('skillshop.index', compact('courses', 'sysid'));

    

    }
}
