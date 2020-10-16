@extends('layouts.app')

@section('content')
{{-- {{$courses}} --}}
    @foreach($courses as $course => $val)
        {{$val['courseId']}} : {{$val['courseName']}}<br>
    @endforeach

@endsection