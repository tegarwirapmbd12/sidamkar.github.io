@extends('layouts.admin')

@section('content')
    
<div class="card card-info">
    <div class="card-header">
      <h3 class="card-title">Tambah Pegawai</h3>
    </div>
    <!-- /.card-header -->
    <div class="card-body">
      <form action="{{ url('/asu/store') }}" method="POST">
        {{ csrf_field() }}
        <div class="form-group">
            <label class="col-form-label" for="name"><i class="far fa-bell"></i> Nama</label>
            <input type="text" class="form-control" id="name" name="name" placeholder="Nama" required>
          </div>
        <div class="card-footer">
            <button type="submit" class="btn btn-primary w-100 align-center">Tambah</button>
        </div>
    </div>
      </form>
    </div>
    <!-- /.card-body -->
  
    <!-- /.card-body -->
  </div>
  @endsection