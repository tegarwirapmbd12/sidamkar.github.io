@extends('layouts.admin')

@section('content')

  <!-- Content Wrapper. Contains page content -->


    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
            <div class="col-md-3">

                <!-- Profile Image -->
                <div class="card card-primary card-outline">
                  <div class="card-body box-profile">
                    <h3 class="profile-username text-center">{{ $pegawai->name }}</h3>
                      <p class="text-muted text-center">{{ $pegawai->nik_nip }}</p>
                        <ul class="list-group list-group-unbordered mb-3">
                          <li class="list-group-item">
                            <b>Asal Daerah</b>
                            <p class="text-muted">{{ $pegawai->regency->name }}, {{ $pegawai->province->name }}</p>
                          </li>
                          <li class="list-group-item">
                            <b>Instansi</b>
                            <p class="text-muted">{{ $pegawai->instansi }}</p>
                          </li>
                        </ul>
                    <a href="/pegawai/{{ $pegawai->id }}/edit" class="btn btn-primary btn-block"><b>Edit</b></a>
                  </div>
                </div>

                <!-- About Me Box -->
                <div class="card card-primary">
                  <div class="card-header">
                    <h3 class="card-title">Data Diri</h3>
                  </div>
                  <div class="card-body">
                        <strong>Kode Verifikasi</strong>
                        <p class="text-muted">{{ $pegawai->kode_verifikasi }}</p>
                    <hr>
                        <strong></i>Nomor Sertifikat</strong>
                        <p class="text-muted">{{ $pegawai->nomor_sertifikat }}</p>
                    <hr>
                        <strong></i>Jenis Diklat</strong>
                        <p class="text-muted">{{ $pegawai->jenis_diklat }} Jam</p>
                    <hr>
                        <strong></i>Tanggal Pelaksanaan</strong>
                        <p class="text-muted">{{ $pegawai->tanggal_pelaksanaan }}</p>
                    <hr>
                        <strong></i>Ditandatangani Oleh</strong>
                        <p class="text-muted">{{ $pegawai->ditandatangani_oleh }}</p>
                    <hr>
                        <strong>Persentase Penilaian</strong>
                        <p class="text-muted">{{ $pegawai->persentase_penilaian }} %</p>
                  </div>
                </div>
            </div>
          <!-- /.col -->

          {{-- form --}}
          <div class="col-md-9">
            <div class="card">
                <div class="card-body">
                    <form action="/pegawai/{{ $pegawai->id }}/update" method="POST">
                      {{ csrf_field() }}
                      <div class="form-group">
                          <label class="col-form-label" for="name">Nama</label>
                          <input type="text" class="form-control" id="name" name="name" value="{{ $pegawai->name }}" placeholder="Nama*" required>
                      </div>
                      <div class="form-group">
                          <label class="col-form-label" for="persentase_penilaian">NIK/NIP</label>
                          <input type="number" class="form-control" id="nik_nip"  name="nik_nip" value="{{ $pegawai->nik_nip }}" placeholder="NIK/NIP" required>
                      </div>
                      <div class="form-group">
                          <label class="col-form-label" for="instansi">Instansi</label>
                          <input type="text" class="form-control" id="instansi"  name="instansi" value="{{ $pegawai->instansi }}" placeholder="Instansi*" required>
                      </div>
                      <div class="row">
                        <div class="col-sm-6">
                            <label>Provinsi</label>
                            <select class="form-control select2" id="selectProv" name="province_id" aria-label="Default select example" style="width: 100%;" ></select>
                        </div>
                        <div class="col-sm-6">
                          <label>Kota/Kab</label>
                          <select class="form-control select2" id="selectRegenc" name="regency_id"  aria-label="Default select example" style="width: 100%;"></select>
                      </div>
                      </div>
                      <div class="form-group">
                          <label class="col-form-label" for="kode_verifikasi">Kode Verifikasi</label>
                          <input type="text" class="form-control" id="kode_verifikasi"  name="kode_verifikasi" value="{{ $pegawai->kode_verifikasi }}" placeholder="Kode Verifikasi">
                      </div>
                      <div class="form-group">
                          <label class="col-form-label" for="nomor_sertifikat">Nomor Sertifikat</label>
                          <input type="text" class="form-control" id="nomor_sertifikat"  name="nomor_sertifikat" value="{{ $pegawai->nomor_sertifikat }}" placeholder="Nomor Sertifikat">
                      </div>
                      <div class="form-group">
                          <label class="col-form-label" for="jenis_diklat">Jenis Diklat</label>
                          <input type="text" class="form-control" id="jenis_diklat"  name="jenis_diklat" value="{{ $pegawai->jenis_diklat }}" placeholder="Jenis Diklat">
                      </div>
                      <div class="form-group">
                          <label class="col-form-label" for="tanggal_pelaksanaan">Tanggal Pelaksanaan</label>
                          <input type="text" class="form-control" id="tanggal_pelaksanaan"  name="tanggal_pelaksanaan" value="{{ $pegawai->tanggal_pelaksanaan }}" placeholder="Tanggal Pelaksanaan">
                      </div>
                      <div class="form-group">
                          <label class="col-form-label" for="ditandatangani_oleh">Ditandatangani Oleh</label>
                          <input type="text" class="form-control" id="ditandatangani_oleh"  name="ditandatangani_oleh" value="{{ $pegawai->ditandatangani_oleh }}" placeholder="Ditandatangani Oleh">
                      </div>
                      <div class="form-group">
                          <label class="col-form-label" for="persentase_penilaian">Persentase Penilaian (%)</label>
                          <input type="number" class="form-control" id="persentase_penilaian"  name="persentase_penilaian" value="{{ $pegawai->persentase_penilaian }}" placeholder="Persentase Penilaian* (Angka)" required>
                      </div>
                      <div class="card-footer">
                          <button type="submit" class="btn btn-primary w-100 align-center">Ubah</button>
                      </div>
                    </form>
                </div>
            </div>
          </div>
          {{-- / form --}}

        </div>
      </div>
    </section>
    <!-- /.content -->
  @include('sweetalert::alert')
  @endsection


