@extends('product.layout')
@section('content')
	<div class="row">
		<div class="col-lg-12 margin-tb">
			<div class="pull-left">
				<h2>Assignment 7</h2>
			</div>
			<div class="pull-right">
				<a class=btn btn-success" href="{{route('product.create')}}">Create New Product</a>
			</div>
		</div>
	</div>
	@if ($message = Session::get('success'))
		<div class="alert alert-success">
			<p>{{$message}}</p>
		</div>
	@endif
	<table class="table table-bordered">
		<tr>
			<th>Number</th>
			<th>Name</th>
			<th>Price</th>
			<th width="300px">Action</th>
		</tr>
		@foreach ($product as $prod)
		<tr>
			<td>{{ ++$i }} </td>
			<td>{{ $prod->name }} </td>
			<td>{{ $prod->price }} </td>
			<td>
				<form action="{{ route('product.destroy',$prod->id) }}" method="POST">
					<a class="btn btn-info" href="{{route('product.show',$prod->id)}}">Show</a>
					<a class="btn btn-primary" href="{{route('product.edit',$prod->id)}}">Edit</a>
					@csrf
					@method('DELETE')
					<button type="submit" class="btn btn-danger">Delete</button>
				</form>
			</td>
		</tr>
		@endforeach
	</table>
	{!! $product->links() !!}
@endsection