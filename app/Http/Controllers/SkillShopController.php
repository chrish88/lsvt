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

        $response = Http::withHeaders([
            "content-type" => "application/json",
            "authorization" => "Basic " . base64_encode($apikey),

        ])->get('https://webservices.lightspeedvt.net/REST/V1/courses',[
            "page" => "1",
            "itemsPerPage" => "100",
            "systemId" => $sysid
        ]);
        if( $response->failed())
        {
            $res = $response->body();
            return view('welcome', compact('res'));
        }
       
        $courses = json_decode($response, true);
        return view('skillshop.index', compact('courses'));

        // echo base64_encode('6C5B35FD:lsvt');

    }
}
