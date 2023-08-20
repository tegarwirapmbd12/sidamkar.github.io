@extends('layouts.admin')

@section('content') 
    
<div class="card card-info">
    <div class="card-header">
      <h3 class="card-title">Edit Pegawai</h3>
    </div>
    <!-- /.card-header -->
    <div class="card-body">
      <form action="/pegawai/{{ $pegawai->id }}/update" method="POST">
        {{ csrf_field() }}
        <div class="form-group">
            <label class="col-form-label" for="name"><i class="far fa-bell"></i> Nama</label>
            <input type="text" class="form-control" id="name" name="name" placeholder="Nama*" value="{{ $pegawai->name }}" required>
          </div>
        <div class="row">
          <div class="col-sm-6">
            <!-- text input -->
            <div class="form-group">
              <label for="tempat_lahir">Tempat Lahir</label>
              <input type="text" class="form-control" placeholder="Tempat Lahir*" id="tempat_lahir" name="tempat_lahir" value="{{ $pegawai->tempat_lahir }}" required>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group">
              <label for="tanggal_lahir">Tanggal Lahir</label>
              <input type="date" class="form-control" placeholder="Tanggal Lahir*" id="tanggal_lahir" name="tanggal_lahir" required>
            </div>
          </div>
        </div>
        <div class="form-group">
            <label class="col-form-label" for="jabatan"><i class="far fa-bell"></i> Jabatan</label>
            <input type="text" class="form-control" id="jabatan"  name="jabatan" placeholder="Jabatan*" value="{{ $pegawai->jabatan }}" required>
        </div>
        <div class="form-group">
            <label class="col-form-label" for="instansi"><i class="far fa-bell"></i> Instansi</label>
            <input type="text" class="form-control" id="instansi"  name="instansi" placeholder="Instansi*" value="{{ $pegawai->instansi }}" required>
        </div>
        <div class="form-group">
            <label class="col-form-label" for="penandatanganan_sertifikat"><i class="far fa-bell"></i> Penandatanganan Sertifikat</label>
            <input type="text" class="form-control" id="penandatanganan_sertifikat" name="penandatanganan_sertifikat" placeholder="Penandatanganan Sertifikat*" value="{{ $pegawai->penandatanganan_sertifikat }}" required>
        </div>
        <div class="row">
            <div class="col-sm-6">
              <!-- text input -->
              <div class="form-group">
                <label for="tanggal_pelaksanaan">Tanggal Pelaksanaan</label>
                <input type="date" class="form-control" placeholder="Tanggal Pelaksanaan*"  id="tanggal_pelaksanaan" name="tanggal_pelaksanaan" required>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label for="jumlah_jam_pelajaran">Jumlah Jam Pelajaran</label>
                <input type="number" class="form-control" placeholder="Jumlah Jam Pelajaran* (Angka)" id="jumlah_jam_pelajaran" name="jumlah_jam_pelajaran" value="{{ $pegawai->jumlah_jam_pelajaran }}" required>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label class="col-form-label" for="instansi_penyelenggara"><i class="far fa-bell"></i> Instansi Penyelenggara Kegiatan</label>
            <input type="text" class="form-control" id="instansi_penyelenggara" name="instansi_penyelenggara"  placeholder="Instansi Penyelenggara Kegiatan*" value="{{ $pegawai->instansi_penyelenggara }}" required>
        </div>
        <div class="form-group">
            <label class="col-form-label" for="jenis_diklat"><i class="far fa-bell"></i> Jenis Diklat</label>
            <input type="text" class="form-control" id="jenis_diklat"  name="jenis_diklat" placeholder="Jenis Diklat*" value="{{ $pegawai->jenis_diklat }}" required>
        </div>
        <div class="form-group">
            <label class="col-form-label" for="persentase_penilaian"><i class="far fa-bell"></i> Persentase Penilaian</label>
            <input type="number" class="form-control" id="persentase_penilaian"  name="persentase_penilaian" placeholder="Persentase Penilaian*" value="{{ $pegawai->persentase_penilaian }}" required>
        </div>
        <div class="card-footer">
            <button type="submit" class="btn btn-primary w-100 align-center">Ubah</button>
        </div>
    </div>
      </form>
    </div>
    <!-- /.card-body -->
  
    <!-- /.card-body -->
  </div>
  

@endsection