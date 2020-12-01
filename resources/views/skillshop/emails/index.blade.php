@component('mail::message')
# Skill Shop Request

System Id: <br>
{{ $sysid }}

Product Name: <br>
{{ $productName }}

Overview: <br>
{{ $overview }}

Selected Courses: <br>
{{-- {{ $selectedCourses }} --}}

Price Points: <br>
@foreach ($pricePoints as $pricePoint)
{{ $pricePoint['price'] }} : {{ $pricePoint['term'] }} : {{ $pricePoint['priceModel'] }}
    
@endforeach

Subject Matter Expert: <br>
{{ $sme }}

Bio: <br>
{{ $bio }}

Image Link: <br>
{{ $imgLink }}



Thanks,<br>
{{ config('app.name') }}
@endcomponent
