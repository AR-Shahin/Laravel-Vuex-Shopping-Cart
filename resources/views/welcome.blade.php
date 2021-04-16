@extends('layouts.app')
@section('app_content')
<router-link :to="{name:'about'}">Home</router-link>
<router-view></router-view>
@stop
