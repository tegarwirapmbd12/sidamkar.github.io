@extends('layouts.admin')

@section('content')

<div class="card card-info">
    <div class="card-header">
      <h3 class="card-title">Tambah Pegawai</h3>
    </div>
    <!-- /.card-header -->
    <div class="card-body">
      <form action="{{ url('/pegawai/store') }}" method="POST">
        {{ csrf_field() }}
        <div class="form-group">
            <label class="col-form-label" for="name">Nama</label>
            <input type="text" class="form-control" id="name" name="name" placeholder="Nama*" required>
        </div>
        <div class="form-group">
            <label class="col-form-label" for="persentase_penilaian">NIK/NIP</label>
            <input type="number" class="form-control" id="nik_nip"  name="nik_nip" placeholder="NIK/NIP" required>
        </div>
        <div class="form-group">
            <label class="col-form-label" for="instansi">Instansi</label>
            <input type="text" class="form-control" id="instansi"  name="instansi" placeholder="Instansi*" required>
        </div>
        <div class="row">
          <div class="col-sm-6">
              <label>Provinsi</label>
              <select class="form-control select2" id="selectProv" name="province_id" aria-label="Default select example" style="width: 100%;"></select>
          </div>
          <div class="col-sm-6">
            <label>Kota/Kab</label>
            <select class="form-control select2" id="selectRegenc" name="regency_id"  aria-label="Default select example" style="width: 100%;"></select>
        </div>
        </div>
        <div class="form-group">
            <label class="col-form-label" for="kode_verifikasi">Kode Verifikasi</label>
            <input type="text" class="form-control" id="kode_verifikasi"  name="kode_verifikasi" placeholder="Kode Verifikasi">
        </div>
        <div class="form-group">
            <label class="col-form-label" for="nomor_sertifikat">Nomor Sertifikat</label>
            <input type="text" class="form-control" id="nomor_sertifikat"  name="nomor_sertifikat" placeholder="Nomor Sertifikat">
        </div>
        <div class="form-group">
            <label class="col-form-label" for="jenis_diklat">Jenis Diklat</label>
            <input type="text" class="form-control" id="jenis_diklat"  name="jenis_diklat" placeholder="Jenis Diklat">
        </div>
        <div class="form-group">
            <label class="col-form-label" for="tanggal_pelaksanaan">Tanggal Pelaksanaan</label>
            <input type="text" class="form-control" id="tanggal_pelaksanaan"  name="tanggal_pelaksanaan" placeholder="Tanggal Pelaksanaan">
        </div>
        <div class="form-group">
            <label class="col-form-label" for="ditandatangani_oleh">Ditandatangani Oleh</label>
            <input type="text" class="form-control" id="ditandatangani_oleh"  name="ditandatangani_oleh" placeholder="Ditandatangani Oleh">
        </div>
        <div class="form-group">
            <label class="col-form-label" for="persentase_penilaian">Persentase Penilaian (%)</label>
            <input type="number" class="form-control" id="persentase_penilaian"  name="persentase_penilaian" placeholder="Persentase Penilaian* (Angka)" required>
        </div>
        <div class="card-footer">
            <button type="submit" class="btn btn-primary w-100 align-center">Tambah</button>
        </div>
      </form>
    </div>
    <!-- /.card-body -->

    <!-- /.card-body -->
  </div>
  @include('sweetalert::alert')
  @endsection
