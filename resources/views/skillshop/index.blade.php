@extends('layouts.app')

@section('header')
    @include('skillshop.header')
@endsection

@section('content')
<div class="container lg mx-auto flex flex-col justify-center items-center skillshop-container">

    <div class="container lg mx-auto flex flex-col justify-center items-center skillshop-form-container">
        
        {{-- @foreach($courses as $course => $val)
            {{$val['courseId']}} : {{$val['courseName']}}<br>
        @endforeach --}}

        <form class="w-full max-w-2xl">
            <h2 class="my-8">
            Please fill out the Skill Shop application for system: {{-- <span>{{$sysid ?? ''}}</span> --}}
            </h2>
            <div class="flex items-center border-b border-blue-600 py-2 my-6">
                <input id="sysid" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="System Id" aria-label="System Id" value="{{$sysid ?? ''}}">
            </div>

            <div class="flex items-center border-b border-blue-600 py-2 my-6">
                <input id="product-name" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Product Name" aria-label="Product Name">
            </div>

            <div class="flex items-center border-b border-blue-600 py-2 my-6">
                <textarea id="overview" cols="30" rows="10" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Overview" aria-label="Overview"></textarea>
            </div>


            courses
            

            <div class="spacer m-24"></div>

            <div class="container price-container flex items-center my-10">
                <div class="w-1/4 md:w-1/2 mb-6 md:mb-0">
                    <label class="price-label block mb-2">Price Point #1</label>
                    <input id="price" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="number" placeholder="$ Price" aria-label="Price">
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label class="block mb-2" for="pricing-term">
                      Term
                    </label>
                    <div class="relative">
                      <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="pricing-term">
                        <option>Monthly</option>
                        <option>Quarterly</option>
                        <option>Yearly</option>
                        <option>One-Time</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                </div>
                
                <div class="w-full md:w-1/3 pr-3 mb-6 md:mb-0">
                    <label class="block mb-2" for="pricing-modle">
                      Pricing Modle
                    </label>
                    <div class="relative">
                      <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="pricing-modle">
                        <option>B2C</option>
                        <option>B2B</option>

                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                </div>
            </div>
            <a class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Add New Price Option
            </a>
            <div class="spacer m-24"></div>
            <div class="flex items-center border-b border-blue-600 py-2 my-6">
                <input id="sme-input" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Subject Matter Expert" aria-label="Subject Matter Expert">
            </div>
            <div class="flex items-center border-b border-blue-600 py-2 my-6">
                <textarea id="sme-bio" cols="30" rows="10" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Bio" aria-label="Bio"></textarea>
            </div>
            <div class="flex items-center border-b border-blue-600 py-2 my-6">
                <input id="sme-image" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Image Link" aria-label="Image Link">
            </div>
        </form>
    </div>
</div>
@endsection
