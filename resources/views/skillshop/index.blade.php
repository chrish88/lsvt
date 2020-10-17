@extends('layouts.app')

@section('content')
<div class="container lg mx-auto flex flex-col justify-center items-center skillshop-container">

    <div class="container lg mx-auto flex flex-col justify-center items-center skillshop-form-container">
        
        {{-- @foreach($courses as $course => $val)
            {{$val['courseId']}} : {{$val['courseName']}}<br>
        @endforeach --}}

        <form class="w-full max-w-2xl">
            <div class="min-w-full bg-gray-900">
                <img src="http://www.lightspeedvt.com/hosted/images/0b/0ec3d1100f459d911d377287caeb14/SkillShop_Logo.png" alt="">
            </div>
            <br>
            <h2 class="my-8">
            Please fill out the Skill Shop application for system: {{-- <span>{{$sysid ?? ''}}</span> --}}
            </h2>
            <div class="flex items-center border-b border-teal-500 py-2 my-6">
                <input id="sysid" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="System Id" aria-label="System Id" value="{{$sysid ?? ''}}">
            </div>

            <div class="flex items-center border-b border-teal-500 py-2 my-6">
                <input id="product-name" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Product Name" aria-label="Product Name">
            </div>

            <div class="flex items-center border-b border-teal-500 py-2 my-6">
                <textarea id="overview" cols="30" rows="10" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Overview" aria-label="Overview"></textarea>
            </div>

            <div class="w-1/4 md:w-1/2 mb-6 md:mb-0">
                <input id="price" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-teal-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="number" placeholder="$ Price" aria-label="Price">
            </div>
        </form>
    </div>
</div>
@endsection
<textarea name="" id="" cols="30" rows="10"></textarea>